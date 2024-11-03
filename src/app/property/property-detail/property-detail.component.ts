import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HousingService } from '../../services/housing.service';
import { Property } from '../../model/property';
import { idLocale } from 'ngx-bootstrap/chronos';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrl: './property-detail.component.css'
})
export class PropertyDetailComponent implements OnInit{
public propertyId!: number;
property = new Property();

  constructor(private route: ActivatedRoute, 
              private router: Router,
              private housingService: HousingService) { }

  ngOnInit(): void {
    this.propertyId = +this.route.snapshot.params['id'];

    this.route.params.subscribe(
      (params) => {
        this.propertyId = +params['id'];
        this.housingService.getProperty(this.propertyId).subscribe (
          (data: any) => {
            this.property = data as Property;
          } 
        );
      }
    );
      
  }
}

  
  



