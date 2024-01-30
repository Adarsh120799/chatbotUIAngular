import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatboxComponent } from './components/chatbox/chatbox.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'chatbox',
  },
  {
    path: 'chatbox',
    component: ChatboxComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
