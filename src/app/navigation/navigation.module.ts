import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationComponent} from './navigation.component';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {VocabularySubComponent} from './vocabulary-sub/vocabulary-sub.component';
import {AssignmentsSubComponent} from './assignments-sub/assignments-sub.component';
import {NavigationGuardService} from '../guard-service/navigation-guard.service';

const navRoutes: Routes = [
    // {path: '', component: VocabularySubComponent, outlet: 'subs', canActivate: [NavigationGuardService]},
    // {path: 'home', component: VocabularySubComponent, outlet: 'subs', canActivate: [NavigationGuardService]},
    {path: 'vocabulary', component: VocabularySubComponent, outlet: 'subs', canActivate: [NavigationGuardService]},
    {path: 'assignments', component: AssignmentsSubComponent, outlet: 'subs', canActivate: [NavigationGuardService]},
    {path: '**', component: VocabularySubComponent, outlet: 'subs', canActivate: [NavigationGuardService]}
];

@NgModule({
    declarations: [
        NavigationComponent,
        VocabularySubComponent,
        AssignmentsSubComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule,
        RouterModule.forRoot(navRoutes)
    ],
    exports: [
        NavigationComponent
    ]
})
export class NavigationModule {
}
