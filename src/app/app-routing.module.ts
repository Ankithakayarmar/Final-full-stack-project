import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { ContactComponent } from './contact/contact.component';
import { DeleteComponent } from './delete/delete.component';
import { DeleteorderComponent } from './deleteorder/deleteorder.component';
import { FetchComponent } from './fetch/fetch.component';
import { InsertComponent } from './insert/insert.component';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MenuComponent } from './menu/menu.component';
import { PlaceorderComponent } from './placeorder/placeorder.component';



import { RegisterComponent } from './register/register.component';
import { UpdateComponent } from './update/update.component';
import { UpdateorderComponent } from './updateorder/updateorder.component';

const routes: Routes = [
 
  {path :'login-component', component:LoginComponent},
  {path :'register-component', component:RegisterComponent},
  {path :'menu-component', component:MenuComponent},
  {path :'confirm-component', component:ConfirmComponent},
  {path :'delete-component', component:DeleteComponent},
  {path :'fetch-component', component:FetchComponent},
  {path :'insert-component', component:InsertComponent},
  {path :'update-component', component:UpdateComponent},
  {path :'updateorder-component', component:UpdateorderComponent},
  {path :'deleteorder-component', component:DeleteorderComponent},
  {path :'placeorder-component', component:PlaceorderComponent},
  {path :'about-component', component:AboutComponent},
  {path :'contact-component', component:ContactComponent},
  {path :'logout-component', component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,RegisterComponent,MenuComponent,ConfirmComponent,DeleteComponent,FetchComponent,InsertComponent,UpdateComponent,UpdateorderComponent,DeleteorderComponent,PlaceorderComponent,AboutComponent,ContactComponent,LogoutComponent]