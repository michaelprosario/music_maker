"use strict";
exports.__esModule = true;
var fs = require('fs');
var Midi = require('jsmidgen');
var Util = require('jsmidgen').Util;
var mm = require("./MusicMaker");
var beat = 128;
function demo4() {
    var file = new Midi.File();
    var track;
    track = new Midi.Track();
    track.setTempo(180);
    file.addTrack(track);
    var chordList = new Array();
    mm.Repeat(8, function () {
        chordList.push(new mm.ChordChange(mm.MakeChord("e4", mm.ChordType.Minor), 4));
        chordList.push(new mm.ChordChange(mm.MakeChord("c4", mm.ChordType.Major), 4));
        chordList.push(new mm.ChordChange(mm.MakeChord("d4", mm.ChordType.Major), 4));
        chordList.push(new mm.ChordChange(mm.MakeChord("c4", mm.ChordType.Major), 4));
    });
    var track = new Midi.Track();
    track.setInstrument(0, mm.Instruments.Marimba);
    var p = new mm.RandomPlayer();
    p.PlayFromChordChanges(track, chordList, 0);
    file.addTrack(track);
    var track = new Midi.Track();
    track.setInstrument(1, mm.Instruments.ElectricBasspick);
    var bp = new mm.BasePLayer1();
    bp.PlayFromChordChanges(track, chordList, 1);
    file.addTrack(track);
    track = new Midi.Track();
    track.setInstrument(2, mm.Instruments.Marimba);
    p = new mm.OffBeatPlayer();
    p.PlayFromChordChanges(track, chordList, 2);
    file.addTrack(track);
    track = new Midi.Track();
    file.addTrack(track);
    mm.Repeat(32, function () {
        mm.AddRhythmPattern(track, "x---|x---|x---|x---", mm.DrumNotes.BassDrum1);
    });
    track = new Midi.Track();
    file.addTrack(track);
    mm.Repeat(32, function () {
        mm.AddRhythmPattern(track, "----|x---|----|x---", mm.DrumNotes.SnareDrum);
    });
    fs.writeFileSync('test.mid', file.toBytes(), 'binary');
}
function reviewInstruments() {
    var track;
    var file = new Midi.File();
    track = new Midi.Track();
    file.addTrack(track);
    track.addNote(1, "c4", beat * 2);
    for (var i = 0; i < 255; i++) {
        track.setInstrument(0, i, 0);
        track.addNote(0, i + 30, beat);
    }
    fs.writeFileSync('test.mid', file.toBytes(), 'binary');
}
demo4();
