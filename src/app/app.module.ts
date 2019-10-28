import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonSearchComponent } from './person-search/person-search.component';
import { FilterPipe } from './filter-pipe.pipe';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PersonSearchComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  
  providers: [],
  exports: [
  
    FilterPipe
],
  bootstrap: [AppComponent]
})
export class AppModule { }
