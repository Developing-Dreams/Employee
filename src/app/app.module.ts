import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeeComponent } from './employees/list-employee.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { SelectRequiredValidatorDirective } from './shared/select-required-validator.directive';
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';
import { EmployeeService } from './employees/employee.service';
import { DisplayEmployeeComponent } from './employees/display-employee.component'
import { CreateEmployeeCanDeactivateGuardService } from './employees/create-employee-can-deactivate-guard.services';
import { EmployeeDetailsComponent } from './employees/employee-details.component'
import { EmployeeFilterPipe } from './employees/emplolyee-filter.pipe';

const appRoutes: Routes = [{
  path: "list", component: ListEmployeeComponent
},
{
  path: "create",
  component: CreateEmployeeComponent,
  canDeactivate:[CreateEmployeeCanDeactivateGuardService]
},
{
  path: "employees/:id", component: EmployeeDetailsComponent
},
{
  path: "", redirectTo: "/list", pathMatch: "full"
},
]
@NgModule({
  declarations: [
    AppComponent,
    ListEmployeeComponent,
    CreateEmployeeComponent,
    SelectRequiredValidatorDirective,
    ConfirmEqualValidatorDirective,
    DisplayEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EmployeeService, CreateEmployeeCanDeactivateGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
