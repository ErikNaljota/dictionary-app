import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-assignments',
    templateUrl: './assignments.component.html',
    styleUrls: ['./assignments.component.scss']
})
export class AssignmentsComponent implements OnInit {
    private languages: string[] = ['dutch', 'english', 'russian', 'italian', 'french'];
    private assignments: string[] = ['Formal/informal', 'Family', 'Work', 'Shopping', 'Top 100 words', 'Top 500 words'];
    private selectLanguage: boolean = true;
    private selectAssignment: boolean = false;
    private assignmentPage: boolean = false;
    private breadCrumbs: string = 'languages/';

    constructor() {
    }

    ngOnInit() {
    }

    selectLanguageAssignments() {
        this.selectLanguage = false;
        this.selectAssignment = true;
        this.breadCrumbs += 'dutch/';
    }

    doAssignment() {
        this.selectAssignment = false;
        this.assignmentPage = true;
        this.breadCrumbs += 'formal and informal';
    }

    reset() {
        this.selectLanguage = true;
        this.selectAssignment = false;
        this.assignmentPage = false;
        this.breadCrumbs = 'languages/';
    }
}
