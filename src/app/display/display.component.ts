import { Component, OnInit } from '@angular/core';
import { ShowparameterService }  from './../../services/showparameter.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor( private showparameterService :ShowparameterService ) { }
  displayItem: string;
  ngOnInit() {
    this.showparameterService.newDisplayitem.subscribe(
      data => this.displayItem = data
    );
  }

}
