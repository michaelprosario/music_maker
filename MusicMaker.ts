var Util = require('jsmidgen').Util;


export var beat = 128;

export class DrumNotes{
	static BassDrum1: number = 35;
	static SideStick: number = 37;
	static SnareDrum: number = 38;
	static HandClap: number = 39;
	static ElectricSnare: number = 40;
	static LowFloorTom: number = 41;
	static HighFloorTom: number = 43;
	static LowTom: number = 45;
	static LowMidTom: number = 47;
	static HiMidTom: number = 48;
	static Tambourine: number = 54;
	static ClosedHighHat: number = 42;
	static OpenHighHat: number = 46;
	static Bongo1: number = 60;
	static Bongo2: number = 61;
	static Congo1: number = 62;
	static Congo2: number = 63;
	static Congo3: number = 64;
	static Timbale1: number = 65;
	static Timbale2: number = 66;
	static CowBell: number = 56;
} 

export class Instruments{
    static AcousticGrandPiano : number = 0;
    static BrightAcousticPiano : number = 1;
    static ElectricGrandPiano : number = 2;
    static Honk3tonkPiano : number = 3;
    static ElectricPiano1 : number = 4;
    static ElectricPiano2 : number = 5;
    static Harpsichord : number = 6;
    static Clavi : number = 7;
    static Celesta : number = 8;
    static Glockenspiel : number = 9;
    static MusicBox : number = 10;
    static Vibraphone : number = 11;
    static Marimba : number = 12;
    static X13lophone : number = 13;
    static TubularBells : number = 14;
    static Dulcimer : number = 15;
    static DrawbarOrgan : number = 16;
    static PercussiveOrgan : number = 17;
    static RockOrgan : number = 18;
    static ChurchOrgan : number = 19;
    static ReedOrgan : number = 20;
    static Accordion : number = 21;
    static Harmonica : number = 22;
    static TangoAccordion : number = 23;
    static AcousticGuitarN24lon : number = 24;
    static AcousticGuitarSteel : number = 25;
    static ElectricGuitarJazz : number = 26;
    static ElectricGuitarClean : number = 27;
    static ElectricGuitarMuted : number = 28;
    static OverdrivenGuitar : number = 29;
    static DistortionGuitar : number = 30;
    static Guitarharmonics : number = 31;
    static AcousticBass : number = 32;
    static ElectricBassfinger : number = 33;
    static ElectricBasspick : number = 34;
    static FretlessBass : number = 35;
    static SlapBass1 : number = 36;
    static SlapBass2 : number = 37;
    static S38nthBass1 : number = 38;
    static S39nthBass2 : number = 39;
    static Violin : number = 40;
    static Viola : number = 41;
    static Cello : number = 42;
    static Contrabass : number = 43;
    static TremoloStrings : number = 44;
    static PizzicatoStrings : number = 45;
    static OrchestralHarp : number = 46;
    static Timpani : number = 47;
    static StringEnsemble1 : number = 48;
    static StringEnsemble2 : number = 49;
    static S50nthStrings1 : number = 50;
    static S51nthStrings2 : number = 51;
    static ChoirAahs : number = 52;
    static VoiceOohs : number = 53;
    static S54nthVoice : number = 54;
    static OrchestraHit : number = 55;
    static Trumpet : number = 56;
    static Trombone : number = 57;
    static Tuba : number = 58;
    static MutedTrumpet : number = 59;
    static FrenchHorn : number = 60;
    static BrassSection : number = 61;
    static S62nthBrass1 : number = 62;
    static S63nthBrass2 : number = 63;
    static SopranoSax : number = 64;
    static AltoSax : number = 65;
    static TenorSax : number = 66;
    static BaritoneSax : number = 67;
    static Oboe : number = 68;
    static EnglishHorn : number = 69;
    static Bassoon : number = 70;
    static Clarinet : number = 71;
    static Piccolo : number = 72;
    static Flute : number = 73;
    static Recorder : number = 74;
    static PanFlute : number = 75;
    static BlownBottle : number = 76;
    static Shakuhachi : number = 77;
    static Whistle : number = 78;
    static Ocarina : number = 79;
    static Lead1square : number = 80;
    static Lead2sawtooth : number = 81;
    static Lead3calliope : number = 82;
    static Lead4chiff : number = 83;
    static Lead5charang : number = 84;
    static Lead6voice : number = 85;
    static Lead7fifths : number = 86;
    static Lead8BassLead : number = 87;
    static Pad1newage : number = 88;
    static Pad2warm : number = 89;
    static Pad3pol90s90nth : number = 90;
    static Pad4choir : number = 91;
    static Pad5bowed : number = 92;
    static Pad6metallic : number = 93;
    static Pad7halo : number = 94;
    static Pad8sweep : number = 95;
    static FX1rain : number = 96;
    static FX2soundtrack : number = 97;
    static FX3cr98stal : number = 98;
    static FX4atmosphere : number = 99;
    static FX5brightness : number = 100;
    static FX6goblins : number = 101;
    static FX7echoes : number = 102;
    static FX8scifi : number = 103;
    static Sitar : number = 104;
    static Banjo : number = 105;
    static Shamisen : number = 106;
    static Koto : number = 107;
    static Kalimba : number = 108;
    static Bagpipe : number = 109;
    static Fiddle : number = 110;
    static Shanai : number = 111;
    static TinkleBell : number = 112;
    static Agogo : number = 113;
    static SteelDrums : number = 114;
    static Woodblock : number = 115;
    static TaikoDrum : number = 116;
    static MelodicTom : number = 117;
    static S118nthDrum : number = 118;
    static ReverseC119mbal : number = 119;
    static GuitarFretNoise : number = 120;
    static BreathNoise : number = 121;
    static Seashore : number = 122;
    static BirdTweet : number = 123;
    static TelephoneRing : number = 124;
    static Helicopter : number = 125;
    static Applause : number = 126;
    static Gunshot : number = 127;

}

