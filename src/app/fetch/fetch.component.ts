import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})
export class FetchComponent implements OnInit {

  
  fooddetails;

  constructor(private foodservice:FoodService) { this.fetchdata(); }

  ngOnInit(): void {
  }
  fetchdata()
  {
    this.foodservice.fetchservice().subscribe(
      (resp) => { this.fooddetails=resp; }
    );
  }
}
