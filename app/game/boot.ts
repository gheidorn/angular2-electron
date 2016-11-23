import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { GameModule } from './game.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(GameModule);
