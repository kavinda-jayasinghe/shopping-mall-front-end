import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthDialogComponent } from './auth-dialog/auth-dialog.component';
import { AssociateComponent } from './component/associate/associate.component';
import { AutocompleteComponent } from './component/autocomplete/autocomplete.component';
import { CardComponent } from './component/card/card.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DineComponent } from './component/dine/dine.component';
import { FormdesignComponent } from './component/formdesign/formdesign.component';
import { HomeComponent } from './component/home/home.component';
import { LoginRegisterDialogComponent } from './component/login-register-dialog/login-register-dialog.component';
import { MenubarComponent } from './component/menubar/menubar.component';
import { PopupComponent } from './component/popup/popup.component';
import { PVRCinemaComponent } from './component/pvr-cinema/pvr-cinema.component';
import { SliderComponent } from './component/slider/slider.component';
import { SrilankanCuisineComponent } from './component/srilankan-cuisine/srilankan-cuisine.component';
import { TableComponent } from './component/table/table.component';
import { TicketReservationComponent } from './component/ticket-reservation/ticket-reservation.component';
import { UserdetailComponent } from './component/userdetail/userdetail.component';
import { InputComponent } from './input/input.component';
import { MaterialModule } from './material-module';
import { MockAuthService } from './service/mock-auth.service';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    AutocompleteComponent,
    MenubarComponent,
    HomeComponent,
    CardComponent,
    SliderComponent,
    TableComponent,
    FormdesignComponent,
    PopupComponent,
    AssociateComponent,
    UserdetailComponent,
    AuthDialogComponent,
    LoginRegisterDialogComponent,
    DashboardComponent,
    DineComponent,
    SrilankanCuisineComponent,
    PVRCinemaComponent,
    TicketReservationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTabsModule,
    RouterModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    
    
    
  ],
  providers: [MockAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
