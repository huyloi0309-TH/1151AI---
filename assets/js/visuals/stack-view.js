// Draws a stack. The last item is the top and is shown highest.
export function renderStack(el, stack) {
  const items = stack.toArray();
  el.replaceChildren(...items.map((value, i) => {
    const div = document.createElement('div');
    div.className = 'stack-item' + (i === items.length - 1 ? ' is-top' : '');
    div.textContent = value;
    return div;
  }));
}
