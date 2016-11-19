import { Component, OnInit } from '@angular/core'

import {ElementRef, Renderer} from '@angular/core';

import { ChampionService } from './champion.service'
import { ChampionImage } from './champion.models'

@Component({
  selector: 'champion-select',
  template: `
    <h1>Champion Select</h1>
    <h2>{{title}}</h2>
    <div id="champions">
      <div class="champion" *ngFor="let championImage of championImages" (click)='championClicked($event, championImage.id)'>
        <img [src]="championImage.full" width="64px" />
      </div>
    </div>
  `,
  styles: ['#champion { text-align: center;}','.champion {display: inline-block; padding: 10px; }', '.champion:hover { cursor: hand;}'],
  providers: [ChampionService]
})

export class ChampionSelectComponent implements OnInit {
  title = 'Select your hero:';
  champions: any[];
  championImages: ChampionImage[];
  selectedChampion: ChampionImage;

  constructor(private championService: ChampionService, private elementRef: ElementRef, private rd: Renderer) {}

  ngAfterViewInit() {
    //console.log('ngAfterViewInit');
  }

  ngOnInit(): void {
    //console.log('ngOnInit');
    this.getChampionImages();
  }

  championClicked(event:MouseEvent, championId:number): boolean {
    var target = event.target || event.srcElement || event.currentTarget;
    console.log(championId);
    let selectedChampionId = championId;
    this.selectedChampion = this.championImages.filter(function(o) {
      return o.id === selectedChampionId;
    })[0];  // return first match; should only be one

    console.log(this.selectedChampion);
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
