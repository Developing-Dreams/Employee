import { PipeTransform, Pipe } from '@angular/core';
import { Employee } from '../models/employee.model';
@Pipe({
    name:'employeeFilter'
})
export class EmployeeFilterPipe implements PipeTransform {
    transform(employees: Employee[], searchTerm: string):Employee[] {
        if (!employees || !searchTerm) {
            return employees;
        }
        return employees.filter(item => item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1)
    }
}