import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { IndexComponent } from "./public/index/index.component";
import { LoginCallbackComponent } from "./public/login-callback/login-callback.component";
import { AuthModule } from "./auth/auth.module";

@NgModule({
  declarations: [AppComponent, IndexComponent, LoginCallbackComponent],
  imports: [BrowserModule, AppRoutingModule, AuthModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
