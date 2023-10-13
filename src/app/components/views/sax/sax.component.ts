import { Component } from '@angular/core';

import * as Tone from 'tone';

@Component({
  selector: 'app-sax',
  templateUrl: './sax.component.html',
  styleUrls: ['./sax.component.css']
})
export class SaxComponent {

  synth: any;
  synth2: any;
  notes:string[] = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
  octives:number[] = [3,4];

  type: string;

  constructor() {
    this.synth = new Tone.Sampler({
      urls:{
				C3: "358377__mtg__sax-alto-c3.wav",
				"D#3": "358379__mtg__sax-alto-d3.wav",
				"F#3": "358382__mtg__sax-alto-f3.wav",
				A3: "358385__mtg__sax-alto-a3.wav",
				C4: "358422__mtg__sax-alto-c4.wav",
				"D#4": "358391__mtg__sax-alto-d4.wav",
				"F#4": "358394__mtg__sax-alto-f4.wav",
				A4: "358397__mtg__sax-alto-a4.wav",
				C5: "358400__mtg__sax-alto-c5.wav",
				"D#5": "358403__mtg__sax-alto-d5.wav",
				"F#5": "358406__mtg__sax-alto-f5.wav",
				A5: "358409__mtg__sax-alto-a5.wav",
      },
      release: 3,
      baseUrl: "assets/sax-notes/",
    }).toDestination();


    this.synth2 = new Tone.Sampler({
      urls:{
        A0: "A0.mp3",
				C1: "C1.mp3",
				"D#1": "Ds1.mp3",
				"F#1": "Fs1.mp3",
				A1: "A1.mp3",
				C2: "C2.mp3",
				"D#2": "Ds2.mp3",
				"F#2": "Fs2.mp3",
				A2: "A2.mp3",
				C3: "C3.mp3",
				"D#3": "Ds3.mp3",
				"F#3": "Fs3.mp3",
				A3: "A3.mp3",
				C4: "C4.mp3",
				"D#4": "Ds4.mp3",
				"F#4": "Fs4.mp3",
				A4: "A4.mp3",
				C5: "C5.mp3",
				"D#5": "Ds5.mp3",
				"F#5": "Fs5.mp3",
				A5: "A5.mp3",
				C6: "C6.mp3",
				"D#6": "Ds6.mp3",
				"F#6": "Fs6.mp3",
				A6: "A6.mp3",
				C7: "C7.mp3",
				"D#7": "Ds7.mp3",
				"F#7": "Fs7.mp3",
				A7: "A7.mp3",
				C8: "C8.mp3"
      },
      release: 3,
      baseUrl: "https://tonejs.github.io/audio/salamander/",
    }).toDestination();
  }

  play(note:any){
    if(this.type == "Sax"){
     this.synth.triggerAttack(note);
    }else{
      this.synth2.triggerAttack(note);
    }
  }

  release(note:any){
    if(this.type == "Sax"){
      this.synth.triggerRelease(note);
     }else{
       this.synth2.triggerRelease(note);
     }
  }


}
