import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store';
import { CHANGE_CITY } from '../action.type.constant';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent {
  myCity: string;
  constructor(private ngRedux: NgRedux<IAppState>) { }
  onSubmit() {
    debugger;
    this.ngRedux.dispatch({type: CHANGE_CITY, payload: this.myCity});
  }
}
