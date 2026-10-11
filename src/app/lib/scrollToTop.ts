/** Jump to the top of the page and any inner scroll containers. */
export function scrollToTop() {
  const html = document.documentElement;
  html.setAttribute('data-instant-scroll', '');

  window.scrollTo(0, 0);
  html.scrollTop = 0;
  document.body.scrollTop = 0;

  const root = document.getElementById('root');
  if (root) root.scrollTop = 0;

  window.requestAnimationFrame(() => {
    html.removeAttribute('data-instant-scroll');
  });
}
