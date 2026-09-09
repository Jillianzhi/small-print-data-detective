export const trend = Object.freeze([50,51,50,52,53,54]);
// Fictional population: 20 club members (90 minutes), 80 others (30 minutes).
export const population = Object.freeze(Array.from({length:100},(_,i)=>Object.freeze({id:i+1,club:i<20,minutes:i<20?90:30})));
// Factorial construction gives zero within-weather covariance, positive pooled covariance.
export const days = Object.freeze([0,1].flatMap(w=>[-1,0,1].flatMap(a=>[-1,0,1].map(b=>Object.freeze({weather:w?'Warm':'Cool',drinks:20+60*w+10*a,visits:100+200*w+20*b})))));
export const mean = xs => xs.length ? xs.reduce((a,b)=>a+b,0)/xs.length : 0;
export function sample(method,size,seed=1){
 if(!['club','random'].includes(method)||![5,10,20].includes(size))throw Error('Invalid sample settings');
 let n=seed>>>0;const rng=()=>{n=(Math.imul(1664525,n)+1013904223)>>>0;return n/4294967296;};
 const pool=population.filter(x=>method!=='club'||x.club);
 for(let i=pool.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]];}
 return pool.slice(0,size);
}
export function correlation(rows){
 const mx=mean(rows.map(r=>r.drinks)),my=mean(rows.map(r=>r.visits));
 const cov=rows.reduce((s,r)=>s+(r.drinks-mx)*(r.visits-my),0);
 const den=Math.sqrt(rows.reduce((s,r)=>s+(r.drinks-mx)**2,0)*rows.reduce((s,r)=>s+(r.visits-my)**2,0));
 return den?cov/den:0;
}
export function plotY(value,min,max,height=160){if(max<=min||value<min||value>max)throw Error('Invalid axis');return height*(1-(value-min)/(max-min));}
export const change=()=>({absolute:trend.at(-1)-trend[0],percent:100*(trend.at(-1)-trend[0])/trend[0]});
export function assess(section,value){
 const answers={axis:'same',sample:'coverage',cause:'weather'};
 return value===answers[section];
}
