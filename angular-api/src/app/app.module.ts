import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

import { EmployeeService } from './service/employee.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { EmployeesListComponent } from './employee/employees-list/employees-list.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    EmployeesListComponent,
    UpdateEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