export function GetNoteNumber(aNote){
	if(typeof(aNote)=='number'){
		return aNote
	}else{
		var note = Util.midiPitchFromNote(aNote);
		note = parseInt(note);
		return note;
	}

}

export enum ChordType{
    Major,Minor, M7, Major7, Minor7 
}

export class ChordChange{
    public Chord;
    public Length: number;

    constructor(chord,length:number){
        this.Chord = chord;
        this.Length = length;
    }
}

export function MakeChord(root,type: ChordType){

	var intRoot = GetNoteNumber(root);
    var aChord = new Array();

    if(type == ChordType.Major){
        aChord.push(intRoot);
        aChord.push(intRoot+4);
        aChord.push(intRoot+7);
    }
    else if(type == ChordType.Minor)
    {
        aChord.push(intRoot);
        aChord.push(intRoot+3);
        aChord.push(intRoot+7);

    }
    else if(type == ChordType.Major7)
    {
        aChord.push(intRoot);
        aChord.push(intRoot+4);
        aChord.push(intRoot+7);
        aChord.push(intRoot+11);
    }
    else if(type == ChordType.M7)
    {
        aChord.push(intRoot);
        aChord.push(intRoot+4);
        aChord.push(intRoot+7);
        aChord.push(intRoot+10);
    }        
    else if(type == ChordType.Minor7)
    {
        aChord.push(intRoot);
        aChord.push(intRoot+3);
        aChord.push(intRoot+7);
        aChord.push(intRoot+10);
    }    
    else
    {
        throw new Error("Help...Handle new chord type");
    }
	
	return aChord;
}

export function SelectRandom(myArray){
	var rand = myArray[Math.floor(Math.random() * myArray.length)];
	return rand;
}

export function Repeat(count: number, functionToRepeat){
    var k;

    for(k=0; k<count; k++){
        functionToRepeat();
    }
}

export function AddRhythmPattern(track,strPattern: string, note: number){
  var i=0;
  for(i=0; i<strPattern.length; i++){

    var currentChar = strPattern[i];
    if (currentChar == "x"){
      track.addNote(9,note, beat/4)
    }
    else if (currentChar != "|")
    {
      track.addNote(9,0,beat/4,0);
    }
    
  }
}

