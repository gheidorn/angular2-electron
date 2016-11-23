import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import { ChampionImage } from './champion.models'

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ChampionService {

  constructor(private http: Http) {}

  private _url = 'https://na.api.pvp.net/api/lol/static-data/NA/v1.2/champion';

  private _urlImages = 'https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=image';

  //http://ddragon.leagueoflegends.com/cdn/6.22.1/img/champion/Aatrox.png

  private _key = '0c1f1bd5-c9be-4550-8b88-21d8bbcc772f';

  getChampions(): Promise<any[]> {
    //return Promise.resolve(LOCATIONS);
    // let headers = new Headers({ 'Accept': 'application/json' });
    // let options = new RequestOptions({ headers: headers });

    return this.http.get(this._url + '?api_key=' + this._key)
      .toPromise()
      .then(response => {
        let champions = []
        let data = response.json();
        console.log(data);

        // map response to Location[]
        // for (let [key, value] of Object.entries(locationObj)) {
        //   let l = {
        //     name: value.Label,
        //     browser: value.Browser,
        //     driver: key,
        //     idleTesters: value.PendingTests.Idle,
        //     totalTests: value.PendingTests.Total,
        //     beingTested: value.PendingTests.Testing
        //   };
        //   console.log(l);
        //   locations.push(l);
        // }

        return champions;
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  getChampionImages(): Promise<ChampionImage[]> {
    return this.http.get(this._urlImages + '&api_key=' + this._key)
      .toPromise()
      .then(response => {
        let championImages = [];
        let data = response.json().data;

        // map response to Location[]
        for (let key of Object.keys(data)) {
          let championImage = {
            name: data[key].name,
            id: data[key].id,
            title: data[key].title,
            full: "http://ddragon.leagueoflegends.com/cdn/6.22.1/img/champion/" + data[key].image.full,
            splash: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/" + data[key].key + '_0.jpg',
            sprite: data[key].image.sprite,
            group: data[key].image.group,
            key: data[key].key
          };
          championImages.push(championImage);
        }
        return championImages;
      })
      .catch(function(error) {
        console.log(error);
        return [];
      });
  }

}
