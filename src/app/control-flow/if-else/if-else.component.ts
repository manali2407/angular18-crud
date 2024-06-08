import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-if-else',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './if-else.component.html',
  styleUrl: './if-else.component.css'
})
export class IfElseComponent {

  isDiv1Visible:boolean = true;
  isDiv2Visible:boolean = true;

  num1:string = '';
  num2:string = '';

  selectStatus: string = '';

showDiv1(){
  this.isDiv1Visible = true;
}
hideDiv1(){
 this.isDiv1Visible =false
}

toggleDiv(){
  this.isDiv2Visible = !this.isDiv2Visible
}
}
