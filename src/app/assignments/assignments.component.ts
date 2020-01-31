import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-assignments',
    templateUrl: './assignments.component.html',
    styleUrls: ['./assignments.component.scss']
})
export class AssignmentsComponent implements OnInit {
    private languages: string[] = ['dutch', 'english', 'russian', 'italian', 'french'];

    constructor() {
    }

    ngOnInit() {
    }

}
