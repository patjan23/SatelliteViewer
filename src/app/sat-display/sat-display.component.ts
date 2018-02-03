import { Component, OnInit } from '@angular/core';
import { ShowparameterService }  from './../../services/showparameter.service';

@Component({
  selector: 'app-sat-display',
  templateUrl: './sat-display.component.html',
  styleUrls: ['./sat-display.component.css']
})
export class SatDisplayComponent implements OnInit {

displayParameter : string ;
displayParameters : Array<string> =  ['Name of Satellite',
'Country of Operator/Owner',
'Operator/Owner',
'Purpose',
'Class of Orbit',
'Date of Launch',
'Launch Site',
'Launch Vehicle',
'COSPAR Number',
'NORAD Number'] ;

  constructor(public showparameterService :ShowparameterService) { }

  ngOnInit() {

  }

  handleChange(evt){ 
            this.displayParameter = evt;
        this.showparameterService.DisplayItem( this.displayParameter);
       // console.log(evt);
      } 
  

}
