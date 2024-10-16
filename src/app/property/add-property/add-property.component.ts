import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrl: './add-property.component.css'
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm !: NgForm;

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

}
