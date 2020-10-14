import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {News} from '../models/news';
import {map, tap} from 'rxjs/operators';

export interface NewsApi {
  results?: {
    stories: News[]
  };
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  news: Observable<News[]>;
  loaded: boolean;

  constructor(private http: HttpClient) {
  }

  getNews(): void {
    this.loaded = false;
    this.news =  this.http.get<NewsApi>(`https://newslit-news-search.p.rapidapi.com/news?q=new`, {
      headers: {
        'x-rapidapi-host': 'newslit-news-search.p.rapidapi.com',
        'x-rapidapi-key': 'fab6bee4e1msha1418a1c8e84b48p15e0fejsn4aba2a52582f'
      }
    }).pipe(
      map(it => it.results),
      map(it => it.stories),
      tap(() => this.loaded = true)
    );
  }

  getStory(index: number): News {
    return this.news[index];
  }
}
