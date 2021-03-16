import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ClarityModule } from "@clr/angular";

import "@clr/icons";

import { AppComponent } from "./app.component";

import "@cds/core/alert/register.js";
import { CdsModule } from "@cds/angular";
import { CustomGridComponent } from "./components/custom-grid/custom-grid.component";
import { StateProvider } from "@clr/angular/data/datagrid/providers/state.provider";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ClarityModule,
    BrowserAnimationsModule,
    CdsModule
  ],
  declarations: [AppComponent, CustomGridComponent],
  bootstrap: [AppComponent],
  providers: [StateProvider]
})
export class AppModule {}
