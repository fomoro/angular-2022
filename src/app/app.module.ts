import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app/app.component';
import { CardComponent } from './components/app/childrenComponents/card/card.component';
import { HermanoAComponent } from './components/hermano-a/hermano-a.component';
import { HermanoBComponent } from './components/hermano-b/hermano-b.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HermanoAComponent,
    HermanoBComponent 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
