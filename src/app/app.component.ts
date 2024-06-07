import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DataBindingComponent } from './databinding/data-binding/data-binding.component';
import { StructuralDirectivesComponent } from './directives/structural-directives/structural-directives.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AddEmployeeComponent ,EmployeeListComponent,DataBindingComponent,StructuralDirectivesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular18-crud';
}
