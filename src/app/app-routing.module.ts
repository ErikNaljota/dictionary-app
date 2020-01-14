import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SettingsComponent} from './settings/settings.component';
import {DictionaryComponent} from './dictionary/dictionary.component';
import {EditorComponent} from './editor/editor.component';


const routes: Routes = [
  {path: '', component: DictionaryComponent},
  {path: 'editor', component: EditorComponent},
  {path: 'settings', component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
