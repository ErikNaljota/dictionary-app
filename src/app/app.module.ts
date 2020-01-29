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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NavigationModule} from './navigation/navigation.module';
import { AssignmentsComponent } from './assignments/assignments.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        BodyComponent,
        SettingsComponent,
        DictionaryComponent,
        EditorComponent,
        AssignmentsComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        NavigationModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
