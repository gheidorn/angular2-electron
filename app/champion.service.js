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
const http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
let ChampionService = class ChampionService {
    constructor(http) {
        this.http = http;
        this._url = 'https://na.api.pvp.net/api/lol/static-data/NA/v1.2/champion';
        this._urlImages = 'https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=image';
        this._key = '0c1f1bd5-c9be-4550-8b88-21d8bbcc772f';
    }
    getChampions() {
        return this.http.get(this._url + '?api_key=' + this._key)
            .toPromise()
            .then(response => {
            let champions = [];
            let data = response.json();
            console.log(data);
            return champions;
        })
            .catch(function (error) {
            console.log(error);
        });
    }
    getChampionImages() {
        return this.http.get(this._urlImages + '&api_key=' + this._key)
            .toPromise()
            .then(response => {
            let championImages = [];
            let data = response.json().data;
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
            console.log(championImages);
            return championImages;
        })
            .catch(function (error) {
            console.log(error);
            return [];
        });
    }
};
ChampionService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ChampionService);
exports.ChampionService = ChampionService;
//# sourceMappingURL=champion.service.js.map