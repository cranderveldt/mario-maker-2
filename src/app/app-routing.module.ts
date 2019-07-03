import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LevelIndexComponent } from './pages/levels/index/index.component';
import { LevelEditComponent } from './pages/levels/edit/edit.component';
import { LevelAddComponent } from './pages/levels/add/add.component';
import { HomeComponent } from './pages/home/home.component';
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { SetIndexComponent } from './pages/sets/index/index.component';
import { SetShowComponent } from './pages/sets/show/show.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'levels', component: LevelIndexComponent, ...canActivate(redirectUnauthorizedTo([''])) },
  { path: 'levels/add', component: LevelAddComponent, ...canActivate(redirectUnauthorizedTo([''])) },
  { path: 'levels/:id/edit', component: LevelEditComponent, ...canActivate(redirectUnauthorizedTo([''])) },
  { path: 'sets', component: SetIndexComponent, ...canActivate(redirectUnauthorizedTo([''])) },
  { path: 'sets/:id', component: SetShowComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
