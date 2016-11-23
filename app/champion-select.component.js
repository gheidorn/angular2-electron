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
const core_2 = require("@angular/core");
const champion_service_1 = require("./champion.service");
let ChampionSelectComponent = class ChampionSelectComponent {
    constructor(championService, elementRef, rd, cdr) {
        this.championService = championService;
        this.elementRef = elementRef;
        this.rd = rd;
        this.cdr = cdr;
        this.title = 'Build your team';
        this.team = [];
    }
    ngAfterViewInit() {
    }
    ngOnInit() {
        this.getChampionImages();
    }
    startGame(event) {
        electron.ipcRenderer.send('toggle-game');
        console.log('message sent');
        return true;
    }
    championClicked(event, championId) {
        let target = event.target || event.srcElement || event.currentTarget;
        let selectedChampionId = championId;
        this.selectedChampion = this.championImages.filter(function (o) {
            return o.id === selectedChampionId;
        })[0];
        if (this.team.length < 4) {
            var audio = new Audio();
            audio.src = './sounds/coin2.wav';
            audio.load();
            audio.play();
            this.team.push(this.selectedChampion);
            this.cdr.detectChanges();
        }
        else {
            var audio = new Audio();
            audio.src = './sounds/coin2.wav';
            audio.load();
            audio.play();
        }
        return true;
    }
    removeTeamMember(event, championId) {
        let target = event.target || event.srcElement || event.currentTarget;
        var index = this.team.map(function (el) {
            return el.id;
        }).indexOf(championId);
        this.team.splice(index, 1);
        this.cdr.detectChanges();
        return true;
    }
    getChampions() {
        this.championService.getChampions()
            .then(champions => this.champions = champions)
            .catch(function (error) {
            console.log('dummy champ inserted');
            this.champions = [{
                    "id": 266,
                    "title": "the Darkin Blade",
                    "name": "Aatrox",
                    "key": "Aatrox"
                }];
        });
    }
    getChampionImages() {
        this.championService.getChampionImages()
            .then(championImages => {
            this.championImages = championImages;
            championImages.sort(function (a, b) {
                var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
                if (nameA < nameB)
                    return -1;
                if (nameA > nameB)
                    return 1;
                return 0;
            });
            var element = document.getElementById("loader-wrapper");
            element.outerHTML = "";
        })
            .catch(function (error) {
            console.log('dummy ChampionImage inserted');
            this.championImages = [{
                    name: "Aatrox",
                    id: 266,
                    title: "the Darkin Blade",
                    full: "Aatrox.png",
                    sprite: "champion0.png",
                    group: "champion",
                    key: "Aatrox"
                }];
        });
    }
};
ChampionSelectComponent = __decorate([
    core_1.Component({
        selector: 'champion-select',
        template: `
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1>Champion Select</h1>
          <h2>{{title}}</h2>
          <button class="button" (click)='startGame($event)'>Start Game</button>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div id="team" class="">
            <div class="teamMember" *ngFor="let teamMember of team" (click)='removeTeamMember($event, teamMember.id)'>
              <img [src]="teamMember.splash" width="96px" />
              <!-- todo - hover name {{teamMember.name}} {{teamMember.title}} -->
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div id="champions" class="">
            <div class="champion" *ngFor="let championImage of championImages" (click)='championClicked($event, championImage.id)'>
              <img [src]="championImage.full" width="64px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
        styleUrls: ['css/main.css', 'css/champion-select.css'],
        providers: [champion_service_1.ChampionService]
    }),
    __metadata("design:paramtypes", [champion_service_1.ChampionService, core_2.ElementRef, core_2.Renderer, core_1.ChangeDetectorRef])
], ChampionSelectComponent);
exports.ChampionSelectComponent = ChampionSelectComponent;
//# sourceMappingURL=champion-select.component.js.map