import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IProperty } from '../model/iproperty';
import { Property } from '../model/property';




@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getProperty(id: number) {
    return  this.getAllProperties().pipe(
      map(propertiesArray => {
        return propertiesArray.find(p => p.Id === id);
      })
    );
  }

  getAllProperties(SellRent?: number): Observable<IProperty[]> {
    return this.http.get('data/properties.json').pipe(
      map(data => {
        const propertiesArray: Array<IProperty> = [];
        const localProperties = JSON.parse(localStorage.getItem('newProp'));

        if (localProperties) {
          for (const id in localProperties) {
            if (SellRent) {
            if (localProperties.hasOwnProperty(id) && localProperties[id as keyof object]['SellRent'] === SellRent) {
            propertiesArray.push(localProperties[id as keyof object]);
            }
          } else {
            propertiesArray.push(localProperties[id]);
          } 
          }
        }

        for (const id in data) {

          if (SellRent) {
          if (data.hasOwnProperty(id) && data[id as keyof object]['SellRent'] === SellRent) {
          propertiesArray.push(data[id as keyof object]);
        }
      }  else { 
        propertiesArray.push(data[id as keyof object]);
      }
      }
      return propertiesArray;
      })
    );
    
  }
  addProperty(property: Property) {
    let newProp = [property];

    // Add new property in array if newProp already exists in local storage
    if (localStorage.getItem('newProp')) {
      newProp = [property,
                  ...JSON.parse(localStorage.getItem('newProp'))];
    }

    localStorage.setItem('newProp', JSON.stringify(newProp));
  }

  newPropID() {
    if (localStorage.getItem('PID')) {
      localStorage.setItem('PID', String(+localStorage.getItem('PID') +1));
      return +localStorage.getItem('PID');
    } else {
      localStorage.setItem('PID', '101');
      return 101;
    }
  }
}
