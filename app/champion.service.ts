import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ChampionService {

  constructor(private http: Http) {}

  private _url = 'https://na.api.pvp.net/api/lol/static-data/NA/v1.2/champion';

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

}
