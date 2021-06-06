import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from 'app/restaurants/restaurants.service';
import { Observable } from 'rxjs/Observable';
import { MenuItem } from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>;

  constructor(
    private restaurantsService: RestaurantService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.route.parent.snapshot.params['id'];
    this.menu = this.restaurantsService.menuOfRestaurant(id);
  }

  addMenuItem(item: MenuItem) {
    console.log(item);
  }

}
