import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LevelIndexComponent } from './pages/levels/index/index.component';
import { LevelEditComponent } from './pages/levels/edit/edit.component';
import { LevelAddComponent } from './pages/levels/add/add.component';

const routes: Routes = [
  { path: '', component: LevelIndexComponent },
  { path: 'levels/add', component: LevelAddComponent },
  { path: 'levels/:id/edit', component: LevelEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
