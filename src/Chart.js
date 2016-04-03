const template = '<span>%{percentage}%</span>' +
  '<svg xmlns="http://www.w3.org/2000/svg">' +
    '<g>' +
      '<circle r="69.85699" cy="81" cx="81" />' +
      '<circle class="chart" r="69.85699" cy="81" cx="81" stroke-dashoffset="%{offset}" />' +
    '</g>' +
  '</svg>';

function buildHtml(options) {
  const percentage = options.percentage;
  const offset = 439 - (439 * percentage / 100);

  const html = template
    .replace('%{percentage}', percentage)
    .replace('%{offset}', offset);

  return html;
}

export default class Chart {

  constructor($element, options) {
    this.$element = $element;
    this.options = options;
  }

  draw() {
    const $element = this.$element;

    $element.addClass('don-chart');

    $element.append(buildHtml(this.options));
  }

  redraw() {
    // TODO
  }

}
