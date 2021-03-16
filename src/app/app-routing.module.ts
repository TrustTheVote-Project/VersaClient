import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElectoralDistrictComponent } from './electoral-district/electoral-district.component';

const routes: Routes = [
  { path: '', component: ElectoralDistrictComponent } // TODO: Add redirect link for '/district/:id' (For ELECTORAL DISTRICTS)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
