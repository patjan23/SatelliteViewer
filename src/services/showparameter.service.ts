import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Sat } from './../app/sat';


@Injectable()
export class ShowparameterService {

  public newDisplayitem = new Subject<string>();
  public newSatitem = new Subject<Sat>();

  constructor(private http:Http) { }

  DisplayItem(data:string){
      this.newDisplayitem.next(data);
     
  }

  GetAllSat(){
  
    return this.http.get('data/satellite.json').map(res =><Sat[]> res.json());
  }
  
  DisplaySat(sat:Sat){
    this.newSatitem.next(sat);
    
  }


}
