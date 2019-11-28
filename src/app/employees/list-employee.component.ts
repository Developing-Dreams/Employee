import { Component, OnInit } from '@angular/core';
import { Employee } from "../models/employee.model";
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  employees: Employee[] = [];
  employeeName: Employee;
  constructor(private _employeeService: EmployeeService, private _router: Router) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployee();
    
  }
  onClick(employeeId: number) {
    this._router.navigate(['/employees',employeeId])
  }
  

}
