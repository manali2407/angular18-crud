import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [],
  template: `<h1 class="primary">Hello This is a template component</h1>`,
  styles: ['.primary{color:blue}']
})
export class EmployeeListComponent {

}
