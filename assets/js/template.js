/**
 * Ember Dashboard – Template Interactive Layer
 */
(function () {
  'use strict';

  const $ = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => [...(c || document).querySelectorAll(s)];

  const SUN = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>`;
  const MOON = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/></svg>`;

  /* ── Density CSS ─────────────────────────────────────────────────────────── */
  function injectDensityCSS() {
    const style = document.createElement('style');
    style.textContent = `
      .density-compact  main { padding: 12px !important; }
      .density-compact  header { height: 52px !important; }
      .density-compact  nav a, .density-compact nav button { padding: 6px 12px !important; font-size: 12px !important; }
      .density-compact  .rounded-xl { padding: 12px !important; }
      .density-spacious main { padding: 32px !important; }
      .density-spacious header { height: 72px !important; }
      .density-spacious nav a, .density-spacious nav button { padding: 12px 16px !important; font-size: 14px !important; }
      .density-spacious .rounded-xl { padding: 24px !important; }
      /* Top-nav layout */
      .layout-topnav aside.fixed { display: none !important; }
      .layout-topnav .lg\\:pl-\\[260px\\], .layout-topnav [style*="padding-left"] { padding-left: 0 !important; }
      .layout-topnav #ember-topnav { display: flex !important; }
      /* Theme panel active states */
      .color-preset-btn.active { outline: 2px solid var(--primary); outline-offset: 2px; }
      .theme-mode-btn.active, .density-btn.active { background: var(--accent); }
    `;
    document.head.appendChild(style);
  }

  /* ── Dark Mode ───────────────────────────────────────────────────────────── */
  function initDarkMode() {
    const btn = $('[aria-label="Toggle theme"]');
    if (!btn) return;
    const apply = (dark) => {
      document.documentElement.classList.toggle('dark', dark);
      btn.innerHTML = dark ? SUN : MOON;
      $$('.theme-mode-btn').forEach(b => b.classList.toggle('active', b.dataset.mode === (dark ? 'dark' : 'light')));
    };
    const stored = localStorage.getItem('ember-theme');
    apply(stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches);
    btn.addEventListener('click', () => {
      const dark = !document.documentElement.classList.contains('dark');
      localStorage.setItem('ember-theme', dark ? 'dark' : 'light');
      apply(dark);
    });
  }

  /* ── Sidebar Collapse ────────────────────────────────────────────────────── */
  function initSidebarCollapse() {
    const btn = $('[aria-label="Collapse sidebar"]');
    const sidebar = $('aside.fixed');
    if (!btn || !sidebar) return;
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>`;
    const apply = (collapsed) => {
      sidebar.style.transition = 'width .25s ease';
      sidebar.style.overflow = 'hidden';
      sidebar.style.width = collapsed ? '64px' : '260px';
      sidebar.setAttribute('data-collapsed', collapsed);
      $$('span.flex-1', sidebar).forEach(el => { el.style.opacity = collapsed ? '0' : ''; el.style.width = collapsed ? '0' : ''; });
      $$('.text-\\[10px\\]', sidebar).forEach(el => { el.style.display = collapsed ? 'none' : ''; });
      btn.style.transform = collapsed ? 'rotate(180deg)' : '';
      const main = $('[class*="lg:pl"]') || $('[class*="pl-[260"]');
      if (main) main.style.paddingLeft = collapsed ? '64px' : '';
    };
    apply(localStorage.getItem('ember-sidebar-collapsed') === 'true');
    btn.addEventListener('click', () => {
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
        collapsible.style.transition = 'grid-template-rows .2s ease, opacity .2s ease';
        collapsible.style.gridTemplateRows = open ? '0fr' : '1fr';
        collapsible.style.opacity = open ? '0' : '1';
        const chevron = btn.querySelector('svg:last-child');
        if (chevron) chevron.style.transform = open ? '' : 'rotate(90deg)';
      });
    });
  }

  /* ── Color Presets ───────────────────────────────────────────────────────── */
  const PRESETS = {
    coral:  { h:30,  c:0.18, hex:'#e8734a' },
    teal:   { h:175, c:0.14, hex:'#2a9d8f' },
    blue:   { h:230, c:0.19, hex:'#4361ee' },
    violet: { h:280, c:0.17, hex:'#7b2d8b' },
    sage:   { h:145, c:0.10, hex:'#52796f' },
    amber:  { h:60,  c:0.18, hex:'#e9c46a' },
  };
  window.setColorPreset = (name) => {
    const p = PRESETS[name]; if (!p) return;
    const v = `oklch(0.62 ${p.c} ${p.h})`;
    const s = document.documentElement.style;
    s.setProperty('--primary', v);
    s.setProperty('--primary-foreground', 'oklch(1 0 0)');
    s.setProperty('--sidebar-primary', v);
    s.setProperty('--ring', v);
    localStorage.setItem('ember-color-preset', name);
    $$('.color-preset-btn').forEach(b => b.classList.toggle('active', b.dataset.preset === name));
  };
  window.setTheme = (mode) => {
    const dark = mode === 'dark';
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('ember-theme', mode);
    const btn = $('[aria-label="Toggle theme"]');
    if (btn) btn.innerHTML = dark ? SUN : MOON;
    $$('.theme-mode-btn').forEach(b => b.classList.toggle('active', b.dataset.mode === mode));
  };
  window.setDensity = (d) => {
    ['compact','comfortable','spacious'].forEach(x => document.documentElement.classList.toggle('density-'+x, x===d));
    localStorage.setItem('ember-density', d);
    $$('.density-btn').forEach(b => b.classList.toggle('active', b.dataset.density === d));
  };
  window.setLayout = (layout) => {
    document.documentElement.classList.toggle('layout-topnav', layout === 'topnav');
    document.documentElement.classList.toggle('layout-sidebar', layout === 'sidebar');
    localStorage.setItem('ember-layout', layout);
    if (layout === 'topnav') buildTopNav();
    else { const tn = document.getElementById('ember-topnav'); if (tn) tn.remove(); }
    $$('.layout-btn').forEach(b => b.classList.toggle('active', b.dataset.layout === layout));
  };

  /* ── Top Nav (layout toggle) ─────────────────────────────────────────────── */
  function buildTopNav() {
    if (document.getElementById('ember-topnav')) return;
    const nav = document.createElement('nav');
    nav.id = 'ember-topnav';
    nav.style.cssText = 'display:none;position:fixed;top:0;left:0;right:0;z-index:50;height:56px;background:var(--sidebar);border-bottom:1px solid var(--sidebar-border);align-items:center;padding:0 24px;gap:24px;';
    const sidebar = $('aside.fixed');
    if (sidebar) {
      const logo = sidebar.querySelector('.flex.h-16') && sidebar.querySelector('.flex.h-8');
      nav.innerHTML = `
        <div style="display:flex;align-items:center;gap:8px;font-weight:700;font-size:15px;color:var(--sidebar-foreground);">
          <div style="width:28px;height:28px;border-radius:6px;background:var(--sidebar-primary);display:flex;align-items:center;justify-content:center;">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/><path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/></svg>
          </div>
          Ember
        </div>
        <div style="display:flex;align-items:center;gap:4px;flex:1;">
          ${[['dashboard-1.html','Dashboard'],['analytics.html','Analytics'],['appointments.html','Appointments'],['patients.html','Patients'],['settings.html','Settings']].map(([href,label])=>`
            <a href="${href}" style="padding:6px 12px;border-radius:6px;font-size:13px;font-weight:500;color:var(--sidebar-foreground);text-decoration:none;transition:background .15s;" onmouseover="this.style.background='var(--sidebar-accent)'" onmouseout="this.style.background=''">${label}</a>
          `).join('')}
        </div>`;
    }
    document.body.prepend(nav);
    document.documentElement.classList.add('layout-topnav');
  }

  /* ── Theme Customizer Panel ──────────────────────────────────────────────── */
  function initThemePanel() {
    const btn = $('[aria-label="Customize theme"]');
    if (!btn) return;
    const panel = document.createElement('div');
    panel.id = 'ember-theme-panel';
    panel.style.cssText = 'position:fixed;inset-block:0;inset-inline-end:0;z-index:9999;width:280px;display:flex;flex-direction:column;background:var(--background);border-inline-start:1px solid var(--border);box-shadow:-8px 0 32px rgba(0,0,0,.12);transform:translateX(100%);transition:transform .28s cubic-bezier(.4,0,.2,1);';
    panel.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:space-between;padding:16px 20px;border-bottom:1px solid var(--border);">
        <p style="font-size:14px;font-weight:600;color:var(--foreground);margin:0;">Customize</p>
        <button id="close-theme-panel" style="width:28px;height:28px;border-radius:6px;border:1px solid var(--border);background:transparent;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--muted-foreground);">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:20px;display:flex;flex-direction:column;gap:20px;">
        <div>
          <p style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--muted-foreground);margin:0 0 10px;">Color</p>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
            ${Object.entries(PRESETS).map(([name,p])=>`
              <button class="color-preset-btn" data-preset="${name}" onclick="setColorPreset('${name}')"
                style="display:flex;flex-direction:column;align-items:center;gap:5px;padding:8px;border-radius:8px;border:2px solid var(--border);background:transparent;cursor:pointer;">
                <div style="width:26px;height:26px;border-radius:50%;background:${p.hex};"></div>
                <span style="font-size:10px;font-weight:500;color:var(--muted-foreground);text-transform:capitalize;">${name}</span>
              </button>`).join('')}
          </div>
        </div>
        <div>
          <p style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--muted-foreground);margin:0 0 10px;">Appearance</p>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
            <button class="theme-mode-btn" data-mode="light" onclick="setTheme('light')"
              style="display:flex;align-items:center;justify-content:center;gap:7px;padding:9px;border-radius:8px;border:1px solid var(--border);background:transparent;cursor:pointer;font-size:13px;font-weight:500;color:var(--foreground);">${SUN} Light</button>
            <button class="theme-mode-btn" data-mode="dark" onclick="setTheme('dark')"
              style="display:flex;align-items:center;justify-content:center;gap:7px;padding:9px;border-radius:8px;border:1px solid var(--border);background:transparent;cursor:pointer;font-size:13px;font-weight:500;color:var(--foreground);">${MOON} Dark</button>
          </div>
        </div>
        <div>
          <p style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--muted-foreground);margin:0 0 10px;">Density</p>
          <div style="display:flex;gap:6px;">
            ${['compact','comfortable','spacious'].map(d=>`
              <button class="density-btn" data-density="${d}" onclick="setDensity('${d}')"
                style="flex:1;padding:8px 4px;border-radius:8px;border:1px solid var(--border);background:transparent;cursor:pointer;font-size:11px;font-weight:500;color:var(--foreground);text-transform:capitalize;">${d}</button>`).join('')}
          </div>
        </div>
        <div>
          <p style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--muted-foreground);margin:0 0 10px;">Layout</p>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
            <button class="layout-btn" data-layout="sidebar" onclick="setLayout('sidebar')"
              style="display:flex;align-items:center;justify-content:center;gap:7px;padding:9px;border-radius:8px;border:1px solid var(--border);background:transparent;cursor:pointer;font-size:13px;font-weight:500;color:var(--foreground);">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/></svg> Sidebar</button>
            <button class="layout-btn" data-layout="topnav" onclick="setLayout('topnav')"
              style="display:flex;align-items:center;justify-content:center;gap:7px;padding:9px;border-radius:8px;border:1px solid var(--border);background:transparent;cursor:pointer;font-size:13px;font-weight:500;color:var(--foreground);">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/></svg> Top Nav</button>
          </div>
        </div>
      </div>`;
    document.body.appendChild(panel);
    panel.querySelector('#close-theme-panel').onclick = () => panel.style.transform = 'translateX(100%)';
    btn.addEventListener('click', e => { e.stopPropagation(); panel.style.transform = panel.style.transform === 'translateX(0px)' || panel.style.transform === 'translateX(0)' ? 'translateX(100%)' : 'translateX(0)'; });
    document.addEventListener('click', e => { if (!panel.contains(e.target) && !btn.contains(e.target)) panel.style.transform = 'translateX(100%)'; });

    // restore states
    setTimeout(() => {
      const preset = localStorage.getItem('ember-color-preset');
      if (preset) window.setColorPreset(preset);
      const density = localStorage.getItem('ember-density') || 'comfortable';
      $$('.density-btn').forEach(b => b.classList.toggle('active', b.dataset.density === density));
      const theme = localStorage.getItem('ember-theme') || 'light';
      $$('.theme-mode-btn').forEach(b => b.classList.toggle('active', b.dataset.mode === theme));
      const layout = localStorage.getItem('ember-layout') || 'sidebar';
      $$('.layout-btn').forEach(b => b.classList.toggle('active', b.dataset.layout === layout));
      if (layout === 'topnav') buildTopNav();
    }, 50);
  }

  /* ── Notification Popup ──────────────────────────────────────────────────── */
  const NOTIFS = [
    { icon:'🏥', color:'#f97316', title:'New appointment booked', desc:'James Carter booked an appointment for Apr 8', time:'2 min ago', unread:true },
    { icon:'💊', color:'#3b82f6', title:'Prescription ready', desc:'Prescription #RX-4821 is ready for pickup', time:'18 min ago', unread:true },
    { icon:'👤', color:'#10b981', title:'New patient registered', desc:'Anna Patel created an account', time:'1 hour ago', unread:true },
    { icon:'📋', color:'#8b5cf6', title:'Lab results available', desc:'Results for patient #P-00231 are ready', time:'2 hours ago', unread:false },
    { icon:'🔔', color:'#f59e0b', title:'Appointment reminder', desc:'You have 3 appointments tomorrow morning', time:'3 hours ago', unread:false },
  ];

  function initNotifications() {
    const btn = $('[aria-label="Notifications"]');
    if (!btn) return;
    let unreadCount = NOTIFS.filter(n => n.unread).length;

    const popup = document.createElement('div');
    popup.id = 'notif-popup';
    popup.style.cssText = 'position:absolute;top:calc(100% + 8px);right:0;z-index:9999;width:360px;background:var(--background);border:1px solid var(--border);border-radius:12px;box-shadow:0 8px 32px rgba(0,0,0,.12);display:none;overflow:hidden;';
    popup.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 16px;border-bottom:1px solid var(--border);">
        <div style="display:flex;align-items:center;gap:8px;">
          <span style="font-size:14px;font-weight:600;color:var(--foreground);">Notifications</span>
          <span id="notif-badge" style="display:inline-flex;align-items:center;justify-content:center;min-width:20px;height:20px;padding:0 6px;border-radius:99px;background:var(--primary);color:#fff;font-size:11px;font-weight:700;">${unreadCount}</span>
        </div>
        <button id="mark-all-read" style="font-size:12px;font-weight:500;color:var(--primary);background:none;border:none;cursor:pointer;display:flex;align-items:center;gap:4px;">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
          Mark all read
        </button>
      </div>
      <div id="notif-list" style="max-height:340px;overflow-y:auto;">
        ${NOTIFS.map((n,i) => `
          <div class="notif-item" data-index="${i}" style="display:flex;align-items:flex-start;gap:12px;padding:12px 16px;border-bottom:1px solid var(--border);cursor:pointer;transition:background .15s;" onmouseover="this.style.background='var(--accent)'" onmouseout="this.style.background=''">
            <div style="width:36px;height:36px;border-radius:50%;background:${n.color}18;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;">${n.icon}</div>
            <div style="flex:1;min-width:0;">
              <p style="font-size:13px;font-weight:600;color:var(--foreground);margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${n.title}</p>
              <p style="font-size:12px;color:var(--muted-foreground);margin:2px 0 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${n.desc}</p>
              <p style="font-size:11px;color:var(--muted-foreground);margin:4px 0 0;">${n.time}</p>
            </div>
            ${n.unread ? `<div style="width:8px;height:8px;border-radius:50%;background:var(--primary);flex-shrink:0;margin-top:4px;" class="notif-dot-${i}"></div>` : '<div style="width:8px;flex-shrink:0;"></div>'}
          </div>`).join('')}
      </div>
      <div style="padding:12px 16px;text-align:center;border-top:1px solid var(--border);">
        <a href="notifications.html" style="font-size:13px;font-weight:500;color:var(--primary);text-decoration:none;">View all notifications</a>
      </div>`;

    btn.style.position = 'relative';
    btn.appendChild(popup);

    popup.querySelector('#mark-all-read').addEventListener('click', e => {
      e.stopPropagation();
      unreadCount = 0;
      popup.querySelector('#notif-badge').textContent = '0';
      popup.querySelector('#notif-badge').style.display = 'none';
      const dot = btn.querySelector('.absolute.bg-destructive');
      if (dot) dot.style.display = 'none';
      $$('[class*="notif-dot"]', popup).forEach(d => d.style.display = 'none');
    });

    btn.addEventListener('click', e => {
      e.stopPropagation();
      const open = popup.style.display === 'block';
      closeAllPopups();
      popup.style.display = open ? 'none' : 'block';
    });
  }

  /* ── User Account Dropdown ───────────────────────────────────────────────── */
  function initUserMenu() {
    const btn = $('[aria-label="User menu"]');
    if (!btn) return;

    const dropdown = document.createElement('div');
    dropdown.id = 'user-dropdown';
    dropdown.style.cssText = 'position:absolute;top:calc(100% + 8px);right:0;z-index:9999;width:220px;background:var(--background);border:1px solid var(--border);border-radius:10px;box-shadow:0 8px 32px rgba(0,0,0,.12);display:none;overflow:hidden;';
    dropdown.innerHTML = `
      <div style="padding:14px 16px;border-bottom:1px solid var(--border);display:flex;align-items:center;gap:10px;">
        <div style="width:36px;height:36px;border-radius:50%;background:var(--primary);opacity:.9;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;color:#fff;">${btn.textContent.trim()}</div>
        <div>
          <p style="font-size:13px;font-weight:600;color:var(--foreground);margin:0;">Aigars S.</p>
          <p style="font-size:11px;color:var(--muted-foreground);margin:2px 0 0;">Administrator</p>
        </div>
      </div>
      <div style="padding:6px;">
        ${[
          ['👤','Profile','profile.html'],
          ['⚙️','Settings','settings.html'],
          ['🔔','Notifications','notifications.html'],
        ].map(([icon,label,href])=>`
          <a href="${href}" style="display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:6px;font-size:13px;font-weight:500;color:var(--foreground);text-decoration:none;transition:background .15s;" onmouseover="this.style.background='var(--accent)'" onmouseout="this.style.background=''">
            <span>${icon}</span>${label}
          </a>`).join('')}
      </div>
      <div style="padding:6px;border-top:1px solid var(--border);">
        <button onclick="alert('Logged out')" style="display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:6px;font-size:13px;font-weight:500;color:#ef4444;background:transparent;border:none;cursor:pointer;width:100%;transition:background .15s;" onmouseover="this.style.background='#ef444410'" onmouseout="this.style.background=''">
          <span>🚪</span> Log out
        </button>
      </div>`;

    btn.style.position = 'relative';
    btn.appendChild(dropdown);

    btn.addEventListener('click', e => {
      e.stopPropagation();
      const open = dropdown.style.display === 'block';
      closeAllPopups();
      dropdown.style.display = open ? 'none' : 'block';
    });
  }

  /* ── Ctrl+K Search Modal ─────────────────────────────────────────────────── */
  const SEARCH_ITEMS = [
    { icon:'📊', label:'Dashboard', href:'dashboard-1.html', group:'Pages' },
    { icon:'📅', label:'Appointments', href:'appointments.html', group:'Pages' },
    { icon:'🏥', label:'Patients', href:'patients.html', group:'Pages' },
    { icon:'📋', label:'Health Records', href:'health-records.html', group:'Pages' },
    { icon:'💊', label:'Prescriptions', href:'prescriptions.html', group:'Pages' },
    { icon:'🧪', label:'Lab Results', href:'lab-results.html', group:'Pages' },
    { icon:'💰', label:'Billing', href:'billing.html', group:'Pages' },
    { icon:'📈', label:'Analytics', href:'analytics.html', group:'Pages' },
    { icon:'⚙️', label:'Settings', href:'settings.html', group:'Pages' },
    { icon:'👤', label:'Profile', href:'profile.html', group:'Pages' },
    { icon:'🧑‍💼', label:'Staff', href:'staff.html', group:'Pages' },
    { icon:'📞', label:'Telemedicine', href:'telemedicine.html', group:'Pages' },
  ];

  function initSearch() {
    const searchBtn = $('[role="button"][class*="search"], button[class*="search"]') || $('button kbd');
    const overlay = document.createElement('div');
    overlay.id = 'search-modal';
    overlay.style.cssText = 'position:fixed;inset:0;z-index:10000;background:rgba(0,0,0,.4);backdrop-filter:blur(2px);display:none;align-items:flex-start;justify-content:center;padding-top:80px;';
    overlay.innerHTML = `
      <div style="width:100%;max-width:520px;background:var(--background);border:1px solid var(--border);border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.2);overflow:hidden;" onclick="event.stopPropagation()">
        <div style="display:flex;align-items:center;gap:10px;padding:14px 16px;border-bottom:1px solid var(--border);">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--muted-foreground);flex-shrink:0;"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          <input id="search-input" placeholder="Search pages, patients, settings…" autocomplete="off"
            style="flex:1;background:none;border:none;outline:none;font-size:14px;color:var(--foreground);" />
          <kbd style="padding:2px 6px;border-radius:4px;border:1px solid var(--border);font-size:11px;color:var(--muted-foreground);background:var(--muted);">Esc</kbd>
        </div>
        <div id="search-results" style="max-height:320px;overflow-y:auto;padding:8px;"></div>
      </div>`;
    document.body.appendChild(overlay);

    const input = overlay.querySelector('#search-input');
    const results = overlay.querySelector('#search-results');

    const renderResults = (query) => {
      const filtered = query ? SEARCH_ITEMS.filter(i => i.label.toLowerCase().includes(query.toLowerCase())) : SEARCH_ITEMS.slice(0, 8);
      if (!filtered.length) { results.innerHTML = `<p style="text-align:center;padding:24px;font-size:13px;color:var(--muted-foreground);">No results for "${query}"</p>`; return; }
      const groups = [...new Set(filtered.map(i => i.group))];
      results.innerHTML = groups.map(g => `
        <p style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--muted-foreground);padding:6px 8px 4px;margin:0;">${g}</p>
        ${filtered.filter(i => i.group === g).map(i => `
          <a href="${i.href}" style="display:flex;align-items:center;gap:10px;padding:9px 8px;border-radius:6px;font-size:13px;font-weight:500;color:var(--foreground);text-decoration:none;transition:background .1s;" onmouseover="this.style.background='var(--accent)'" onmouseout="this.style.background=''">
            <span style="font-size:16px;">${i.icon}</span>${i.label}
          </a>`).join('')}`).join('');
    };

    const openSearch = () => { closeAllPopups(); overlay.style.display = 'flex'; setTimeout(() => { input.focus(); renderResults(''); }, 10); };
    const closeSearch = () => { overlay.style.display = 'none'; input.value = ''; };

    input.addEventListener('input', () => renderResults(input.value));
    overlay.addEventListener('click', closeSearch);

    // Wire search bar button
    const searchBarBtn = $('button kbd')?.closest('button');
    if (searchBarBtn) searchBarBtn.addEventListener('click', openSearch);

    // Keyboard shortcut
    document.addEventListener('keydown', e => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); overlay.style.display === 'flex' ? closeSearch() : openSearch(); }
      if (e.key === 'Escape') closeSearch();
    });
  }

  /* ── Close all popups helper ─────────────────────────────────────────────── */
  function closeAllPopups() {
    const n = document.getElementById('notif-popup');
    const u = document.getElementById('user-dropdown');
    if (n) n.style.display = 'none';
    if (u) u.style.display = 'none';
  }
  document.addEventListener('click', closeAllPopups);

  /* ── Dashboard Charts ────────────────────────────────────────────────────── */
  function initCharts() {
    if (typeof Chart === 'undefined') return;
    const dark = () => document.documentElement.classList.contains('dark');
    const grid = () => dark() ? 'rgba(255,255,255,.06)' : 'rgba(0,0,0,.06)';
    const text = () => dark() ? 'rgba(255,255,255,.45)' : 'rgba(0,0,0,.4)';

    const visitsCtx = document.getElementById('visitsChart');
    if (visitsCtx) new Chart(visitsCtx, {
      type:'line',
      data:{ labels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets:[
          { label:'Visits', data:[210,185,230,260,245,310,295,340,315,370,355,410], borderColor:'var(--primary)', backgroundColor:'color-mix(in srgb, var(--primary) 12%, transparent)', borderWidth:2, pointRadius:3, pointBackgroundColor:'var(--primary)', tension:.4, fill:true },
          { label:'Last Year', data:[165,155,195,215,200,250,235,275,255,295,280,330], borderColor:'rgba(128,128,128,.3)', borderWidth:1.5, borderDash:[4,3], pointRadius:0, tension:.4, fill:false }
        ]},
      options:{ responsive:true, maintainAspectRatio:false, plugins:{ legend:{ display:false } }, scales:{ x:{ grid:{ color:grid() }, ticks:{ color:text(), font:{ size:11 } } }, y:{ grid:{ color:grid() }, ticks:{ color:text(), font:{ size:11 } } } } }
    });

    const typesCtx = document.getElementById('appointmentTypesChart');
    if (typesCtx) new Chart(typesCtx, {
      type:'doughnut',
      data:{ labels:['General','Follow-up','Emergency','Specialist','Telehealth'],
        datasets:[{ data:[32,24,8,20,16], backgroundColor:['var(--primary)','color-mix(in srgb,var(--primary) 70%,white)','#ef4444','color-mix(in srgb,var(--primary) 45%,white)','#94a3b8'], borderWidth:0, hoverOffset:4 }] },
      options:{ responsive:true, maintainAspectRatio:false, cutout:'72%', plugins:{ legend:{ position:'bottom', labels:{ color:text(), font:{ size:11 }, padding:10, boxWidth:10, boxHeight:10, borderRadius:3 } } } }
    });

    const revenueCtx = document.getElementById('revenueChart');
    if (revenueCtx) new Chart(revenueCtx, {
      type:'bar',
      data:{ labels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets:[{ label:'Revenue', data:[58,52,67,72,69,85,78,94,88,103,97,115], backgroundColor:'color-mix(in srgb,var(--primary) 80%,transparent)', borderRadius:5, borderSkipped:false }] },
      options:{ responsive:true, maintainAspectRatio:false, plugins:{ legend:{ display:false } }, scales:{ x:{ grid:{ display:false }, ticks:{ color:text(), font:{ size:11 } } }, y:{ grid:{ color:grid() }, ticks:{ color:text(), font:{ size:11 }, callback:v=>v+'k' } } } }
    });
  }

  /* ── Init ────────────────────────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    injectDensityCSS();
    initDarkMode();
    initSidebarCollapse();
    initNavGroups();
    initThemePanel();
    initNotifications();
    initUserMenu();
    initSearch();
    if (typeof Chart !== 'undefined') initCharts();
    else document.addEventListener('chartjs-ready', initCharts);

    // Restore density
    const d = localStorage.getItem('ember-density') || 'comfortable';
    window.setDensity(d);
    // Restore layout
    const l = localStorage.getItem('ember-layout') || 'sidebar';
    if (l === 'topnav') window.setLayout('topnav');
  });
})();
