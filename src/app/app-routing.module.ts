import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IndexComponent } from "./public/index/index.component";
import { LoginCallbackComponent } from "./public/login-callback/login-callback.component";
import { AuthComponent } from "./auth/auth/auth.component";
import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: IndexComponent,
  },
  {
    path: "login-callback",
    component: LoginCallbackComponent,
  },
  {
    path: "home",
    canActivate: [AuthGuard],
    component: AuthComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
