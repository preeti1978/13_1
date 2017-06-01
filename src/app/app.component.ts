import { Component,Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 })
export class AppComponent {
 
 myName:Object={
   firstName:'Mac',
   lastName:'John'
 };

getInfoFromHeaderComponent=function(event){
	console.log(event);//printing event object
}

  constructor (){ 
  	
  }

  
}
