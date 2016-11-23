import { Component, OnInit, ChangeDetectorRef } from '@angular/core'
import { ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'game-board',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1>Game Board!</h1>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['css/main.css', 'css/champion-select.css'],
  providers: []
})

export class GameBoardComponent implements OnInit {
  ngOnInit() {

  }
}
