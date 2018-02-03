import { Component, OnInit } from '@angular/core';
import { ShowparameterService } from './../../services/showparameter.service';
import {Sat} from './../sat';
@Component({
  selector: 'app-display-sat',
  templateUrl: './display-sat.component.html',
  styleUrls: ['./display-sat.component.css']
})
export class DisplaySatComponent implements OnInit {

  constructor(public showparameterService :ShowparameterService) { }
  sat : Sat;
  error: string;
  ngOnInit() {

   this.showparameterService.newSatitem.subscribe(
     data => {this.sat = data;},
     error =>{ this.error  = error.statusText;} );
     console.log('sat display comp');
     console.log(this.sat);
  }

}
