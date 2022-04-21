import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-deleteorder',
  templateUrl: './deleteorder.component.html',
  styleUrls: ['./deleteorder.component.css']
})
export class DeleteorderComponent implements OnInit {

  constructor(private foodservice:FoodService) { }

  ngOnInit(): void {
  }
  
  insertdata(insertform)
  {
    this.foodservice.addservice(insertform.value).subscribe();
  }

}
