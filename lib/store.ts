export type NodeRecord={id:string;name:string;location:string;fill:number;capacity:number;status:'online'|'offline';collectedToday:number;lastSeen:string;trend:number;lat:number;lng:number}
export type WasteEvent={id:string;nodeId:string;material:string;massKg:number;confidence:number;source:string;createdAt:string;destination:string}
type Store={nodes:NodeRecord[];events:WasteEvent[];activity:{id:string;type:string;message:string;time:string}[]}
const seeded:Store={nodes:[
{id:'tt-04',name:'Surulere Node 04',location:'Surulere Canal',fill:82,capacity:100,status:'online',collectedToday:18.4,lastSeen:'now',trend:12,lat:6.503,lng:3.349},
{id:'tt-makoko-a',name:'Makoko Node A',location:'Makoko Waterfront',fill:64,capacity:100,status:'online',collectedToday:31.2,lastSeen:'18s',trend:8,lat:6.489,lng:3.389},
{id:'tt-lekki-02',name:'Lekki Channel 2',location:'Lekki Lagoon Edge',fill:31,capacity:100,status:'online',collectedToday:22.7,lastSeen:'31s',trend:-2,lat:6.454,lng:3.543},
{id:'tt-apapa-01',name:'Apapa Drain 01',location:'Apapa Industrial',fill:48,capacity:100,status:'online',collectedToday:25.9,lastSeen:'44s',trend:5,lat:6.449,lng:3.359},
{id:'tt-ikorodu-03',name:'Ikorodu Node 03',location:'Ikorodu Creek',fill:57,capacity:100,status:'online',collectedToday:19.8,lastSeen:'1m',trend:4,lat:6.619,lng:3.510},
{id:'tt-06',name:'Community Node 06',location:'Badagry Creek',fill:19,capacity:100,status:'offline',collectedToday:8.6,lastSeen:'12m',trend:0,lat:6.416,lng:2.889}],events:[
{id:'ev-1',nodeId:'tt-04',material:'LDPE',massKg:7.46,confidence:.94,source:'tide-trap',createdAt:new Date(Date.now()-3600000).toISOString(),destination:'Micro-Factory #2'},
{id:'ev-2',nodeId:'tt-makoko-a',material:'PET',massKg:9.2,confidence:.89,source:'tide-trap',createdAt:new Date(Date.now()-7200000).toISOString(),destination:'Hub Alapere'},
{id:'ev-3',nodeId:'tt-apapa-01',material:'HDPE',massKg:6.8,confidence:.91,source:'tide-trap',createdAt:new Date(Date.now()-10800000).toISOString(),destination:'Hub Alapere'}],activity:[]}
const g=globalThis as typeof globalThis & {_wastelensStore?:Store}
if(!g._wastelensStore)g._wastelensStore=seeded
export const store=()=>g._wastelensStore!
export function addEvent(event:WasteEvent){store().events.unshift(event);store().activity.unshift({id:event.id,type:'capture',message:`${event.massKg.toFixed(2)}kg ${event.material} captured at ${event.nodeId}`,time:new Date().toISOString()});return event}