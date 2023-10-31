export default function functions() {
  const format_number = x => {
      return parseFloat(x).toFixed(2).toString().replace(/\d(?=(\d{3})+\.)/g, '$&\'');
  }
  return {
    format_number,
  }
}
