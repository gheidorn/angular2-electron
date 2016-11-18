import { Component, OnInit } from '@angular/core'
import { ChampionService } from './champion.service'

@Component({
  selector: 'champion-select',
  template: `
    <h1>Champion Select</h1>
    <h2>{{title}}</h2>
  `,
  providers: [ChampionService]
})

export class ChampionSelectComponent implements OnInit {
  title = 'rigged';
  champions: any[];

  constructor(private championService: ChampionService) {}

  ngOnInit(): void {
    this.getChampions();
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
}
