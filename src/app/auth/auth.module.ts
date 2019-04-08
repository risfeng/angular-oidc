import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthComponent } from "./auth/auth.component";
import { C1Component } from "./test/c1/c1.component";
import { C2Component } from "./test/c2/c2.component";
import { AuthRoutingModule } from "./auth-routing.module";

@NgModule({
  declarations: [AuthComponent, C1Component, C2Component],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
