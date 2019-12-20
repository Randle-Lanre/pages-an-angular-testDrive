import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import router
import { RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SecondPageComponent } from './second-page/second-page.component';

//added the first page component here
@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    SecondPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterModule.forRoot([
      { path: '', component: FirstPageComponent },
      {path: 'secondpage', component: SecondPageComponent}
    ]), BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
