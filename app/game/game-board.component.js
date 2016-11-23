"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
let GameBoardComponent = class GameBoardComponent {
    ngOnInit() {
    }
};
GameBoardComponent = __decorate([
    core_1.Component({
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
    }),
    __metadata("design:paramtypes", [])
], GameBoardComponent);
exports.GameBoardComponent = GameBoardComponent;
//# sourceMappingURL=game-board.component.js.map