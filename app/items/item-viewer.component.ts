import { Component, OnInit } from '@angular/core'
import { ItemService } from './item.service'

@Component({
  selector: 'item-viewer',
  template: `
    <h1>Item Viewer</h1>
    <h2>{{title}}</h2>
    `,
    providers: [ItemService]
})

export class ItemViewerComponent implements OnInit {
  title = 'All the items';
  items: any[];

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getItems()
      .then(items => this.items = items)
      .catch(function(error) {
        console.log('dummy item inserted')
        this.items = [{
          "id": 1,
          "title": "Boots",
          "name": "Boots",
          "key": "Reg_Boots"
       }];
      });
  }
}
