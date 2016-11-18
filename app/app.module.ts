import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { App }   from './app';

import { ChampionSelectComponent }   from './champion-select.component';
import { ChampionService } from './champion.service'
import { ItemViewerComponent }   from './items/item-viewer.component';
import { ItemService } from './items/item.service'

@NgModule({
  imports:      [ BrowserModule,
                  HttpModule
                 ],
  declarations: [ App, ChampionSelectComponent, ItemViewerComponent ],
  providers:    [ ChampionService, ItemService ],
  bootstrap:    [ App ]
})
export class AppModule { }
