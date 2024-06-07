import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { single } from 'rxjs';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

// dataType: string, number, boolean, date
empName:string = "Adarsh";
empAddress= "Mumbai"
empAge = 21;
isIndian :boolean = true;
currentDate = new Date();
inputCheck="checkbox";
inputRadio="radio";
myClass = 'bg-primary'

//signals

firstName = signal("Manali")

constructor(){
  
}

showMessage(message:string){
 alert(message)
}

changeEmpName(){
  this.empName = "Manali"
  this.firstName.set('Revan')
}
}
