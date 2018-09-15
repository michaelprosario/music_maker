var fs = require('fs');
var Midi = require('jsmidgen');
var Util = require('jsmidgen').Util;
import mm = require('./MusicMaker')

var beat = 128;
var DrumNotes = mm.DrumNotes;
var selectRandom = mm.SelectRandom;
var makeChord = mm.MakeChord;
var addRhythmPattern = mm.AddRhythmPattern;
var ChordType = mm.ChordType;




function demo2() {
    var file = new Midi.File();
    var track;

    track = new Midi.Track();
    track.setTempo(90);
    file.addTrack(track);
    addRhythmPattern(track, "x---x---xxxx---x", DrumNotes.BassDrum1);
    addRhythmPattern(track, "x---x---xxxx---x", DrumNotes.BassDrum1);
    addRhythmPattern(track, "x---x---xxxx---x", DrumNotes.BassDrum1);
    addRhythmPattern(track, "x---x---xxxx---x", DrumNotes.BassDrum1);


    track = new Midi.Track();
    file.addTrack(track);
    addRhythmPattern(track, "----|x---|----|x---", DrumNotes.SnareDrum);
    addRhythmPattern(track, "----|x---|----|x--x", DrumNotes.SnareDrum);
    addRhythmPattern(track, "----|x---|----|xx--", DrumNotes.SnareDrum);
    addRhythmPattern(track, "----|x---|----|x--x", DrumNotes.SnareDrum);


    track = new Midi.Track();
    file.addTrack(track);

    var k;

    for (k = 0; k < 4; k++)
        addRhythmPattern(track, "x-x-|x-x-|xxx-|x-xx", DrumNotes.ClosedHighHat);

    var myNotes = new Array();
    myNotes.push(60);
    myNotes.push(61);
    myNotes.push(62);
    myNotes.push(63);
    myNotes.push(64);
    myNotes.push(65);
    myNotes.push(66);
    myNotes.push(0);


    track = new Midi.Track();
    file.addTrack(track);

    for (k = 0; k < 16 * 4; k++) {
        var currentNote = selectRandom(myNotes);
        if (currentNote == 0)
            track.addNote(9, currentNote, beat / 4, 0)
        else
            track.addNote(9, currentNote, beat / 4)
    }


    fs.writeFileSync('test.mid', file.toBytes(), 'binary');
}

demo2();