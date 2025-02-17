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

  filteredLocationList: HousingLocation [] = [];

  constructor(
  ) {
    //this.housingLocationsList = this.housingService.getAllHousingLocations();
    //this.filteredLocationList = this.housingLocationsList;

    //con HTTP
    this.housingService.getAllHousingLocations().then((housingLocationsList: HousingLocation []) => {
      this.filteredLocationList = housingLocationsList;
      this.housingLocationsList = housingLocationsList;
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationsList;
      return
    }
    this.filteredLocationList = this.housingLocationsList.filter((housingLocation) =>
      housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    )
  }

}
