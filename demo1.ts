var fs = require('fs');
var Midi = require('jsmidgen');
var Util = require('jsmidgen').Util;
import mm = require('./MusicMaker')

var beat=128;
var DrumNotes = mm.DrumNotes;
var selectRandom = mm.SelectRandom;
var makeChord = mm.MakeChord;
var addRhythmPattern = mm.AddRhythmPattern;
var ChordType = mm.ChordType;

class DemoPatterns
{
    AddPickingPattern_4_1(track,aChord){
        var intRoot = aChord[0];
        var intMiddle = aChord[1];
        var intFifth = aChord[2];

        track.addNote(0,intRoot,beat)
        track.addNote(0,intFifth,beat)
        track.addNote(0,intMiddle,beat)
        track.addNote(0,intFifth,beat)
    }

    AddPickingPattern_4_2(track,aChord){
        var intRoot = aChord[0];
        var intNine = aChord[0] + 2;
        var intMiddle = aChord[1];
        var intFifth = aChord[2];
        var intRoot2 = aChord[0] + 12;
        var intNine2 = aChord[0] + 2 + 12;
        var intMiddle2 = aChord[1] + 12;
        var intFifth2 = aChord[2] + 12;

        track.addNote(0,intRoot,beat/2)
        track.addNote(0,intNine,beat/2)	
        track.addNote(0,intMiddle,beat/2)
        track.addNote(0,intFifth,beat/2)
        
        track.addNote(0,intRoot2,beat/2)
        track.addNote(0,intNine2,beat/2)	
        track.addNote(0,intMiddle2,beat/2)
        track.addNote(0,intFifth2,beat/2)
    }

    AddPickingPattern_4_3(track,aChord){
        var intRoot = aChord[0];
        var intMiddle = aChord[1];
        var intFifth = aChord[2];
        var intRoot2 = aChord[0] + 12;
        var intMiddle2 = aChord[1] + 12;
        var intFifth2 = aChord[2] + 12;

        var list = new Array();
        list.push(intRoot);
        list.push(intMiddle);
        list.push(intFifth);
        list.push(intRoot2);
        list.push(intMiddle2);
        list.push(intFifth2);

        var i;
        for(i=0;  i<8;  i++){
            var aNote = selectRandom(list);
            track.addNote(0,aNote,beat/2);
        }
        
    }

    AddPickingPattern_4_4(track,aChord){
        var intRoot = aChord[0] - 24;
        track.addNote(0,intRoot,beat*3)
        track.addNote(0,intRoot,beat*1)
    }

    AddPickingPattern_4_5(track,aChord){
        var intRoot = aChord[0];
        var nine1 = aChord[0] + 2;
        var intMiddle = aChord[1];
        var intFifth = aChord[2];
        var intRoot2 = aChord[0] + 12;
        var nine2 = nine1 + 12;
        var intMiddle2 = aChord[1] + 12;
        var intFifth2 = aChord[2] + 12;

        var list = new Array();
        list.push(intRoot);
        list.push(nine1);
        list.push(nine2);
        list.push(intMiddle);
        list.push(intFifth);
        list.push(intRoot2);
        list.push(intMiddle2);
        list.push(intFifth2);

        var i;
        for(i=0;  i<16;  i++){
            var aNote = selectRandom(list);
            track.addNote(0,aNote,beat/4);
        }
        
    }

}


function demo1(){
    var file = new Midi.File();

    var chordList = new Array();
    chordList.push(makeChord("d4", ChordType.Minor));
    chordList.push(makeChord("a4", ChordType.Major));
    chordList.push(makeChord("d4", ChordType.Minor));
    chordList.push(makeChord("c4", ChordType.Major));
    chordList.push(makeChord("f4", ChordType.Major));
    chordList.push(makeChord("c4", ChordType.Major));
    chordList.push(makeChord("d4", ChordType.Minor));
    chordList.push(makeChord("a4", ChordType.Major));


    var track = new Midi.Track();
    track.setTempo(70);
    file.addTrack(track);
    let i = 0;
    for(i=0; i<chordList.length; i++){
        track.addNote(9,DrumNotes.BassDrum1,beat);
        track.addNote(9,DrumNotes.SnareDrum,beat);
        track.addNote(9,DrumNotes.BassDrum1,beat);
        track.addNote(9,DrumNotes.SnareDrum,beat);
    }

    track = new Midi.Track();
    file.addTrack(track);
    for(i=0; i<chordList.length; i++){
        track.addNote(9,DrumNotes.ClosedHighHat,beat/2);
        track.addNote(9,DrumNotes.ClosedHighHat,beat/2);
        track.addNote(9,DrumNotes.ClosedHighHat,beat/2);
        track.addNote(9,DrumNotes.ClosedHighHat,beat/2);
        track.addNote(9,DrumNotes.ClosedHighHat,beat/2);
        track.addNote(9,DrumNotes.ClosedHighHat,beat/2);
        track.addNote(9,DrumNotes.ClosedHighHat,beat/2);
        track.addNote(9,DrumNotes.ClosedHighHat,beat/2);
    }

    // track ================================================================================
    let patterns = new DemoPatterns();

    track = new Midi.Track();
    file.addTrack(track);
    track.setInstrument(8);
    track.setTempo(90);

    var j=0;
    for(j=0; j<chordList.length; j++){
        patterns.AddPickingPattern_4_3(track, chordList[j]);
    }

    // track ================================================================================
    track = new Midi.Track();
    file.addTrack(track);
    track.setInstrument(8);

    var j=0;
    for(j=0; j<chordList.length; j++){
        patterns.AddPickingPattern_4_3(track, chordList[j]);
    }

    // track ================================================================================

    track = new Midi.Track();
    file.addTrack(track);
    track.setInstrument(8);

    for(j=0; j<chordList.length; j++){
        patterns.AddPickingPattern_4_2(track, chordList[j]);
    }

    // track ================================================================================
    track = new Midi.Track();
    file.addTrack(track);
    for(j=0; j<chordList.length; j++){
        patterns.AddPickingPattern_4_4(track, chordList[j]);
    }

    // track ================================================================================


    fs.writeFileSync('test.mid', file.toBytes(), 'binary');



}

demo1();