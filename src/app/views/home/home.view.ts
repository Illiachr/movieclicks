import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: "app-home",
  imports: [RouterOutlet, CardComponent],
  templateUrl: "./home.view.html",
  styleUrl: "./home.view.css",
})
export class HomeView {}
