import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {News} from '../../models/news';
import {animate, group, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss'],
  animations: [
    trigger('fadeHide', [
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'scale(0.96)'
        }), group([
          animate(100, style({
            opacity: 1
          })), animate(100, style({
            transform: 'scale(1)'
          }))
        ])
      ])
    ])
  ]
})
export class NewsDetailsComponent implements OnInit {

  story: News = {
    excerpt: '',
    title: ''
  };
  constructor(private router: Router) {
    this.story = this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit(): void {
  }

}
