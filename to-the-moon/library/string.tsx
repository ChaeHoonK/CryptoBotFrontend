export function numberWithCommas(x : number|undefined):string {
  if (typeof(x) != 'number') {
    return 'loading...'
  }
  x = Math.floor(x)
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
