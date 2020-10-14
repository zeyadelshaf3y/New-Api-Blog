import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../services/news.service';
import {animate, group, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
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
export class NewsListComponent implements OnInit {

  constructor(public news: NewsService) { }

  ngOnInit(): void {
    this.news.getNews();
  }


}
