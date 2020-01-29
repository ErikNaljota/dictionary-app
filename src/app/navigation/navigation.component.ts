import {Component, OnInit} from '@angular/core';
import {NavigationService} from './navigation.service';
import {VocabularyService} from '../services/vocabulary.service';
import {GuardService} from '../guard-service/guard.service';
import {NavigationGuardService} from '../guard-service/navigation-guard.service';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
    private menuItems: string[] = ['home', 'vocabulary', 'assignments'];

    constructor(private vocabularyService: VocabularyService,
                private navigationService: NavigationService,
                private guardService: GuardService,
                private navigationGuardService: NavigationGuardService) {
    }

    ngOnInit() {
    }

    navigate(page: string): void {
        this.navigationService.navigate(page);
    }

    correctPage(): boolean {
        const path = this.guardService.path;
        const navPath = this.navigationGuardService.navPath;
        console.log('path = nav', path === navPath, 'path = ""', path === '');
        console.log(path, navPath);
        // return (path === navPath) && path.length > 0;
      return true;
    }
}
