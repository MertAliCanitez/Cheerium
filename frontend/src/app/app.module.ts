import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing.component';
import { CardCreateComponent } from './pages/card/card-create.component';
import { CardViewComponent } from './pages/card/card-view.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { WorkspaceComponent } from './pages/workspace/workspace.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'card/create', component: CardCreateComponent },
  { path: 'card/:cardId', component: CardViewComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'workspace', component: WorkspaceComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    CardCreateComponent,
    CardViewComponent,
    ProfileComponent,
    WorkspaceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