export enum ScaleType{
    Major, Minor, MinorPentatonic, MajorPentatonic, Blues, Spanish
}

export function MakeScale(note, type: ScaleType, octaves: number){
	var intStartNote = GetNoteNumber(note);

    var scale = new Array();

    if(type == ScaleType.Major){

        var currentNote = intStartNote;
        scale.push(currentNote);

        var k;
        for(k=0; k<octaves; k++){

            currentNote = currentNote + 2;
            scale.push(currentNote);

            currentNote = currentNote + 2;
            scale.push(currentNote);

            currentNote = currentNote + 1;
            scale.push(currentNote);
            
            currentNote = currentNote + 2;
            scale.push(currentNote);

            currentNote = currentNote + 2;
            scale.push(currentNote);

            currentNote = currentNote + 2;
            scale.push(currentNote);

            currentNote = currentNote + 1;
            scale.push(currentNote);
        }
 
    }
    else if(type == ScaleType.Minor){
        var currentNote = intStartNote;
        scale.push(currentNote);

        var k;
        for(k=0; k<octaves; k++){

            currentNote = currentNote + 2;
            scale.push(currentNote);

            currentNote = currentNote + 1;
            scale.push(currentNote);

            currentNote = currentNote + 2;
            scale.push(currentNote);
            
            currentNote = currentNote + 2;
            scale.push(currentNote);

            currentNote = currentNote + 1;
            scale.push(currentNote);

            currentNote = currentNote + 2;
            scale.push(currentNote);

            currentNote = currentNote + 2;
            scale.push(currentNote);
        }

    }
    else if(type == ScaleType.Spanish){
        var currentNote = intStartNote;
        scale.push(currentNote);

        var k;
        for(k=0; k<octaves; k++){

            currentNote = currentNote + 1;
            scale.push(currentNote);

            currentNote = currentNote + 2;
            scale.push(currentNote);

            currentNote = currentNote + 2;
            scale.push(currentNote);
            
            currentNote = currentNote + 2;
            scale.push(currentNote);

            currentNote = currentNote + 2;
            scale.push(currentNote);

            currentNote = currentNote + 1;
            scale.push(currentNote);

            currentNote = currentNote + 2;
            scale.push(currentNote);
        }

    }

    else if(type == ScaleType.MinorPentatonic){
        var currentNote = intStartNote;
        scale.push(currentNote);

        var k;
        for(k=0; k<octaves; k++){

            currentNote = currentNote + 3; //b3
            scale.push(currentNote);

            currentNote = currentNote + 2; //4
            scale.push(currentNote);

            currentNote = currentNote + 2; // 5
            scale.push(currentNote);
            
            currentNote = currentNote + 3; // b7
            scale.push(currentNote);

            currentNote = currentNote + 2; // root
            scale.push(currentNote);
            

        }

    }
    else if(type == ScaleType.Blues){
        var currentNote = intStartNote;
        scale.push(currentNote);

        var k;
        for(k=0; k<octaves; k++){

            currentNote = currentNote + 3; //b3
            scale.push(currentNote);

            currentNote = currentNote + 2; //4
            scale.push(currentNote);
            scale.push(currentNote+1);
            

            currentNote = currentNote + 2; // 5
            scale.push(currentNote);
            
            currentNote = currentNote + 3; // b7
            scale.push(currentNote);

            currentNote = currentNote + 2; // root
            scale.push(currentNote);
            

        }

    }
    else if(type == ScaleType.MajorPentatonic){
        var currentNote = intStartNote;
        scale.push(currentNote);

        var k;
        for(k=0; k<octaves; k++){

            currentNote = currentNote + 4; //2
            scale.push(currentNote);

            currentNote = currentNote + 1; //3
            scale.push(currentNote);

            currentNote = currentNote + 2; //5
            scale.push(currentNote);
            
            currentNote = currentNote + 4; //6
            scale.push(currentNote);

            currentNote = currentNote + 1; // root
            scale.push(currentNote);
        
        }

    }         
    else
    {
        throw new Error("Scale type not handled")
    }

    return scale

}




