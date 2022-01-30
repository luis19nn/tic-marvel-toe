import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root',
})
export class MarvelApiService {
  private API_KEY: string = 'c1da803aef2bfb60c14a6a4417daaafd';
  private HASH: string = '25bdd20d4eee6a7c1f259c268653d116';
  private URL: string = '';

  private name: string = '';

  constructor(private http: HttpClient) {}

  public setName(newName: string) {
    this.name = newName;

    this.setURL(
      `https://gateway.marvel.com/v1/public/characters?name=${this.name}&ts=1&apikey=${this.API_KEY}&hash=${this.HASH}`
    );
  }

  public setURL(newURL: string) {
    this.URL = newURL;
  }

  get apiGetCharacter(): Observable<any> {
    return this.http.get<any>(this.URL).pipe(map((res) => res.data.results[0]));
  }
}
