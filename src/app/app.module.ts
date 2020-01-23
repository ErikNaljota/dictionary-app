import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {BodyComponent} from './body/body.component';
import {SettingsComponent} from './settings/settings.component';
import {DictionaryComponent} from './dictionary/dictionary.component';
import {EditorComponent} from './editor/editor.component';
import { NavigationComponent } from './navigation/navigation.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    SettingsComponent,
    DictionaryComponent,
    EditorComponent,
    NavigationComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
