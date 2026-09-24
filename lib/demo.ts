export type Role='admin'|'operator'|'analyst'
export type Node={id:string;name:string;location:string;fill:number;capacity:number;status:string;collectedToday:number;lastSeen:string;trend:number;lat:number;lng:number}
export type Detection={label:string;confidence:number;material:string;massKg:number;action:string}
export type Dashboard={metrics:{waste:number;yield:number;value:number;capacity:number};nodes:Node[];detections:Detection[];history:{date:string;kg:number;collections:number}[];hotspots:{name:string;score:number;kg:number}[];recommendations:string[];routes:{material:string;destination:string;output:string;loadKg:number}[]}

const seedNodes:Node[]=[
{id:'tt-04',name:'Surulere Node 04',location:'Surulere Canal',fill:82,capacity:92,status:'online',collectedToday:48.6,lastSeen:'12 sec ago',trend:8,lat:6.496,lng:3.349},
{id:'tt-makoko',name:'Makoko Node A',location:'Makoko Waterfront',fill:71,capacity:84,status:'online',collectedToday:36.2,lastSeen:'18 sec ago',trend:5,lat:6.503,lng:3.386},
{id:'tt-lekki',name:'Lekki Channel 2',location:'Lekki Lagoon Edge',fill:64,capacity:76,status:'online',collectedToday:29.8,lastSeen:'21 sec ago',trend:3,lat:6.451,lng:3.533},
{id:'tt-apapa',name:'Apapa Drain 01',location:'Apapa Industrial',fill:59,capacity:70,status:'online',collectedToday:25.4,lastSeen:'31 sec ago',trend:2,lat:6.45,lng:3.36},
{id:'tt-ikorodu',name:'Ikorodu Node 03',location:'Ikorodu Creek',fill:47,capacity:61,status:'online',collectedToday:18.7,lastSeen:'42 sec ago',trend:-1,lat:6.619,lng:3.51},
{id:'tt-badagry',name:'Community Node 06',location:'Badagry Creek',fill:38,capacity:52,status:'offline',collectedToday:12.4,lastSeen:'4 min ago',trend:-3,lat:6.415,lng:2.89}
]
let state:Dashboard|null=null
const KEY='wastelens-demo-state-v2'
function makeHistory(){return Array.from({length:14},(_,i)=>{const d=new Date();d.setDate(d.getDate()-(13-i));return{date:d.toISOString().slice(0,10),kg:Math.round((112+i*2.7+Math.sin(i)*8)*10)/10,collections:3+(i%4)}})}
function build():Dashboard{
 const now=Date.now()
 const nodes=seedNodes.map((n,i)=>({...n,fill:Math.max(25,Math.min(96,n.fill+Math.round(Math.sin(now/9000+i)*2))),lastSeen:n.status==='online'?(8+i*3)+' sec ago':n.lastSeen}))
 const waste=nodes.reduce((a,n)=>a+n.collectedToday,0)
 const hotspots=nodes.map(n=>({name:n.name,score:Math.round(Math.min(98,n.fill*.72+n.trend*1.9+7)),kg:Math.round((n.collectedToday*(1+n.trend/100)*1.18)*10)/10})).sort((a,b)=>b.score-a.score)
 return {metrics:{waste,yield:Math.round(waste*4),value:Math.round(waste*450),capacity:Math.round(nodes.reduce((a,n)=>a+n.fill,0)/nodes.length)},nodes,detections:[{label:'Flexible packaging',confidence:.962,material:'LDPE',massKg:3.84,action:'Route to Micro-Factory #2'},{label:'Bottle fragment',confidence:.914,material:'PET',massKg:2.16,action:'Route to Polymer Recovery Hub'},{label:'Rigid container',confidence:.887,material:'HDPE',massKg:1.46,action:'Route to ReForm Plastics'}],history:makeHistory(),hotspots,recommendations:[hotspots[0].name+' is approaching its collection threshold; dispatch a recovery crew in the next operating window.','LDPE recovery yield is trending upward; prioritize flexible-film separation at the nearest processing route.','Makoko and Surulere streams show the strongest combined recovery value this cycle.'],routes:[{material:'LDPE',destination:'Micro-Factory #2',output:'Eco-tiles',loadKg:28.4},{material:'PET',destination:'Polymer Recovery Hub',output:'Pellets',loadKg:19.7},{material:'HDPE',destination:'ReForm Plastics',output:'Injection feedstock',loadKg:13.2}]}
}
export function getDemoDashboard():Dashboard{if(!state){try{const saved=localStorage.getItem(KEY);state=saved?JSON.parse(saved):build()}catch{state=build()}}return state}
export function addDemoEvent(d:Detection[]){const s:Dashboard=getDemoDashboard();const mass=d.reduce((a,x)=>a+x.massKg,0);s.metrics.waste+=mass;s.metrics.yield=Math.round(s.metrics.waste*4);s.metrics.value=Math.round(s.metrics.waste*450);s.nodes=s.nodes.map((n,i)=>i===0?{...n,collectedToday:Math.round((n.collectedToday+mass)*10)/10,fill:Math.min(96,n.fill+Math.round(mass/3))}:n);s.detections=d;try{localStorage.setItem(KEY,JSON.stringify(s))}catch{}return s}
export function demoDispatch(){return 'Dispatch queued: Surulere Node 04 → Micro-Factory #2. Mock SMS provider acknowledged.'}
export function demoCsv(){const h:Dashboard=getDemoDashboard();return 'date,kg,collections\n'+h.map(x=>x.date+','+x.kg+','+x.collections).join('\n')}
