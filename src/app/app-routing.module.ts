import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssociateComponent } from './component/associate/associate.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DineComponent } from './component/dine/dine.component';
import { FormdesignComponent } from './component/formdesign/formdesign.component';
import { HomeComponent } from './component/home/home.component';
import { LoginRegisterDialogComponent } from './component/login-register-dialog/login-register-dialog.component';
import { PVRCinemaComponent } from './component/pvr-cinema/pvr-cinema.component';
import { SliderComponent } from './component/slider/slider.component';
import { SrilankanCuisineComponent } from './component/srilankan-cuisine/srilankan-cuisine.component';
import { TableComponent } from './component/table/table.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'slider',component:SliderComponent},
  {path:'table',component:TableComponent},
  {path:'form',component:FormdesignComponent},
  {path:'associate',component:AssociateComponent},
  { path: 'login', component: LoginRegisterDialogComponent },
  { path: 'dashboard',component:DashboardComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dine' ,component:DineComponent},
  { path: 'srilankan-cuisine',component:SrilankanCuisineComponent },
  { path: 'pvr-cinema',component:PVRCinemaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
