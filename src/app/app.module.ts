import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';


import { TextHighlightDirective } from './text-highlight.directive';
import { ShowOnlyIfStartingWithAPipe } from './show-only-if-starting-with-a.pipe';
import { CustomuppercasePipe } from './customuppercase.pipe';
import { CustomlowercasePipe } from './customlowercase.pipe';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {RoutesProvider} from './app.routes';
@NgModule({
  declarations: [
    AppComponent,
   
    TextHighlightDirective,
   
    ShowOnlyIfStartingWithAPipe,
   
    CustomuppercasePipe,
   
    CustomlowercasePipe,
   
    HeaderComponent,
   
    HomeComponent,
   
    AboutComponent,
   
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutesProvider
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
