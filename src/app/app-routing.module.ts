import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PizzasComponent } from "./components/pizzas/pizzas.component";

const routes: Routes = [
  { path: "pizzas", component: PizzasComponent },
  {
    path: "**",
    redirectTo: "pizzas"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
