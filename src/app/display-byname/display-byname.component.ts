import { Component, OnInit,Input  } from '@angular/core';
import { ShowparameterService } from './../../services/showparameter.service';
import { Sat } from './../sat';

@Component({
  selector: 'app-display-byname',
  templateUrl: './display-byname.component.html',
  styleUrls: ['./display-byname.component.css']
})
export class DisplayBynameComponent implements OnInit {

  orbitype : string = "";
  Orbits : Array<string> = ["LEO","MEO","GEO", "Elliptical"]
  satData: Sat[];
  filterSat:Sat[];
  error:string;
  letter:string;
  alphabets:Array<string> =["A","B","C","D","E","F","G" ,"H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  @Input() satName:string;
  constructor(private showparameterService : ShowparameterService) { }

  ngOnInit() { 
    

  }

  letterClick(letter:string){
    this.letter = letter;
    this.showparameterService.GetAllSat().subscribe(
     data => {this.satData = data;
              if (this.orbitype == ""){
              this.filterSat = this.satData.filter(s => s.Name.startsWith(letter[0]))}
             else{
              this.filterSat = this.satData.filter(s => s.Name.startsWith(letter[0]) && s.Class_of_Orbit == this.orbitype )
             }},
     error => this.error = error.statusText     
   
    );
   
  }

  NameClick(sat: Sat ){
    this.showparameterService.DisplaySat(sat);
    console.log( sat); 
  }

  handleChange(orbitType : string){
  this.orbitype = orbitType;
  if  (this.letter= ""){
    this.letterClick("A");
  }
  else{this.letterClick(this.letter);}

  }

}
