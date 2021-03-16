import { Component, VERSION, ViewChild } from "@angular/core";
import { CustomGridComponent } from "./components/custom-grid/custom-grid.component";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild("customGrid")
  customGrid: CustomGridComponent;

  items = [
    { id: 1, name: "item 1" },
    { id: 2, name: "item 2" },
    { id: 3, name: "item 3" }
  ];
}
