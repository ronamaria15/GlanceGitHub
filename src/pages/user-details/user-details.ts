import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GithubUsers} from  '../../providers/github-users'

import { ReposPage } from '../repos/repos';
import {User} from '../../models/user'
import {Repo} from '../../models/repo'
import { Chart } from 'chart.js'

/**
 * Generated class for the UserDetails page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html',
})


export class UserDetailsPage {
	@ViewChild('doughnutCanvas') doughnutCanvas;
	
	login  : string;
	user : User
	doughnutChart: any;
	repos : Repo[]

  constructor(public navCtrl: NavController, public navParams: NavParams , private githubusers:GithubUsers ) {
	  this.login = navParams.get('login');
	  this.githubusers.loadUserDetails(this.login).subscribe(user =>{
		this.user=user;
		console.log(user);
	});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserDetails');
	/*let languages1 : string[];
	var count1 : number  [] = new Array(4)
	
	this.githubusers.getUserRepos(this.login).subscribe(repos =>{
		this.repos = repos;	
	for(let repo of this.repos){
			let languages1 : string[];
			console.log(repo.language);
			languages1.push(repo.language);
		}		
	});*/
	
	
		
	var languages =["Ruby", "Java", "JavaScript", "C++", "AngularJS", "Python"];
	var counts =[20, 100, 11, 17, 40, 8]
	this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
 
            type: 'doughnut',
            data: {
                labels:languages ,
                datasets: [{
                    label: '# of Votes',
                    data: counts,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]
            }
 
        });
 
 
  }

  goToRepoDetails(login: string) {
    this.navCtrl.push(ReposPage, {login});
  }
}
