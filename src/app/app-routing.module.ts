import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SettingsComponent} from './settings/settings.component';
import {DictionaryComponent} from './dictionary/dictionary.component';
import {EditorComponent} from './editor/editor.component';
import {AssignmentsComponent} from './assignments/assignments.component';
import {GuardService} from './guard-service/guard.service';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
    // {path: '', pathMatch: 'prefix', redirectTo: 'vocabulary'},
    {path: '', component: HomeComponent, canActivate: [GuardService]},
    {path: 'home', redirectTo: ''},
    {path: 'assignments', component: AssignmentsComponent, canActivate: [GuardService]},
    {path: 'editor', component: EditorComponent, canActivate: [GuardService]},
    {path: 'settings', component: SettingsComponent, canActivate: [GuardService]},
    {path: 'vocabulary', component: DictionaryComponent, canActivate: [GuardService]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
