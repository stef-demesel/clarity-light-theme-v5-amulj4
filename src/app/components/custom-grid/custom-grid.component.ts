import { Component } from "@angular/core";
import { ClrDatagridSortOrder, ClrDatagridStateInterface } from "@clr/angular";

@Component({
  selector: "custom-grid",
  templateUrl: "./custom-grid.component.html"
})
export class CustomGridComponent {
  gridState: ClrDatagridStateInterface;
  loading: boolean;
  items: any[];
  total: number;

  constructor() {
    this.gridState = {
      page: {
        size: 10,
        current: 1
      },
      sort: {
        by: "name",
        reverse: false
      }
    };
    this.total = 3;
  }
}
