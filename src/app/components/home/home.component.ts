import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { CommonModule } from '@angular/common';
import { HousingService } from '../housing.service';
@Component({
  selector: 'app-home',
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  housingLocationsList: HousingLocation [] = [];

  housingService:HousingService = inject(HousingService);

  constructor(
  ) {
    this.housingLocationsList = this.housingService.getAllHousingLocations();
  }

}
