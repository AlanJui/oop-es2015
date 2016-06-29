import {Page} from './framework/page.js';
import {Image} from './ui/image.js';
import {Button} from './ui/button.js';
import {app} from './app.js';

export class HomePage extends Page {

  constructor() {
    super('Home');
  }

  createElement() {
    super.createElement();

    let img = new Image('../images/drone.jpg');
    img.appendToElement(this.element);

    let styleString = 'width: 300px; height: 80px; font-size: 26px; margin: 10px';
    let button = new Button('Self Driving Cars');
    button.setStyleString(styleString);
    button.appendToElement(this.element);
    button.element.click(() => app.activeRoute('Cars'));

    button = new Button('Drones');
    button.setStyleString(styleString);
    button.appendToElement(this.element);
    button.element.click(() => app.activeRoute('Drones'));
  }

  getElementString() {
    return `<div style="text-align: center;"></div>`
  }

}