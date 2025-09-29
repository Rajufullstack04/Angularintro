import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppComponent } from './app.component';
import { AppComponent } from './app.component';
import { CompAcomponent } from './CompA/CompA.component';
import { CompRComponent } from './comp-r/comp-r.component';

@NgModule({
  declarations: [
    AppComponent,
    CompAcomponent,
    CompRComponent 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
