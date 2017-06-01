import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Input ('name') name;
@Output()  customClick=new EventEmitter();

dummyFunc=function(){
	console.log(this.name);
	this.customClick.emit();//trigger event
}

  constructor() { }

  ngOnInit() {
  }

}
