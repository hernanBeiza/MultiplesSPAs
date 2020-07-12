import { Inject, Component, OnInit } from "@angular/core";
import { DOCUMENT } from "@angular/common";

import { environment } from "./../environments/environment";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "LoginApp";

  constructor(@Inject(DOCUMENT) private document: Document) {
    console.log("LoginApp");
  }

  ngOnInit() {
    console.log("LoginApp ngOnInit();");
  }

  public irPrincipal(): void {
    console.log("irPrincipal();");
    console.log("Revisar la url");
    console.log(environment.rootURL);
    this.document.location.href = environment.rootURL;
  }
}
