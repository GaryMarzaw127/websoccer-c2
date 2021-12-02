
import { Injectable } from "@angular/core";
import { SEASON_SCHEDULE,TEAMS } from "./ScheduleData";

@Injectable({ 
    providedIn: 'root',
})

export class SoccerService {
    getScheduleAsync(){
        return Promise.resolve(SEASON_SCHEDULE);
    }

    getSchedule(){
        return SEASON_SCHEDULE;
    }

    getTeamsAsync(){
        return Promise.resolve(TEAMS);
    }

    getTeams(){
        return TEAMS;
    }

    private ComputeRankings(){
        // compute rangking dari schedule
    }
}