import { Component, OnInit, OnChanges } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.scss']
})
export class CityDetailsComponent implements OnChanges {
  @select() city;
  constructor(private ngRedux: NgRedux<IAppState>) { }
  ngOnChanges(test) {debugger

  }
}
