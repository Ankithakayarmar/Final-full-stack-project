import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-updateorder',
  templateUrl: './updateorder.component.html',
  styleUrls: ['./updateorder.component.css']
})
export class UpdateorderComponent implements OnInit {

  constructor(private foodservice:FoodService) { }

  ngOnInit(): void {
  }
  
  insertdata(insertform)
  {
    this.foodservice.addservice(insertform.value).subscribe();
  }
}
