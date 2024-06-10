import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, interval, map } from 'rxjs';
import { NaPipe } from '../na.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe,JsonPipe,AsyncPipe,
    NaPipe
  ],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {

courseName:string = 'This is Angular 18 version';

currentDate:Date = new Date();

currentTime : Observable<Date> = new Observable<Date>;

studentObj:any =[{
   name: 'manali',
   lastname:'pathratkar',
   city:'mumbai',
   state:'sdas'

}]

constructor(){
  //  this.currentTime = interval(1000).pipe(map(()=> new Date()));
}

}
