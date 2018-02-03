import { Component, OnInit,Input,AfterViewInit } from '@angular/core';
import { ShowparameterService } from './../../services/showparameter.service';
import { Sat } from './../sat';


@Component({
  selector: 'app-display-operator-owner',
  templateUrl: './display-operator-owner.component.html',
  styleUrls: ['./display-operator-owner.component.css']
})
export class DisplayOperatorOwnerComponent implements OnInit,AfterViewInit {
  ngAfterViewInit(): void {
   // throw new Error("Method not implemented.");
  }
  satData1: Sat[];
  filterSat:any;
  satList:Sat[];
 public listName:any;
  error:string;
  @Input() Operator:string;
  constructor(private showparameterService : ShowparameterService) { }

  ngOnInit() {

    this.showparameterService.GetAllSat().subscribe(
      data => {this.satData1 = data;
              var k =   this.Operator;
             this.filterSat = this.satData1.map(function (item) {
               if (k == 'Country of Operator/Owner')
               {
                  
                    return item.Country_of_Operator_Owner;
              }
              if (k == 'Operator/Owner')
              {                  
                      return item.Operator_Owner;
              }
              if (k == 'Purpose')
              {                  
                      return item.Purpose;
              }
              if (k == 'Launch Site')
              {                  
                      return item.Launch_Site;
              }
              if (k == 'Launch Vehicle'){
                return item.Launch_Vehicle;
              }
              if (k == 'COSPAR Number'){
                return item.COSPAR_Number.split('-')[0];
              }
            });; 
            this.listName = this.filterSat.filter ((x, i, a) => x && a.indexOf(x) === i);
            this.listName.sort();
           },
      error => {this.error = error.statusText }        
     );       
    
  }

  letterClick(country: string ){
    var k =   this.Operator;
    if (k == 'Country of Operator/Owner')
    {
      this.satList = this.satData1.filter(x => x.Country_of_Operator_Owner == country);
    }
    if (k == 'Operator/Owner')
    {
      this.satList = this.satData1.filter(x => x.Operator_Owner == country);
    }
    if (k == 'Purpose')
    {
      this.satList = this.satData1.filter(x => x.Purpose == country);
    }
    if (k == 'Launch Site')
    {
      this.satList = this.satData1.filter(x => x.Launch_Site == country);
    }
    if (k == 'Launch Vehicle')
    {
      this.satList = this.satData1.filter(x => x.Launch_Vehicle == country);
    }
    if (k == 'COSPAR Number')
    {
      this.satList = this.satData1.filter(x => x.COSPAR_Number.split('-')[0] == country);
    }    
    
    console.log(this.satList);
  }

  NameClick(sat: Sat ){
    this.showparameterService.DisplaySat(sat);
    console.log( sat); 
  }

}
