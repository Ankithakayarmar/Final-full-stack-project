import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private foodservice:FoodService) 
  {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  update(updateform)
  {
    this.foodservice.updateservice(updateform.value).subscribe();
  }
}
