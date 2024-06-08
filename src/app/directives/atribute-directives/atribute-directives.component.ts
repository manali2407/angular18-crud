import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-atribute-directives',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './atribute-directives.component.html',
  styleUrl: './atribute-directives.component.css'
})
export class AtributeDirectivesComponent {

  div1BgColor:string='';
  isDiv2Active:boolean= false;

  num1:string = '';
  num2:string = '';

  isChecked:boolean = false


  studentList:any [] = [
    {studId:111, name:'aaa',totalMarks: '50',  city:'AAA', gender:'male', isActive:true},
    {studId:222, name:'bbb',totalMarks: '58',  city:'BBB', gender:'female', isActive:false},
    {studId:333, name:'ccc',totalMarks: '85',  city:'CCC', gender:'male', isActive:true},
    {studId:444, name:'ddd',totalMarks: '65',  city:'DDD', gender:'female', isActive:false},
    {studId:555, name:'eee',totalMarks: '20',  city:'EEE', gender:'male', isActive:false},
  ]

  customStyle:any = {
    'color': 'white',
    'background-color': 'blueviolet',
    'height': '200px',
    'width': '200px',
    'border-radius':'5%',
    'padding': '20px'
  }

  addBlue(){
this.div1BgColor = 'bg-primary'
  }
addRed(){
  this.div1BgColor = 'bg-danger'
}

div2Toggle(){
  this.isDiv2Active = !this.isDiv2Active
}
}
