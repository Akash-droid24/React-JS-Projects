export function diffDaysInclusive(startISO, endISO) {
  const s = new Date(startISO);
  const e = new Date(endISO);
  const ms = e - s;
  const days = Math.floor(ms / (1000 * 60 * 60 * 24)) + 1;
  return Math.max(days, 1);
}
