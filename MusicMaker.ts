var Util = require('jsmidgen').Util;


export var Beat = 128;

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
      track.addNote(9,note, Beat/4)
    }
    else if (currentChar != "|")
    {
      track.addNote(9,0,Beat/4,0);
    }
    
  }
}

export enum ScaleType{
    Major, Minor, MinorPentatonic, MajorPentatonic, Blues
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
