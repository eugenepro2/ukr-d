import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {


  cart = 0;
  // lists = [
  // {
  //   name: 'Картошка',
  //   cost: 20
  // },
  // {
  //   name: 'Хлеб',
  //   cost: 10
  // }
  // ];
  items: FirebaseListObservable<any[]>;

  check(status, item: any) {
    if (status) {
        this.cart += (item.cost);
    } else {
      this.cart -= (item.cost);
    }
  }


  constructor(db: AngularFireDatabase) {
    this.cart = 0;
    this.items = db.list('/lists');
  }

  ngOnInit() {
  }

}
