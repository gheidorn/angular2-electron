import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }   from './app.component';

import { ChampionSelectComponent }   from './champion/champion-select.component';
import { ChampionService } from './champion/champion.service'
import { ItemViewerComponent }   from './items/item-viewer.component';
import { ItemService } from './items/item.service'

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, ChampionSelectComponent, ItemViewerComponent ],
  providers:    [ ChampionService, ItemService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