export abstract class AbstractChordPlayer{
    abstract PlayFourBarPattern(track,channel, chordChange);
    abstract PlayThreeBarPattern(track,channel, chordChange);
    abstract PlayTwoBarPattern(track,channel, chordChange);
    abstract PlayOneBarPattern(track,channel, chordChange);

    PlayFromChordChanges(track,chordList,channel){
        
        for(var chordChange of chordList){
            if(chordChange.Length == 2){        
                this.PlayTwoBarPattern(track, channel, chordChange);
            }
            else if(chordChange.Length == 4)
            {
                this.PlayFourBarPattern(track, channel, chordChange);
            }
            else if(chordChange.Length == 3)
            {
                this.PlayFourBarPattern(track, channel, chordChange);
            }
            else if(chordChange.Length == 1)
            {
                this.PlayOneBarPattern(track, channel, chordChange);
            }else{
                track.addChord(channel, chordChange.Chord, chordChange.Length*128);
            }
            
        }
    }    
}

export class Arpeggio1 extends AbstractChordPlayer {

    PlayFourBarPattern(track,channel, chordChange){
        track.addNote(channel, chordChange.Chord[0], beat/2);
        track.addNote(channel, chordChange.Chord[0]+2, beat/2);
        track.addNote(channel, chordChange.Chord[1], beat/2);
        track.addNote(channel, chordChange.Chord[2], beat/2);

        track.addNote(channel, chordChange.Chord[0], beat/2);
        track.addNote(channel, chordChange.Chord[0]+2, beat/2);
        track.addNote(channel, chordChange.Chord[1], beat/2);
        track.addNote(channel, chordChange.Chord[2], beat/2);
    }

    PlayThreeBarPattern(track,channel, chordChange){
        track.addNote(channel, chordChange.Chord[0], beat/2);
        track.addNote(channel, chordChange.Chord[0]+2, beat/2);
        track.addNote(channel, chordChange.Chord[1], beat/2);
        track.addNote(channel, chordChange.Chord[2], beat/2);
        track.addNote(channel, chordChange.Chord[0], beat/2);
        track.addNote(channel, chordChange.Chord[0]+2, beat/2);
    }
    

    PlayTwoBarPattern(track,channel, chordChange){
        track.addNote(channel, chordChange.Chord[0], beat/2);
        track.addNote(channel, chordChange.Chord[0]+2, beat/2);
        track.addNote(channel, chordChange.Chord[1], beat/2);
        track.addNote(channel, chordChange.Chord[2], beat/2);
    }

    PlayOneBarPattern(track,channel, chordChange){
        track.addNote(channel, chordChange.Chord[0], beat/2);
        track.addNote(channel, chordChange.Chord[2], beat/2);
    }

}


export class BassPLayer1 extends AbstractChordPlayer {

    noteDelta = 24;
    PlayFourBarPattern(track,channel, chordChange){
        track.addNote(channel, chordChange.Chord[0]-this.noteDelta, beat*3);
        track.addNote(channel, chordChange.Chord[0]-this.noteDelta, beat);
    }

    PlayThreeBarPattern(track,channel, chordChange){
        track.addNote(channel, chordChange.Chord[0]-this.noteDelta, beat*3);        
    }
    
    PlayTwoBarPattern(track,channel, chordChange){
        track.addNote(channel, chordChange.Chord[0]-this.noteDelta, beat*2);
    }

    PlayOneBarPattern(track,channel, chordChange){
        track.addNote(channel, chordChange.Chord[0]-this.noteDelta, beat*1);
    }
}

export class BassPLayer2 extends AbstractChordPlayer {

    noteDelta = 24;
    PlayFourBarPattern(track,channel, chordChange){
        var i=0;

        for(i=0;i<8;i++)
            track.addNote(channel, chordChange.Chord[0]-this.noteDelta, beat/2);
        
    }

