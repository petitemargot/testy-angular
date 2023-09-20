import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainContainerComponent} from "./components/main-container/main-container.component";

const routes: Routes = [
  {path: '/main', component: MainContainerComponent},
  {path: '', redirectTo: '/main', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
