(() => {
  const config = window.ARAKETTIK_CONFIG || {};
  const trim = value => String(value || '').replace(/\/$/, '');
  function safeUrl(value) {
    try { const u = new URL(value, location.href); return ['https:', 'http:'].includes(u.protocol) ? u.href : ''; }
    catch { return ''; }
  }
  function expiresAt(item) {
    const exact = item.deadlineAt || item.deadlineISO || item.registrationDeadline;
    if (exact) {
      const offset = item.city ? '+06:00' : '-12:00';
      const value = /^\d{4}-\d{2}-\d{2}$/.test(exact) ? `${exact}T23:59:59${offset}` : exact;
      const ms = Date.parse(value);
      if (Number.isFinite(ms)) return ms;
    }
    // Legacy free-text dates without a year are ambiguous: do not invent an intake.
    const raw = String(item.deadline || item.date || '');
    if (/закрыт|истёк|истек|closed|expired/i.test(raw)) return 0;
    const iso = raw.match(/\b(20\d{2}-\d{2}-\d{2})\b/);
    if (iso) return Date.parse(`${iso[1]}T23:59:59+06:00`);
    const months = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
    const match = raw.toLowerCase().match(/(\d{1,2})\s+(января|февраля|марта|апреля|мая|июня|июля|августа|сентября|октября|ноября|декабря)\s+(20\d{2})/);
    if (match) return Date.parse(`${match[3]}-${String(months.indexOf(match[2]) + 1).padStart(2,'0')}-${match[1].padStart(2,'0')}T23:59:59+06:00`);
    return item.reviewAt ? Date.parse(item.reviewAt) : Infinity;
  }
  function isExpired(item, time = Date.now()) {
    const end = expiresAt(item);
    const rawDate = String(item.deadlineDate || item.deadlineAt || item.deadlineISO || item.registrationDeadline || '');
    const day = rawDate.match(/^\d{4}-\d{2}-\d{2}/)?.[0];
    const cutoff = config.removedThrough ? Date.parse(config.removedThrough + 'T23:59:59+06:00') : 0;
    return end <= time || (day ? day <= config.removedThrough : end <= cutoff);
  }
  window.ARAKETTIK = {
    config, safeUrl, expiresAt,
    isExpired
  };
})();
