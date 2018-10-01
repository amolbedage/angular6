import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes,ParamMap } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import{HomeComponent} from './home/home.component';

import { AppComponent } from './app.component';
import { EmplistComponent } from './emplist/emplist.component';


const approutes:Routes=[
  {path:'home',component:HomeComponent},
  {path:'',pathMatch:'full', redirectTo:'/home'}
 
];

@NgModule({
  declarations: [
    AppComponent,HomeComponent, EmplistComponent, 
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(approutes), ReactiveFormsModule,FormsModule,HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
