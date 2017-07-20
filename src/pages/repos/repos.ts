import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { GithubUsers } from '../../providers/github-users';
import { Repo } from '../../models/repo';

@Component({
  selector: 'page-repos',
  templateUrl: 'repos.html'
})
export class ReposPage {

	login: string
	repos : Repo[]
	
  constructor(public navCtrl: NavController , public navParams: NavParams , private githubusers:GithubUsers) {
	  this.login = navParams.get('login');
	  this.githubusers.getUserRepos(this.login).subscribe(repos =>{
		this.repos=repos;
		console.log(repos);
	});
  }

  ionViewDidLoad() {
    console.log('Hello Repos Page');
  }
}