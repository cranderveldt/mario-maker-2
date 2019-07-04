import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LevelIndexComponent } from './pages/levels/index/index.component';
import { LevelEditComponent } from './pages/levels/edit/edit.component';
import { LevelAddComponent } from './pages/levels/add/add.component';
import { HomeComponent } from './pages/home/home.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { SetIndexComponent } from './pages/sets/index/index.component';
import { SetShowComponent } from './pages/sets/show/show.component';
import { SetAddLevelComponent } from './pages/sets/add-level/add-level.component';
import { SetEditLevelComponent } from './pages/sets/edit-level/edit-level.component';
import { SetCreateComponent } from './pages/sets/create/create.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'levels', component: LevelIndexComponent, ...canActivate(redirectUnauthorizedTo([''])) },
  // { path: 'levels/add', component: LevelAddComponent, ...canActivate(redirectUnauthorizedTo([''])) },
  // { path: 'levels/:id/edit', component: LevelEditComponent, ...canActivate(redirectUnauthorizedTo([''])) },
  { path: 'sets', component: SetIndexComponent, ...canActivate(redirectUnauthorizedTo([''])) },
  { path: 'sets/create', component: SetCreateComponent, ...canActivate(redirectUnauthorizedTo([''])) },
  { path: 'sets/:id', component: SetShowComponent },
  { path: 'sets/:id/levels/add', component: SetAddLevelComponent },
  { path: 'sets/:sid/levels/:lid/edit', component: SetEditLevelComponent, ...canActivate(redirectUnauthorizedTo([''])) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
