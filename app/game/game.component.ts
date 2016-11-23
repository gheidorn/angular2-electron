import {Component, OnInit } from '@angular/core';
import {NgFor} from '@angular/common';

import {GameBoardComponent} from './game-board.component'

@Component({
  selector: 'game',
  template: `
    <h1>GAME BOARD - game.component.ts</h1>
  `
})

export class GameComponent implements OnInit {

  constructor() {}

  ngAfterViewInit() {
    //console.log('ngAfterViewInit');

    // remove loading screen
    var element = document.getElementById("loader-wrapper");
    element.outerHTML = "";
  }

  ngOnInit(): void {
    //console.log('ngOnInit');

  }

}

//bootstrap(App);
