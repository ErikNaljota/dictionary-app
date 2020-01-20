import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public checkVocabulary: boolean = true;
  public leftColumn: string;
  public rightColumn: string;

  constructor() {
  }

  ngOnInit() {
  }
}
