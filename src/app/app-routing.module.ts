import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonComponent } from './person/person.component';
import { PersonSearchComponent } from './person-search/person-search.component';


const routes: Routes = [{
  path:'',
  component: PersonComponent,
  pathMatch: 'full'
},

{
  path:'searchPerson',
  component: PersonSearchComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
