function whatCentury(year) {
  const cent = Math.ceil(year / 100);
  const century = cent.toString();
  const last = century.slice(-1);
  const str =
    last === '1' ? 'st' : last === '2' ? 'nd' : last === '3' ? 'rd' : 'th';
  return century.slice(-2, 1) === '1' ? century + 'th' : century + str;
}
