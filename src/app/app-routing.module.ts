import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ScoringsComponent } from './scorings/scorings.component';
import { StandingsComponent } from './standings/standings.component';

const routes: Routes = [
  {path:'standings',component:StandingsComponent},
  {path:'scorings',component:ScoringsComponent},
  {path:'admin',component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}