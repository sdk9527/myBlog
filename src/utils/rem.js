export const setFontSize = () => {
  let rem, rootWidth;
  rootWidth = document.documentElement
  let width = rootWidth.clientWidth < 1366 ? 1366 : rootWidth.clientWidth;
  rem = width / 75
  rootWidth.style.fontSize = `${rem}px`;
}