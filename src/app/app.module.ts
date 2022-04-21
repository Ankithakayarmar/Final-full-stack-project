import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents,  } from './app-routing.module';
import { AppComponent } from './app.component';

import { ConfirmComponent } from './confirm/confirm.component';
import { InsertComponent } from './insert/insert.component';
import { DeleteComponent } from './delete/delete.component';
import { FetchComponent } from './fetch/fetch.component';
import { UpdateComponent } from './update/update.component';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { UpdateorderComponent } from './updateorder/updateorder.component';
import { DeleteorderComponent } from './deleteorder/deleteorder.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LogoutComponent } from './logout/logout.component';








@NgModule({
  declarations: [
    AppComponent,
    routingComponents,

    ConfirmComponent,
    InsertComponent,
    DeleteComponent,
    FetchComponent,
    UpdateComponent,
    PlaceorderComponent,
    UpdateorderComponent,
    DeleteorderComponent,
    AboutComponent,
    ContactComponent,
    LogoutComponent
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
