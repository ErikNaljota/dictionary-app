import {Component, OnInit} from '@angular/core';
import {NavigationService} from './navigation.service';
import {VocabularyService} from '../services/vocabulary.service';
import {GuardService} from '../guard-service/guard.service';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
    private menuItems: string[] = ['home', 'vocabulary', 'assignments'];
    private selectedItem: string = '';

    constructor(private vocabularyService: VocabularyService,
                private navigationService: NavigationService,
                private guardService: GuardService) {
    }

    ngOnInit() {
        this.guardService.currentPathSource.subscribe(path => this.setMenuItem(path));
    }

    navigate(page: string): void {
        this.selectedItem = page;
        this.navigationService.navigate(page);
    }

    setMenuItem(path: string): void {
        for (const menuItem of this.menuItems) {
            if (path.includes(menuItem)) {
                this.selectedItem = menuItem;
                break;
            } else if (path === '') {
                this.selectedItem = 'home';
            } else {
                this.selectedItem = '';
            }
        }
    }

    correctPage(): boolean {
        return true;
    }

    selected(item: string) {
        return this.selectedItem === item;
    }
}
