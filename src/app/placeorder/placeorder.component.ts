import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css']
})
export class PlaceorderComponent implements OnInit {

  constructor(private foodservice:FoodService) { }

  ngOnInit(): void {
  }
  
  insertdata(insertform)
  {
    this.foodservice.addservice(insertform.value).subscribe();
  }

}
