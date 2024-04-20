export default function cleanSet(set, startString) {
  if (startString === '') return '';
  let str = '';
  for (const elem of set) {
    if (elem.startsWith(startString)) str = str.concat('-', elem.slice(startString.length));
  }

  return str.slice(1);
}
