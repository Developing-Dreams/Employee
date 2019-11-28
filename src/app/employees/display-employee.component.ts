import { Component, OnInit, Input} from '@angular/core';//OnChanges,SimpleChanges,Input
//Output,EventEmitter
import { Employee } from '../models/employee.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {//,OnChanges
  @Input() employee:Employee;
  private selectedEmployeeId: number;
  // @Output() notify:EventEmitter<Employee>=new EventEmitter<Employee>() 
  // @Input() employeeId:number;
  // private _employee: Employee;
  // @Input()
  // set employee(val: Employee) {
  //   // console.log('Previous : ' + (this._employee ? this._employee.name : 'NULL'));
  //   // console.log('Current : ' + val.name);
  //   this._employee = val;
  // }
  // get employee(): Employee {
  //   return this._employee;
  // }
  constructor(private _router:ActivatedRoute) { }

  ngOnInit() {
    this.selectedEmployeeId = +this._router.snapshot.paramMap.get('id');
  }
  // getNameAndGender():string{
  //   return this.employee.name + ' ' + this.employee.gender;
  // }
  // ngOnChanges(changes: SimpleChanges) {
  //   for (const propName of Object.keys(changes)) {
  //     const change = changes[propName];
  //     const from = JSON.stringify(change.previousValue);
  //     const to = JSON.stringify(change.currentValue);
  
  //     console.log(propName + ' changed from ' + from + ' to ' + to);
  //   }

  // }
  // ngOnChanges(changes:SimpleChanges){
  //   const previousEmployee = <Employee>changes.employee.previousValue;
  // const currentEmployee = <Employee>changes.employee.currentValue;

  // console.log('Previous : ' + (previousEmployee ? previousEmployee.name : 'NULL') );
  // console.log('Current : ' + currentEmployee.name);

  // }
  // handleClick():void{
  //   this.notify.emit(this.employee);
  // }

}
