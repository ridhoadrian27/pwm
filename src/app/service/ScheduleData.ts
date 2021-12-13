import { Schedule } from "../Interface/schedule";
import { Team } from "../Interface/team";

export const SEASON_SCHEDULE:Schedule[] = [

    {id:1,PlayingDate:new Date(2021,8,10),HomeTeam:'Persija',
    AwayTeam:'Persipon',HomeScore:3,AwayScore:2,
    RefName:'ridho',notes:'Overtime'},
    {id:2,PlayingDate:new Date(2021,8,12),HomeTeam:'RRQ',
    AwayTeam:'PERSIPON',HomeScore:3,AwayScore:2,
    RefName:'rido',notes:'Overtime'},
    {id:3,PlayingDate:new Date(2021,8,10),HomeTeam:'RRQ',
    AwayTeam:'Bali United',HomeScore:3,AwayScore:2,
    RefName:'ridoo',notes:'Overtime'},
    {id:4,PlayingDate:new Date(2021,8,10),HomeTeam:'evos',
    AwayTeam:'Black International',HomeScore:3,AwayScore:2,
    RefName:'ridhooo',notes:'Overtime'},
    {id:5,PlayingDate:new Date(2021,8,10),HomeTeam:'Navi',
    AwayTeam:'Todak',HomeScore:3,AwayScore:2,
    RefName:'ridoooo',notes:'Navi agak lag'},
]
export const Teams:Team[]=[
    {id:1,name:'Persija',type:'Klub Lokal'},
    {id:2,name:'Persipon',type:'Klub Lokal'},
    {id:3,name:'Bali United',type:'Klub Lokal'},
    {id:4,name:'evos',type:'Klub International'},
    {id:5,name:'RRQ',type:'Klub International'},
    {id:6,name:'Todak',type:'Klub Lokal'},
    {id:7,name:'Navi',type:'Klub Lokal'},
]