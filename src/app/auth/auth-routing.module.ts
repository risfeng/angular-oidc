import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { C1Component } from "./test/c1/c1.component";
import { C2Component } from "./test/c2/c2.component";
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  {
    path: "home",
    component: AuthComponent,
    canActivateChild: [AuthGuard],
    children: [
      { path: "c1", component: C1Component },
      { path: "c2", component: C2Component },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
