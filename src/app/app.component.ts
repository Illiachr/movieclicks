import { Component } from "@angular/core";
import { AppHeader } from "./components/header/header.component";
import { HomeView } from "./views/home/home.view";

@Component({
  selector: "app-root",
  imports: [AppHeader, HomeView],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "movieclicks";
}
