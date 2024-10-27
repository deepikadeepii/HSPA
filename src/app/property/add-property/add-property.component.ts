import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrl: './add-property.component.css'
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm !: NgForm;
  @ViewChild('formTabs') formTabs?: TabsetComponent;

  // Will come for masters
  propertyTypes: Array<string> = ['House', 'Apartment', 'Duplex']
  furnishTypes: Array<string> = ['Fully', 'Semi', 'Unfurnished']

  propertyView: IProperty = {
    Id: null,
    Name: '',
    Price: null,
    SellRent: null,
    Type: null,
  
    
  };

  
  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  onBack()
  {
    this.router.navigate(['/']);
  }

  onSubmit(){
    console.log('Congrats, form submitted');
    console.log(this.addPropertyForm);
  }
  selectTab(tabId: number) {
      if (this.formTabs?.tabs[tabId]) {
        this.formTabs.tabs[tabId].active = true;

}
}
}