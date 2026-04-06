/**
 * Ember Dashboard – Template Interactive Layer
 * Handles: dark mode, sidebar collapse, theme customizer, nav groups
 */
(function () {
  'use strict';

  /* ── Helpers ─────────────────────────────────────────────────────────────── */
  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => [...(ctx || document).querySelectorAll(sel)];

  const SUN_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>`;
  const MOON_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/></svg>`;

  /* ── Dark Mode ───────────────────────────────────────────────────────────── */
  function initDarkMode() {
    const btn = $('[aria-label="Toggle theme"]');
    if (!btn) return;

    const applyTheme = (dark) => {
      document.documentElement.classList.toggle('dark', dark);
      btn.innerHTML = dark ? SUN_ICON : MOON_ICON;
      $$('.theme-mode-btn').forEach(b => b.classList.toggle('bg-accent', b.dataset.mode === (dark ? 'dark' : 'light')));
    };

    // Restore from storage or system preference
    const stored = localStorage.getItem('ember-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(stored ? stored === 'dark' : prefersDark);

    btn.addEventListener('click', () => {
      const dark = !document.documentElement.classList.contains('dark');
      localStorage.setItem('ember-theme', dark ? 'dark' : 'light');
      applyTheme(dark);
    });
  }

  /* ── Sidebar Collapse ────────────────────────────────────────────────────── */
  function initSidebarCollapse() {
    const collapseBtn = $('[aria-label="Collapse sidebar"]');
    const sidebar = $('aside.fixed');
    const layout = $('.lg\\:pl-\\[260px\\]') || $('[class*="lg:pl-[260"]');
    if (!collapseBtn || !sidebar) return;

    const CHEVRON = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>`;
    collapseBtn.innerHTML = CHEVRON;

    const apply = (collapsed) => {
      if (collapsed) {
        sidebar.style.width = '64px';
        sidebar.setAttribute('data-collapsed', 'true');
        $$('span.flex-1, .flex-1:not(div)', sidebar).forEach(el => { el.style.opacity = '0'; el.style.width = '0'; el.style.overflow = 'hidden'; });
        $$('.text-\\[10px\\]', sidebar).forEach(el => { el.style.display = 'none'; });
        collapseBtn.style.transform = 'rotate(180deg)';
        if (layout) layout.style.paddingLeft = '64px';
      } else {
        sidebar.style.width = '260px';
        sidebar.removeAttribute('data-collapsed');
        $$('span.flex-1, .flex-1:not(div)', sidebar).forEach(el => { el.style.opacity = ''; el.style.width = ''; el.style.overflow = ''; });
        $$('.text-\\[10px\\]', sidebar).forEach(el => { el.style.display = ''; });
        collapseBtn.style.transform = '';
        if (layout) layout.style.paddingLeft = '';
      }
    };

    const stored = localStorage.getItem('ember-sidebar-collapsed') === 'true';
    apply(stored);

    collapseBtn.addEventListener('click', () => {
      const next = sidebar.getAttribute('data-collapsed') !== 'true';
      localStorage.setItem('ember-sidebar-collapsed', next);
      apply(next);
    });
  }

  /* ── Nav Group Collapse ──────────────────────────────────────────────────── */
  function initNavGroups() {
    $$('nav button').forEach(btn => {
      const collapsible = btn.nextElementSibling;
      if (!collapsible || !collapsible.classList.contains('grid')) return;

      btn.addEventListener('click', () => {
        const open = collapsible.style.gridTemplateRows !== '0fr';
        collapsible.style.gridTemplateRows = open ? '0fr' : '1fr';
        collapsible.style.opacity = open ? '0' : '1';
        const chevron = btn.querySelector('svg:last-child');
        if (chevron) chevron.style.transform = open ? '' : 'rotate(90deg)';
      });
    });
  }

  /* ── Theme Customizer Panel ──────────────────────────────────────────────── */
  const COLOR_PRESETS = {
    coral:  { h: 30,  c: 0.18, hex: '#e8734a' },
    teal:   { h: 175, c: 0.14, hex: '#2a9d8f' },
    blue:   { h: 230, c: 0.19, hex: '#4361ee' },
    violet: { h: 280, c: 0.17, hex: '#7b2d8b' },
    sage:   { h: 145, c: 0.10, hex: '#52796f' },
    amber:  { h: 60,  c: 0.18, hex: '#e9c46a' },
  };

  window.setColorPreset = function (name) {
    const p = COLOR_PRESETS[name];
    if (!p) return;
    const low = p.c < 0.05;
    const v = low ? `oklch(0.205 ${p.c} ${p.h})` : `oklch(0.62 ${p.c} ${p.h})`;
    const s = document.documentElement.style;
    s.setProperty('--primary', v);
    s.setProperty('--primary-foreground', low ? 'oklch(0.985 0 0)' : 'oklch(1 0 0)');
    s.setProperty('--sidebar-primary', v);
    s.setProperty('--ring', low ? `oklch(0.708 ${p.c} ${p.h})` : v);
    if (!low) s.setProperty('--chart-1', v);
    localStorage.setItem('ember-color-preset', name);
    $$('.color-preset-btn').forEach(b => b.classList.toggle('ring-2 ring-primary ring-offset-2', b.dataset.preset === name));
  };

  window.setTheme = function (mode) {
    const dark = mode === 'dark';
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('ember-theme', mode);
    const btn = $('[aria-label="Toggle theme"]');
    if (btn) btn.innerHTML = dark ? SUN_ICON : MOON_ICON;
    $$('.theme-mode-btn').forEach(b => b.classList.toggle('bg-accent', b.dataset.mode === mode));
  };

  window.setDensity = function (density) {
    ['compact', 'comfortable', 'spacious'].forEach(d =>
      document.documentElement.classList.toggle('density-' + d, d === density)
    );
    localStorage.setItem('ember-density', density);
    $$('.density-btn').forEach(b => b.classList.toggle('bg-accent', b.dataset.density === density));
  };

  function createThemePanel() {
    const el = document.createElement('div');
    el.id = 'ember-theme-panel';
    el.setAttribute('aria-label', 'Theme customizer');
    el.style.cssText = 'position:fixed;inset-block:0;inset-inline-end:0;z-index:9999;width:288px;display:flex;flex-direction:column;background:var(--background);border-inline-start:1px solid var(--border);box-shadow:-4px 0 24px rgba(0,0,0,.12);transform:translateX(100%);transition:transform .3s ease;';

    el.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:space-between;padding:16px 20px;border-bottom:1px solid var(--border);">
        <div>
          <p style="font-size:14px;font-weight:600;color:var(--foreground);margin:0;">Customize</p>
          <p style="font-size:11px;color:var(--muted-foreground);margin:2px 0 0;">Pick your style</p>
        </div>
        <button id="close-theme-panel" style="display:flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:6px;border:1px solid var(--border);background:transparent;cursor:pointer;color:var(--muted-foreground);" aria-label="Close">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:20px;display:flex;flex-direction:column;gap:24px;">
        <div>
          <p style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.1em;color:var(--muted-foreground);margin:0 0 12px;">Color Preset</p>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
            ${Object.entries(COLOR_PRESETS).map(([name, p]) => `
              <button class="color-preset-btn" data-preset="${name}" onclick="setColorPreset('${name}')"
                style="display:flex;flex-direction:column;align-items:center;gap:6px;padding:8px;border-radius:8px;border:2px solid var(--border);background:transparent;cursor:pointer;transition:border-color .15s;">
                <div style="width:28px;height:28px;border-radius:50%;background:${p.hex};box-shadow:0 1px 3px rgba(0,0,0,.2);"></div>
                <span style="font-size:10px;font-weight:500;color:var(--muted-foreground);text-transform:capitalize;">${name}</span>
              </button>`).join('')}
          </div>
        </div>
        <div>
          <p style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.1em;color:var(--muted-foreground);margin:0 0 12px;">Appearance</p>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
            <button class="theme-mode-btn" data-mode="light" onclick="setTheme('light')"
              style="display:flex;align-items:center;justify-content:center;gap:8px;padding:10px;border-radius:8px;border:1px solid var(--border);background:transparent;cursor:pointer;font-size:13px;font-weight:500;color:var(--foreground);">
              ${SUN_ICON} Light
            </button>
            <button class="theme-mode-btn" data-mode="dark" onclick="setTheme('dark')"
              style="display:flex;align-items:center;justify-content:center;gap:8px;padding:10px;border-radius:8px;border:1px solid var(--border);background:transparent;cursor:pointer;font-size:13px;font-weight:500;color:var(--foreground);">
              ${MOON_ICON} Dark
            </button>
          </div>
        </div>
        <div>
          <p style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.1em;color:var(--muted-foreground);margin:0 0 12px;">Density</p>
          <div style="display:flex;gap:6px;">
            ${['compact','comfortable','spacious'].map(d => `
              <button class="density-btn" data-density="${d}" onclick="setDensity('${d}')"
                style="flex:1;padding:8px 4px;border-radius:8px;border:1px solid var(--border);background:transparent;cursor:pointer;font-size:11px;font-weight:500;color:var(--foreground);text-transform:capitalize;">${d}</button>`).join('')}
          </div>
        </div>
        <div>
          <p style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.1em;color:var(--muted-foreground);margin:0 0 12px;">Layout</p>
          <div style="display:flex;gap:6px;">
            <button onclick="document.documentElement.classList.remove('layout-topnav');document.documentElement.classList.add('layout-sidebar');localStorage.setItem('ember-layout','sidebar');"
              style="flex:1;padding:8px 4px;border-radius:8px;border:1px solid var(--border);background:transparent;cursor:pointer;font-size:11px;font-weight:500;color:var(--foreground);">Sidebar</button>
            <button onclick="document.documentElement.classList.remove('layout-sidebar');document.documentElement.classList.add('layout-topnav');localStorage.setItem('ember-layout','topnav');"
              style="flex:1;padding:8px 4px;border-radius:8px;border:1px solid var(--border);background:transparent;cursor:pointer;font-size:11px;font-weight:500;color:var(--foreground);">Top Nav</button>
          </div>
        </div>
      </div>`;

    document.body.appendChild(el);

    el.querySelector('#close-theme-panel').addEventListener('click', () => {
      el.style.transform = 'translateX(100%)';
    });

    // Click outside to close
    document.addEventListener('click', (e) => {
      const customizeBtn = $('[aria-label="Customize theme"]');
      if (!el.contains(e.target) && e.target !== customizeBtn && !customizeBtn?.contains(e.target)) {
        el.style.transform = 'translateX(100%)';
      }
    }, true);

    return el;
  }

  function initThemeCustomizer() {
    const btn = $('[aria-label="Customize theme"]');
    if (!btn) return;
    const panel = createThemePanel();

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = panel.style.transform !== 'translateX(100%)';
      panel.style.transform = open ? 'translateX(100%)' : 'translateX(0)';
    });

    // Restore active states
    const preset = localStorage.getItem('ember-color-preset');
    if (preset) {
      setTimeout(() => window.setColorPreset(preset), 50);
    }
    const density = localStorage.getItem('ember-density') || 'comfortable';
    setTimeout(() => {
      $$('.density-btn').forEach(b => b.classList.toggle('bg-accent', b.dataset.density === density));
      const theme = localStorage.getItem('ember-theme') || 'light';
      $$('.theme-mode-btn').forEach(b => b.classList.toggle('bg-accent', b.dataset.mode === theme));
    }, 60);
  }

  /* ── Charts (runs only on pages that have canvas#dashboardChart) ─────────── */
  function initDashboardCharts() {
    if (typeof Chart === 'undefined') return;

    const isDark = () => document.documentElement.classList.contains('dark');
    const gridColor = () => isDark() ? 'rgba(255,255,255,.06)' : 'rgba(0,0,0,.06)';
    const textColor = () => isDark() ? 'rgba(255,255,255,.5)' : 'rgba(0,0,0,.45)';

    // Patient Visits Chart
    const visitsCtx = document.getElementById('visitsChart');
    if (visitsCtx) {
      new Chart(visitsCtx, {
        type: 'line',
        data: {
          labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
          datasets: [{
            label: 'Visits',
            data: [210,185,230,260,245,310,295,340,315,370,355,410],
            borderColor: 'var(--primary)',
            backgroundColor: 'color-mix(in srgb, var(--primary) 12%, transparent)',
            borderWidth: 2,
            pointRadius: 3,
            pointBackgroundColor: 'var(--primary)',
            tension: 0.4,
            fill: true,
          }, {
            label: 'Last Year',
            data: [165,155,195,215,200,250,235,275,255,295,280,330],
            borderColor: gridColor(),
            backgroundColor: 'transparent',
            borderWidth: 1.5,
            borderDash: [4, 3],
            pointRadius: 0,
            tension: 0.4,
          }],
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: { legend: { display: false }, tooltip: { mode: 'index', intersect: false } },
          scales: {
            x: { grid: { color: gridColor() }, ticks: { color: textColor(), font: { size: 11 } } },
            y: { grid: { color: gridColor() }, ticks: { color: textColor(), font: { size: 11 } } },
          },
        },
      });
    }

    // Appointment Types Donut
    const typesCtx = document.getElementById('appointmentTypesChart');
    if (typesCtx) {
      new Chart(typesCtx, {
        type: 'doughnut',
        data: {
          labels: ['General', 'Follow-up', 'Emergency', 'Specialist', 'Telehealth'],
          datasets: [{
            data: [32, 24, 8, 20, 16],
            backgroundColor: [
              'var(--primary)',
              'color-mix(in srgb, var(--primary) 70%, white)',
              '#ef4444',
              'color-mix(in srgb, var(--primary) 45%, white)',
              '#94a3b8',
            ],
            borderWidth: 0,
            hoverOffset: 4,
          }],
        },
        options: {
          responsive: true, maintainAspectRatio: false, cutout: '72%',
          plugins: {
            legend: {
              position: 'bottom',
              labels: { color: textColor(), font: { size: 11 }, padding: 12, boxWidth: 10, boxHeight: 10, borderRadius: 3 },
            },
          },
        },
      });
    }

    // Revenue Bar Chart
    const revenueCtx = document.getElementById('revenueChart');
    if (revenueCtx) {
      new Chart(revenueCtx, {
        type: 'bar',
        data: {
          labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
          datasets: [{
            label: 'Revenue',
            data: [58000,52000,67000,72000,69000,85000,78000,94000,88000,103000,97000,115000],
            backgroundColor: 'color-mix(in srgb, var(--primary) 80%, transparent)',
            borderRadius: 6,
            borderSkipped: false,
          }],
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: { grid: { display: false }, ticks: { color: textColor(), font: { size: 11 } } },
            y: {
              grid: { color: gridColor() },
              ticks: { color: textColor(), font: { size: 11 }, callback: v => '$' + (v/1000).toFixed(0) + 'k' },
            },
          },
        },
      });
    }
  }

  /* ── Init ────────────────────────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    initDarkMode();
    initSidebarCollapse();
    initNavGroups();
    initThemeCustomizer();

    // Wait for Chart.js if it's loading async
    if (typeof Chart !== 'undefined') {
      initDashboardCharts();
    } else {
      document.addEventListener('chartjs-ready', initDashboardCharts);
    }
  });
})();
