import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppComponent } from './app.component';
import { AppComponent } from './app.component';
import { CompAcomponent } from './CompA/CompA.component';
import { CompRComponent } from './comp-r/comp-r.component';
import { FormsModule } from '@angular/forms';
import { CompCComponent } from './comp-c/comp-c.component';

@NgModule({
  declarations: [
    AppComponent,
    CompAcomponent,
    CompRComponent,
    CompCComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
