import { Component, OnInit,AfterViewInit ,ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-sat-bar',
  templateUrl: './sat-bar.component.html',
  styleUrls: ['./sat-bar.component.css']
})
export class SatBarComponent implements OnInit,AfterViewInit  {

  @ViewChild('mySidebar') mySidebar: ElementRef;
  @ViewChild('myOverlay') myOverlay: ElementRef;

  showSelected : boolean;
  constructor() { }

  ngOnInit() {
  }
  TogglePanel(){
    this.showSelected = !(this.showSelected);
  }


  ngAfterViewInit() {
    console.log('pat mySidebar');
    console.log( this.mySidebar.nativeElement);
  }

  w3_open() {
    document.getElementById("mySidebar").style.display = "block";
   document.getElementById("myOverlay").style.display = "block";
    console.log('pat open');
}
w3_close() {
  document.getElementById("mySidebar").style.display = "none";
 document.getElementById("myOverlay").style.display = "none";
  console.log('pat close');
}

}
