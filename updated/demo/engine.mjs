export class Snake {
 constructor(){this.reset();}
 reset(){this.head={x:0,y:0,z:0};this.yaw=0;this.pitch=0;this.body=[];this.length=3.5;this.food={x:0,y:0,z:5};this.score=0;this.dead=false;this.distance=0;this.seed=19;}
 random(){this.seed=(this.seed*1664525+1013904223)>>>0;return this.seed/4294967296;}
 step(dt,turn=0,tilt=0,speed=1){if(this.dead)return;this.yaw+=turn*dt*1.9;this.pitch=Math.max(-1.18,Math.min(1.18,this.pitch+tilt*dt*1.5));const d=dt*2.8*speed,old={...this.head};this.head.x+=Math.sin(this.yaw)*Math.cos(this.pitch)*d;this.head.y+=Math.sin(this.pitch)*d;this.head.z+=Math.cos(this.yaw)*Math.cos(this.pitch)*d;this.distance+=d;this.body.unshift(old);let kept=0,path=0,prev=this.head;for(const point of this.body){path+=Math.hypot(point.x-prev.x,point.y-prev.y,point.z-prev.z);kept++;prev=point;if(path>=this.length)break;}this.body.length=kept;
 if(Math.max(Math.abs(this.head.x),Math.abs(this.head.y),Math.abs(this.head.z))>10)this.dead=true;
 if(this.body.slice(28).some(p=>Math.hypot(p.x-this.head.x,p.y-this.head.y,p.z-this.head.z)<.28))this.dead=true;
 if(Math.hypot(this.food.x-this.head.x,this.food.y-this.head.y,this.food.z-this.head.z)<.65){this.score++;this.length+=1.4;this.food={x:(this.random()-.5)*14,y:(this.random()-.5)*12,z:(this.random()-.5)*14};}
 }
}
