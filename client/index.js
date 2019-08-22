document.body.appendChild(component());

function component() {
  const element = document.createElement('div');

  // need Lodash for the following line
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}