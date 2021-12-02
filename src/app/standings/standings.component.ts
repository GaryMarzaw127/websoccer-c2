// import modul yang dibutuhkan, nama modul file
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

//interface
import { Team } from 'src/interface/team';
import { Rankings } from 'src/interface/rankings';
import { Schedule } from 'src/interface/schedule';
import { SoccerService } from '../service/Soccer.Service';
import { TEMPORARY_NAME } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css'],
  //providers:[Title,SoccerService]
})

export class StandingsComponent implements OnInit {
  public LeagueName : string;
  public UsingAsync : boolean = false;
  public MyTeams: Team[];
  public Myschedule : Schedule[];
  public Standings : Rankings[];

  constructor(private _titleService :Title,private _soccerService:SoccerService) {
    this._titleService.setTitle('C2 Sports')
    this.LeagueName = 'League Inggris';
    this.MyTeams=[];
    this.Myschedule=[];
    this.Standings=[];
    this.getSchedule();
    this.getTeams();
    this.computeRankings();
    
  }
  
  ngOnInit(): void {
  }

  
  private getSchedule(){
    if (this.UsingAsync){
      let xx = this._soccerService.getScheduleAsync();
        xx.then((Schedules:Schedule[])=> this.Myschedule = Schedules); 
    }
    else {
      this.Myschedule = this._soccerService.getSchedule();
    }
  }

  getTeams(){
    if(this.UsingAsync){
      let xx = this._soccerService.getTeamsAsync();
        xx.then((Teams:Team[])=>this.MyTeams=Teams);
    }
    else{
      this.MyTeams = this._soccerService.getTeams();
    }

  }


  public computeRankings(){
    var curDate : Date = new Date();
    var TeamAt : number;
    this.Standings= [];
    this.Myschedule.forEach(element=>{
      if(element.PlayingDate < curDate && element.HomeScore>=0){
        TeamAt = this.FindTeam(element.HomeTeam);
        if(TeamAt < 0){
          this.Standings.push({
            TeamName:element.HomeTeam,
            GamesPlayed:0, Wins:0, Ties:0,
            GoalsFor:0, GoalsAgaints:0
          })
          TeamAt = this.Standings.length-1;
        }
        this.UpdCurrentArrow(element,TeamAt,'H');
      }
    });


  }

  

  private UpdCurrentArrow(element:Schedule, TeamAt:number, HomeAway:String){
    this.Standings[TeamAt].GamesPlayed++;
    if(HomeAway=='H'){
      this.Standings[TeamAt].GoalsFor+= element.HomeScore;
      this.Standings[TeamAt].GoalsAgaints+= element.AwayScore;
      // menang win
      if(element.HomeScore>element.AwayScore){
        this.Standings[TeamAt].Wins++;
      }
    }
    if (HomeAway=='A'){
      this.Standings[TeamAt].GoalsFor+= element.AwayScore;
      this.Standings[TeamAt].GoalsAgaints+= element.HomeScore;
      if (element.AwayScore>element.HomeScore){
        this.Standings[TeamAt].Wins++;
      }
    }
    if (element.HomeScore==element.AwayScore){
      this.Standings[TeamAt].Ties++;
    }
  }

  private FindTeam(TeamName:string):number{
    var FoundAt: number = -1;
    for (var _x=0; _x<this.Standings.length; _x++){
      if(this.Standings[_x].TeamName==TeamName){
        return _x;
      }
    } 
    
    return FoundAt;
  }

}
