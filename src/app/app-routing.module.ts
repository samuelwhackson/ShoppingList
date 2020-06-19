import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponentComponent } from './components/shopping-list-component/shopping-list-component.component';
import { MainPageComponent } from './components/main-page/main-page.component';

  const routes: Routes = [
    {path: 'Main', component:MainPageComponent },
    {path: 'list',  component:ShoppingListComponentComponent },
    {path: '**',  redirectTo:'Main' },


  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
