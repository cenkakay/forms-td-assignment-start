import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  subscriptions = ["Basic", "Advanced", "Pro"];
  @ViewChild("form", { static: false }) signupForm: NgForm;

  onSubmit() {
    console.log(this.signupForm.value);
  }
}
