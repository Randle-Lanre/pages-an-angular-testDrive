import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import router
import { RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page/first-page.component';

//added the first page component here
@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterModule.forRoot([
      { path: '', component: FirstPageComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
