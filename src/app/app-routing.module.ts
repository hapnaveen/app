import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MarkingComponent} from './marking/marking.component';
import {AuthComponent} from './auth/auth.component';
import {RouteGuard} from './route.guard';
import {MarkedComponent} from './marked/marked.component';

const routes: Routes = [
  {
    path: 'mark',
    component: MarkingComponent,
    canActivate: [RouteGuard]
  },
  {
    path: 'mark/:id',
    component: MarkingComponent,
    canActivate: [RouteGuard]
  },
  {
    path: 'marked',
    component: MarkedComponent,
    canActivate: [RouteGuard]
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: '**',
    redirectTo: 'auth'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
