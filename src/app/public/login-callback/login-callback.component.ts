import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "oidc-client";
import { AuthService } from "src/app/auth/auth.service";

@Component({
  selector: "app-login-callback",
  templateUrl: "./login-callback.component.html",
  styleUrls: ["./login-callback.component.less"],
})
export class LoginCallbackComponent implements OnInit {
  constructor(private _router: Router, private _auth: AuthService) {}

  ngOnInit() {
    this._auth.loginCallBack().subscribe((user: User) => {
      console.log("xxx");
      this._router.navigate(["home"]);
    });
  }
}
