import { Schedule } from "src/interface/schedule";
import { Team } from "src/interface/team";

export const SEASON_SCHEDULE:Schedule [] = [
    {id: 1, PlayingDate: new Date(2021,8,10), HomeTeam: 'Persija', 
    AwayTeam: 'Persib', HomeScore: 3, AwayScore: 4, RefName: 'Joko', 
    notes:'Pertandingan Overtime'},
    {id: 2, PlayingDate: new Date(2021,8,11), HomeTeam: 'Liverpool', 
    AwayTeam: 'Mancester', HomeScore: 1, AwayScore: 1, RefName: 'Jason', 
    notes:'Selesainya Pertandingan tanpa ampun'},
    {id: 3, PlayingDate: new Date(2021,8,12), HomeTeam: 'MU', 
    AwayTeam: 'Chelsea', HomeScore: 10, AwayScore: 10, RefName: 'John', 
    notes:'Ampun Banggg!!!'},
    {id: 4, PlayingDate: new Date(2021,8,13), HomeTeam: 'Juventus', 
    AwayTeam: 'PSG', HomeScore: 5, AwayScore: 4, RefName: 'Ty', 
    notes:'Pertandingan Selesai'},
]

export const TEAMS: Team [] = [
    {id:1, name: 'MU', type: 'over 30'},
    {id:2, name: 'PSG', type: 'over 30'},
    {id:3, name: 'JUVE', type: 'over 30'},
    {id:4, name: 'RM', type: 'over 30'},
]