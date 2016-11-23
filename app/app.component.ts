//import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component, Pipe, PipeTransform} from '@angular/core';
import {NgFor} from '@angular/common';

import {ChampionSelectComponent} from './champion/champion-select.component'
import {ItemViewerComponent} from './items/item-viewer.component'

@Component({
  selector: 'app',
  template: `
    <champion-select></champion-select>
  `
})

export class AppComponent {

  constructor() {}

}

//bootstrap(App);
