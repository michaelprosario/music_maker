var fs = require('fs');
var Midi = require('jsmidgen');
var Util = require('jsmidgen').Util;
import mm = require('./MusicMaker')





function demo4() {

    var file = new Midi.File();

    var chordList = new Array();

    var objChords = "c4|f4|g4".split('|');


    var chordListA = new Array();
    var chordListB = new Array();
    var chordListC = new Array();

    mm.Repeat(4, function () {
        var chord = mm.MakeChord(mm.SelectRandom(objChords), mm.ChordType.Major7);
        var chordChange = new mm.ChordChange(chord, 4);
        chordListA.push(chordChange);
    })

    mm.Repeat(4, function () {
        var chord = mm.MakeChord(mm.SelectRandom(objChords), mm.ChordType.Major7);
        var chordChange = new mm.ChordChange(chord, 4);
        chordListB.push(chordChange);
    })

    mm.Repeat(4, function () {
        var chord = mm.MakeChord(mm.SelectRandom(objChords), mm.ChordType.Major7);
        var chordChange = new mm.ChordChange(chord, 4);
        chordListC.push(chordChange);
    })

    mm.Repeat(4, function () {
        chordListA.forEach(function (chordChange) {
            chordList.push(chordChange);
        })

        chordListB.forEach(function (chordChange) {
            chordList.push(chordChange);
        })

        chordListC.forEach(function (chordChange) {
            chordList.push(chordChange);
        })


    });



    var track;

    track = new Midi.Track();
    track.setTempo(70);
    file.addTrack(track);

    var player1 = new mm.SimplePlayer();
    player1.PlayFromChordChanges(track, chordList, 0);


    track = new Midi.Track();
    file.addTrack(track);
    var player2 = new mm.BassPLayer3();
    player2.PlayFromChordChanges(track, chordList, 1);

    track = new Midi.Track();
    file.addTrack(track);
    var player3 = new mm.RandomPlayer();
    player3.PlayFromChordChanges(track, chordList, 2);



    track = new Midi.Track();
    file.addTrack(track);
    var j;

    for (j = 0; j < chordList.length / 4; j++) {
        mm.AddRhythmPattern(track, "x---x--x----x-xx", mm.DrumNotes.BassDrum1);
        mm.AddRhythmPattern(track, "x---x--x----x--x", mm.DrumNotes.BassDrum1);
        mm.AddRhythmPattern(track, "x---x--x----x-xx", mm.DrumNotes.BassDrum1);
        mm.AddRhythmPattern(track, "x---x--x----x--x", mm.DrumNotes.BassDrum1);
    }


    track = new Midi.Track();
    file.addTrack(track);

    for (j = 0; j < chordList.length / 4; j++) {
        mm.AddRhythmPattern(track, "----x-------x---", mm.DrumNotes.SnareDrum);
        mm.AddRhythmPattern(track, "----x-------x--x", mm.DrumNotes.SnareDrum);
        mm.AddRhythmPattern(track, "----x-------x---", mm.DrumNotes.SnareDrum);
        mm.AddRhythmPattern(track, "----x--x----x--x", mm.DrumNotes.SnareDrum);
    }

    track = new Midi.Track();
    file.addTrack(track);

    for (j = 0; j < chordList.length / 4; j++) {
        mm.AddRhythmPattern(track, "x-x-x-x-x-x-x-x-", mm.DrumNotes.ClosedHighHat);
        mm.AddRhythmPattern(track, "x-x-x-x-x-x-x-x-", mm.DrumNotes.ClosedHighHat);
        mm.AddRhythmPattern(track, "x-x-x-x-x-x-x-x-", mm.DrumNotes.ClosedHighHat);
        mm.AddRhythmPattern(track, "x-x-x-x-x-x-x-x-", mm.DrumNotes.ClosedHighHat);
    }

    fs.writeFileSync('test.mid', file.toBytes(), 'binary');

}

demo4()