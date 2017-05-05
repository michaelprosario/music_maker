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



function demo3()
{
    var file = new Midi.File();
    var track;
    var j;

    track = new Midi.Track();
    track.setTempo(80);

    
    file.addTrack(track);

    for(j=0; j<8; j++){

        var scale1 = mm.MakeScale("a5", mm.ScaleType.Blues, 1);
        var i;
        for(i=0; i<4*4*2;  i++){
            var velocity = Math.floor(Math.random() * 100);
            var currentNote = mm.SelectRandom(scale1);
            track.addNote(0,currentNote,beat/2,0,velocity)
        }

    }

    
    track = new Midi.Track();
    file.addTrack(track);

    for(j=0; j<8; j++){
        
        track.addChord(0, mm.MakeChord("a4", ChordType.Major), beat*4);
        track.addChord(0, mm.MakeChord("g4", ChordType.Major), beat*4);
        track.addChord(0, mm.MakeChord("f4", ChordType.Major), beat*4);
        track.addChord(0, mm.MakeChord("e4", ChordType.Major), beat*4);
       
    }


    track = new Midi.Track();
    file.addTrack(track);
    
    mm.Repeat(8, function(){
        track.addNote(0,"a2",beat*3);
        track.addNote(0,"a2",beat);
        track.addNote(0,"g2",beat*3);
        track.addNote(0,"g2",beat);
        track.addNote(0,"f2",beat*3);
        track.addNote(0,"f2",beat);
        track.addNote(0,"e2",beat*3);
        track.addNote(0,"e2",beat);

    })
    
    
    track = new Midi.Track();
    file.addTrack(track);

    mm.Repeat(8, function(){
        mm.AddRhythmPattern(track,"x---|---x|x---|---x", mm.DrumNotes.BassDrum1);
    })

    track = new Midi.Track();
    file.addTrack(track);
    mm.AddRhythmPattern(track,"----|x---|----|x---", mm.DrumNotes.SnareDrum);
    mm.AddRhythmPattern(track,"----|x---|----|x--x", mm.DrumNotes.SnareDrum);
    mm.AddRhythmPattern(track,"----|x---|----|x---", mm.DrumNotes.SnareDrum);
    mm.AddRhythmPattern(track,"----|x---|---x|x---", mm.DrumNotes.SnareDrum);
    mm.AddRhythmPattern(track,"----|x---|----|x---", mm.DrumNotes.SnareDrum);
    mm.AddRhythmPattern(track,"----|x---|----|x--x", mm.DrumNotes.SnareDrum);
    mm.AddRhythmPattern(track,"----|x---|---x|x---", mm.DrumNotes.SnareDrum);
    mm.AddRhythmPattern(track,"----|x---|----|x---", mm.DrumNotes.SnareDrum);
   


    fs.writeFileSync('test.mid', file.toBytes(), 'binary');
    
    
}


demo3();