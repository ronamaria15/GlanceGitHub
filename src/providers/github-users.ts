import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { User } from '../models/user';
import { Repo } from '../models/repo';

	
/*
  Generated class for the GithubUsers provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GithubUsers {

githubApiUrl = 'https://api.github.com';


  constructor(public http: Http) {
    console.log('Hello GithubUsers Provider');
  }

  load(): Observable<User []>{
	  
	  return this.http.get(`${this.githubApiUrl}/users?page=3`)
	  .map(res=> <User []>res.json());
  }
  
  loadUserDetails(login :string) : Observable<User >{
	  return this.http.get(`${this.githubApiUrl}/users/${login}`)
	  .map(res=> <User>res.json())
  }
  
  searchUsers( searchString : string)  : Observable<User []>{
	  return this.http.get(`${this.githubApiUrl}/search/users?q=${searchString}&access_token=143a38291677ea1bb4430655788d621f8859040c`)
	  .map(res => <User []>(res.json().items))
  }
  
  getUserRepos( login : string) : Observable<Repo []>{
	  return this.http.get(`${this.githubApiUrl}/users/${login}/repos`)
	  .map(res=> <Repo []>(res.json()))
  }
  
}
