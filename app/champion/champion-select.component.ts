import { Component, OnInit, ChangeDetectorRef } from '@angular/core'
import { ElementRef, Renderer } from '@angular/core';
declare var electron: any;

import { ChampionService } from './champion.service'
import { ChampionImage } from './champion.models'

@Component({
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
  providers: [ChampionService]
})

export class ChampionSelectComponent implements OnInit {
  title = 'Build your team';
  champions: any[];
  championImages: ChampionImage[];
  selectedChampion: ChampionImage;
  team = [];

  constructor(private championService: ChampionService, private elementRef: ElementRef, private rd: Renderer, private cdr:ChangeDetectorRef) {}

  ngAfterViewInit() {
    //console.log('ngAfterViewInit');
  }

  ngOnInit(): void {
    //console.log('ngOnInit');
    this.getChampionImages();
  }

  startGame(event:MouseEvent): boolean {
    electron.ipcRenderer.send('toggle-game');
    console.log('message sent');
    return true;
  }

  championClicked(event:MouseEvent, championId:number): boolean {
    let target = event.target || event.srcElement || event.currentTarget;
    let selectedChampionId = championId;
    this.selectedChampion = this.championImages.filter(function(o) {
      return o.id === selectedChampionId;
    })[0];  // return first match; should only be one

    // add selection to team
    if(this.team.length < 4) {
      // play 'team full' sound
      var audio = new Audio();
      audio.src = './sounds/coin2.wav';
      audio.load();
      audio.play();
      this.team.push(this.selectedChampion);
      this.cdr.detectChanges();
    } else {
      // play selection sound
      var audio = new Audio();
      audio.src = './sounds/coin2.wav';
      audio.load();
      audio.play();
    }

    return true;
  }

  removeTeamMember(event:MouseEvent, championId:number): boolean {
    let target = event.target || event.srcElement || event.currentTarget;
    var index = this.team.map(function(el) {
      return el.id;
    }).indexOf(championId);
    this.team.splice(index, 1);
    this.cdr.detectChanges();
    return true;
  }

  getChampions(): void {
    this.championService.getChampions()
      .then(champions => this.champions = champions)
      .catch(function(error) {
        console.log('dummy champ inserted')
        this.champions = [{
          "id": 266,
          "title": "the Darkin Blade",
          "name": "Aatrox",
          "key": "Aatrox"
       }];
      });
  }

  getChampionImages(): void {
    this.championService.getChampionImages()
      .then(championImages => {
        this.championImages = championImages;

        // sort the champions alphabetically
        championImages.sort(function(a, b) {
          var nameA = a.name.toLowerCase(), nameB=b.name.toLowerCase()
          if (nameA < nameB) //sort string ascending
              return -1
          if (nameA > nameB)
              return 1
          return 0 //default return value (no sorting)
        });

        // let b = document.getElementById('loader-wrapper');
        // b.className = 'loaded';
        //

        // remove loading screen
        var element = document.getElementById("loader-wrapper");
        element.outerHTML = "";
      })
      .catch(function(error) {
        console.log('dummy ChampionImage inserted')
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
}
