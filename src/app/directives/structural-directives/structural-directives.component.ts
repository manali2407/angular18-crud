import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directives',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-directives.component.html',
  styleUrl: './structural-directives.component.css'
})
export class StructuralDirectivesComponent {


isDiv1Visible:boolean = true;
isDiv2Visible : boolean =true;

num1:string = '';
num2:string = '';


isActive = true
selectedValue: any

cityArray : string [] = ['Mumbai','Pune','Thane','Ratnagiri']


studentList:any [] = [
  {studId:111, name:'aaa', city:'AAA', isActive:false},
  {studId:222, name:'bbb', city:'BBB', isActive:false},
  {studId:333, name:'ccc', city:'CCC', isActive:true},
  {studId:444, name:'ddd', city:'DDD', isActive:false},
  {studId:555, name:'eee', city:'EEE', isActive:false},
]


showDiv1(){
  this.isDiv1Visible = true;
}
hideDiv1(){
  this.isDiv1Visible = false;
}

toggleDiv(){
  this.isDiv2Visible = !this.isDiv2Visible;

  // if(this.isDiv2Visible == true){
  //    this.isDiv2Visible = false
  // }else{
  //   this.isDiv2Visible = true
  // }

}


}
