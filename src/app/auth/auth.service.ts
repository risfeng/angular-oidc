import { Injectable, EventEmitter } from "@angular/core";
import { environment } from "src/environments/environment";
import { UserManager, User } from "oidc-client";
import { Observable, from } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  // 大多数 oidc-client 操作都在其中
  private manager: UserManager = new UserManager(environment.authConfig);
  // private manager: UserManager = undefined;

  // 登录状态改变事件
  public loginStatusChanged: EventEmitter<User> = new EventEmitter();
  // localStorage 中存放用户信息的 Key

  private userKey = `oidc.user:${environment.authConfig.authority}:${
    environment.authConfig.client_id
  }`;
  // private userKey = `oidc.user:${this._conf.env.authConfig.authority}:${this._conf.env.authConfig.client_id}`;

  constructor() {
    // 如果访问用的 token 过期，调用 login()
    this.manager.events.addAccessTokenExpired(() => {
      this.login();
    });
  }

  login() {
    this.manager.signinRedirect();
  }

  logout() {
    this.manager.signoutRedirect();
  }

  loginCallBack() {
    return Observable.create(observer => {
      from(this.manager.signinRedirectCallback()).subscribe((user: User) => {
        this.loginStatusChanged.emit(user);
        observer.next(user);
        observer.complete();
      });
    });
  }

  tryGetUser() {
    return from(this.manager.getUser());
  }

  get type(): string {
    return "Bearer";
  }

  get user(): User | null {
    const temp = localStorage.getItem(this.userKey);
    if (temp) {
      const user: User = JSON.parse(temp);
      return user;
    }
    return null;
  }

  get token(): string | null {
    const temp = localStorage.getItem(this.userKey);
    if (temp) {
      const user: User = JSON.parse(temp);
      return user.access_token;
    }
    return null;
  }

  get authorizationHeader(): string | null {
    if (this.token) {
      return `${this.type} ${this.token}`;
    }
    return null;
  }
}
