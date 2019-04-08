import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.less"],
})
export class AuthComponent implements OnInit {
  constructor(private _router: Router, private _auth: AuthService) {}

  ngOnInit() {}

  public goC1(): void {
    this._router.navigate(["home/c1"]);
  }

  public goC2(): void {
    this._router.navigate(["home/c2"]);
  }

  public exit(): void {
    this._auth.logout();
  }
}
