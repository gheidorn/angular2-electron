import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { GameComponent }   from './game.component';

// import { ChampionSelectComponent }   from './champion/champion-select.component';
// import { ChampionService } from './champion/champion.service'
// import { ItemViewerComponent }   from './items/item-viewer.component';
// import { ItemService } from './items/item.service'

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ GameComponent ],
  providers:    [  ],
  bootstrap:    [ GameComponent ]
})
export class GameModule { }
