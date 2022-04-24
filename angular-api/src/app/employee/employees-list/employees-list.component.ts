import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee } from 'src/app/model/employee.model';
import { EmployeeService } from 'src/app/service/employee.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ApiResponse } from 'src/app/model/api.response';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees: Observable<Employee[]>;
  response: Observable<ApiResponse>;
  //dtOptions: DataTables.Settings = {};
  //@ViewChild('dtOptions', {static: true}) table;

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {
    setTimeout(function(){
      $(function(){
        $('#example').DataTable();
    });
    },2000);
  }

  ngOnInit() {
    this.response = this.employeeService.getEmployees();
    this.response.subscribe(val => this.employees = val.result)

    console.log(this.employees)
    setTimeout(
      function(){
        $(function(){
          $('#example').DataTable();
      });
    },2000);

  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id)
      .subscribe({
        next: data => {
          console.log(data);
          this.response = this.employeeService.getEmployees();
          this.response.subscribe(val => this.employees = val.result)
        },
        error: error => console.log(error)
      });
  }

  updateEmployee(id: number){
    this.router.navigate(['update', id]);
  }


}
