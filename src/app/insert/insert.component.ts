import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  constructor(private foodservice:FoodService) { }

  ngOnInit(): void {
  }
  
  insertdata(insertform)
  {
    this.foodservice.addservice(insertform.value).subscribe();
  }

}
