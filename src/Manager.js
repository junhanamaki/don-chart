import buildDonut from './donut/build.js';

export default class Manager {

  constructor($element, options = {}) {
    this.$element = $element;
    this.options = options;
  }

  draw() {
    this.$element.append(buildDonut(this.options));
  }

}
