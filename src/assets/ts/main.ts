import App from './vue/App';

((win, doc) => {
  /**
   * after html is read, before styleSheet & image are read
   */
  const created = () => {
    App();
  }

  /**
   * after DOM is built
   */
  const mounted = () => {
    return;
  }

  /**
   * execute
   */
  doc.addEventListener('DOMContentLoaded', () => {
    created();
  })
  win.addEventListener('load', () => {
    mounted();
  });
})(window, document);