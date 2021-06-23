import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LogoComponent } from './design/logo/logo.component';
import { HeaderComponent } from './design/header/header.component';
import { SearchBarComponent } from './repos/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReposListComponent } from './repos/repos-list/repos-list.component';
import { ScrollbarComponent } from './shared/scrollbar/scrollbar.component';
import { RepoComponent } from './repos/repo/repo.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    HeaderComponent,
    SearchBarComponent,
    ReposListComponent,
    ScrollbarComponent,
    RepoComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
