import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { EntitiesComponent } from './pages/entities/entities.component';
import { RepositoryComponent } from './pages/repository/repository.component';
import { LocalServicesComponent } from './pages/local-services/local-services.component';
import { ConfigurationComponent } from './pages/configuration/configuration.component';
import { TestingComponent } from './pages/testing/testing.component';
import { DatabaseQueriesComponent } from './pages/database-queries/database-queries.component';
import { RemoteServicesComponent } from './pages/remote-services/remote-services.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: HomeComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'entities', component: EntitiesComponent },
  { path: 'repository', component: RepositoryComponent },
  { path: 'local-services', component: LocalServicesComponent },
  { path: 'database-queries', component: DatabaseQueriesComponent },
  { path: 'remote-services', component: RemoteServicesComponent },
  { path: 'configuration', component: ConfigurationComponent },
  { path: 'testing', component: TestingComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
