import type { RaceEvent } from './race';

export class AudioSystem {
  context: AudioContext | null = null;
  master: GainNode | null = null;
  engine: OscillatorNode | null = null;
  engineGain: GainNode | null = null;
  muted = false;
  music = true;
  beat = 0;
  musicTime = 0;

  async start() {
    if (!this.context) {
      this.context = new AudioContext(); this.master = this.context.createGain(); this.master.gain.value = this.muted ? 0 : .28; this.master.connect(this.context.destination);
      this.engine = this.context.createOscillator(); this.engine.type = 'sawtooth'; this.engineGain = this.context.createGain(); this.engineGain.gain.value = 0;
      const filter = this.context.createBiquadFilter(); filter.type = 'lowpass'; filter.frequency.value = 280;
      this.engine.connect(filter); filter.connect(this.engineGain); this.engineGain.connect(this.master); this.engine.start();
    }
    await this.context.resume();
  }

  setMuted(value: boolean) { this.muted = value; if (this.context && this.master) this.master.gain.setTargetAtTime(value ? 0 : .28, this.context.currentTime, .05); }

  tone(frequency: number, duration: number, type: OscillatorType = 'square', volume = .2, endFrequency?: number) {
    if (!this.context || !this.master) return;
    const osc = this.context.createOscillator(), gain = this.context.createGain(), now = this.context.currentTime;
    osc.type = type; osc.frequency.setValueAtTime(frequency,now); if(endFrequency) osc.frequency.exponentialRampToValueAtTime(endFrequency,now+duration);
    gain.gain.setValueAtTime(volume,now);gain.gain.exponentialRampToValueAtTime(.001,now+duration);osc.connect(gain);gain.connect(this.master);osc.start();osc.stop(now+duration);
    osc.onended=()=>{osc.disconnect();gain.disconnect();};
  }

  noise(duration = .3) {
    if (!this.context || !this.master) return;
    const buffer=this.context.createBuffer(1,Math.round(this.context.sampleRate*duration),this.context.sampleRate), data=buffer.getChannelData(0);
    for(let i=0;i<data.length;i++)data[i]=(Math.random()*2-1)*(1-i/data.length);
    const source=this.context.createBufferSource(),gain=this.context.createGain();source.buffer=buffer;gain.gain.value=.35;source.connect(gain);gain.connect(this.master);source.start();source.onended=()=>{source.disconnect();gain.disconnect();};
  }

  event(event:RaceEvent){
    if(!event.player&&event.kind!=='hit')return;
    if(event.kind==='boost')this.tone(180,.4,'sawtooth',.17,650);
    if(event.kind==='pickup'){this.tone(700,.12,'sine',.3);setTimeout(()=>this.tone(1050,.18,'sine',.25),90);}
    if(event.kind==='fire')this.tone(500,.2,'sawtooth',.25,70);
    if(event.kind==='mine')this.tone(250,.25,'square',.15,100);
    if(event.kind==='hit'||event.kind==='wall'||event.kind==='land')this.noise(event.kind==='hit'?.4:.12);
    if(event.kind==='lap'||event.kind==='finish'){this.tone(523,.2,'square',.15);setTimeout(()=>this.tone(784,.3,'square',.15),180);}
    if(event.kind==='marker')this.tone(event.text?.includes('MISSED')?120:820,.18,'triangle',.16,event.text?.includes('MISSED')?70:1100);
  }

  update(speed:number,boost:boolean,active:boolean,dt:number){
    if(!this.context||!this.engine||!this.engineGain)return;
    this.engine.frequency.setTargetAtTime(35+speed*.825+(boost?35:0),this.context.currentTime,.07);
    this.engineGain.gain.setTargetAtTime(active?.025+speed*.00025:0,this.context.currentTime,.07);
    if(!active||!this.music)return;
    this.musicTime-=dt;
    if(this.musicTime<=0){this.musicTime=.24;const bass=[55,55,65.4,55,73.4,73.4,65.4,49];this.tone(bass[Math.floor(this.beat/2)%8],.2,'triangle',.2);if(this.beat%4===0)this.tone(110,.13,'sine',.35,28);if(this.beat%4===2)this.noise(.045);if(this.beat%2===1)this.tone([440,523,659,784][Math.floor(this.beat/4)%4],.1,'triangle',.06);this.beat++;}
  }
}
