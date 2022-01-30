import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MarvelApiService {
  private API_KEY: string = 'c1da803aef2bfb60c14a6a4417daaafd';
  private HASH: string = '25bdd20d4eee6a7c1f259c268653d116';
  private name: string = '';

  private URL: string =
    this.name &&
    `https://gateway.marvel.com/v1/public/characters?name=${this.name}&ts=1&apikey=${this.API_KEY}&hash=${this.HASH}`;

  constructor(private http: HttpClient) {}

  public setName(newName: string) {
    this.name = newName;
  }
}
