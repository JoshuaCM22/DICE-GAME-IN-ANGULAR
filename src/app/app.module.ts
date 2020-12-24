import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AIresultComponent } from './components/airesult/airesult.component';
import { GameComponent } from './components/game/game.component';
import { InterfaceComponent } from './components/interface/interface.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { YourResultComponent } from './components/your-result/your-result.component';

@NgModule({
  declarations: [
    AppComponent,
    AIresultComponent,
    GameComponent,
    InterfaceComponent,
    RankingComponent,
    YourResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
