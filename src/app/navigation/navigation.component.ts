import {Component, OnInit} from '@angular/core';
import {NavigationService} from './navigation.service';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
    public checkVocabulary = false;
    public leftColumn: string;
    public rightColumn: string;

    constructor(private navigationService: NavigationService) {
    }

    ngOnInit() {
    }

    vocabularyCheck() {
        this.checkVocabulary = !this.checkVocabulary;
        this.navigationService.emitVocabularyCheck(this.checkVocabulary);
    }
}
