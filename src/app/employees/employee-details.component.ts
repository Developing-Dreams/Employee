import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './employee.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employee: Employee;
  private _id: number;
  constructor(private activatedRoute: ActivatedRoute,
    private employeeService: EmployeeService,
    private _router: Router) { }

  ngOnInit() {
    // const id = +this.activatedRoute.snapshot.params['id'];
    this.activatedRoute.paramMap.subscribe(params => {
      this._id = +params.get('id');
      this.employee = this.employeeService.getEmploye(this._id);
    })
    
  }
  
  getNextEmployee() {
    if (this._id < 3) {
      this._id = this._id + 1;
    } else {
      this._id = 1;
    }
    this._router.navigate(['/employees', this._id]);
  }
}
