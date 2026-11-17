import assert from 'node:assert/strict';import {Snake} from './demo/engine.mjs';
const s=new Snake();for(let i=0;i<110;i++)s.step(1/60);assert.equal(s.score,1);assert(s.length>3.5);assert(!s.dead);
const first={...s.food};s.reset();for(let i=0;i<110;i++)s.step(1/60);assert.deepEqual(s.food,first);
s.reset();s.step(.1,1,1);assert(s.head.x>0&&s.head.y>0);
s.reset();s.head.z=9.99;s.step(1/60);assert(s.dead);
s.reset();s.body=Array.from({length:35},()=>({x:0,y:0,z:.05}));s.step(1/60);assert(s.dead);
s.reset();assert.equal(s.score,0);assert.equal(s.body.length,0);assert(!s.dead);
console.log('6 focused simulation checks passed: pickup/growth, deterministic food, 3D steering, boundary/self collisions and reset.');
