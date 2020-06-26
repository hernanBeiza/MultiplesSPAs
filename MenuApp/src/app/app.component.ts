import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'menu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
	constructor(private router:Router){

	}

  ngOnInit() {
  	console.log("MenuApp");
  }

  public irBandeja():void {
  	console.log("irBandeja");
  	this.router.navigate(["bandeja"]);
  }

  public irTramitar():void {
  	console.log("irTramitar");
  	this.router.navigate(["tramitar"]);
  }

}
