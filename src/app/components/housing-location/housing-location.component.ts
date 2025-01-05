import { Component, Input } from '@angular/core';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  imports: [],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {

  @Input() housingLocation!: Housinglocation;
}
