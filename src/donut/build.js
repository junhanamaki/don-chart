import './style.css';
import template from './template.html';

export default options => {
  const percentage = options.percentage || 100;
  const offset = 439 - (439 * percentage / 100);

  const html = template
    .replace('%{percentage}', percentage)
    .replace('%{offset}', offset);

  return html;
};