    PlayThreeBarPattern(track,channel, chordChange)
    {
        var i=0;

        for(i=0;i<6;i++)
            track.addNote(channel, chordChange.Chord[0]-this.noteDelta, beat/2);
    }
    
    PlayTwoBarPattern(track,channel, chordChange){
        var i;
        for(i=0;i<4;i++)
            track.addNote(channel, chordChange.Chord[0]-this.noteDelta, beat/2);

    }

    PlayOneBarPattern(track,channel, chordChange){
        track.addNote(channel, chordChange.Chord[0]-this.noteDelta, beat/2);
        track.addNote(channel, chordChange.Chord[0]-this.noteDelta, beat/2);
    }
}

export class RandomPlayer extends AbstractChordPlayer {

    PlayFourBarPattern(track,channel, chordChange){
        var i=0;

        for(i=0;i<8;i++){
            track.addNote(channel, SelectRandom(chordChange.Chord), beat/2);
        }
        
    }

    PlayThreeBarPattern(track,channel, chordChange)
    {
        var i=0;

        for(i=0;i<6;i++){
            track.addNote(channel, SelectRandom(chordChange.Chord), beat/2);
        }
    }
    
    PlayTwoBarPattern(track,channel, chordChange){
        var i;
        for(i=0;i<4;i++){
            track.addNote(channel, SelectRandom(chordChange.Chord), beat/2);
        }

    }

    PlayOneBarPattern(track,channel, chordChange){
        track.addNote(channel, chordChange.Chord[0], beat/2);
        track.addNote(channel, chordChange.Chord[0]+12, beat/2);
    }
}


export class BassPLayer3 extends AbstractChordPlayer {

    PlayFourBarPattern(track,channel, chordChange){
        track.addNote(channel, chordChange.Chord[0]-12, beat*1.5);
        track.addNote(channel, chordChange.Chord[0]-12, beat*1.5);
        track.addNote(channel, chordChange.Chord[0]-12, beat);
    }

    PlayThreeBarPattern(track,channel, chordChange){
        track.addNote(channel, chordChange.Chord[0]-12, beat*1.5);
        track.addNote(channel, chordChange.Chord[0]-12, beat*1.5);
        track.addNote(channel, chordChange.Chord[0]-12, beat);
    }
    
    PlayTwoBarPattern(track,channel, chordChange){
        track.addNote(channel, chordChange.Chord[0]-12, beat*2);

    }

    PlayOneBarPattern(track,channel, chordChange){
        track.addNote(channel, chordChange.Chord[0]-12, beat);
    }
}

export class SimplePlayer extends AbstractChordPlayer {

    PlayFourBarPattern(track,channel, chordChange){
        track.addChord(channel, chordChange.Chord, chordChange.Length*beat);
    }

    PlayThreeBarPattern(track,channel, chordChange){
        track.addChord(channel, chordChange.Chord, chordChange.Length*beat);    
    }
    
    PlayTwoBarPattern(track,channel, chordChange){
        track.addChord(channel, chordChange.Chord, chordChange.Length*beat);
    }

    PlayOneBarPattern(track,channel, chordChange){
        track.addChord(channel, chordChange.Chord, chordChange.Length*beat);
    }
}

export class OffBeatPlayer extends AbstractChordPlayer {

    PlayFourBarPattern(track,channel, chordChange){
        track.addNote(channel, 0, beat, 0)
        track.addChord(channel, chordChange.Chord, beat);
        track.addNote(channel, 0, beat, 0)
        track.addChord(channel, chordChange.Chord, beat);
    }

    PlayThreeBarPattern(track,channel, chordChange){
        track.addNote(channel, 0, beat, 0)
        track.addChord(channel, chordChange.Chord, beat);
        track.addNote(channel, 0, beat, 0)
    }
    
    PlayTwoBarPattern(track,channel, chordChange){
        track.addNote(channel, 0, beat, 0)
        track.addChord(channel, chordChange.Chord, beat);
    }

    PlayOneBarPattern(track,channel, chordChange){
        track.addChord(channel, chordChange.Chord, beat);
    }
}
