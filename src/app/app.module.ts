import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ContentComponent } from './layout/content/content.component';
import { EntitiesComponent } from './pages/entities/entities.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { RepositoryComponent } from './pages/repository/repository.component';
import { LocalServicesComponent } from './pages/local-services/local-services.component';
import { RemoteServicesComponent } from './pages/remote-services/remote-services.component';
import { ConfigurationComponent } from './pages/configuration/configuration.component';
import { TestingComponent } from './pages/testing/testing.component';
import { DatabaseQueriesComponent } from './pages/database-queries/database-queries.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    EntitiesComponent,
    OverviewComponent,
    RepositoryComponent,
    LocalServicesComponent,
    RemoteServicesComponent,
    ConfigurationComponent,
    TestingComponent,
    DatabaseQueriesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
