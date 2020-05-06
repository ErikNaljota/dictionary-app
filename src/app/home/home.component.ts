import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../dictionary/dictionary.component.scss']
})
export class HomeComponent implements OnInit {
    private files: string[][] = [
        [
            'Past and present',
            'We discussed past and present tenses during the lesson. This file has the examples we came up with.',
            '2/3/2020'
        ],
        [
            'Survival Dutch',
            'Basic phrases that may come in handy in everyday communications.',
            '7/2/2020'
        ],
        [
            'Family and friends',
            'Words and phrases regarding family and friends.',
            '18/02/2020'
        ],
        [
            'Verbs',
            'Test word length 12312312',
            '0/0/2020'
        ]
    ];

  constructor() { }

  ngOnInit() {
  }

}
