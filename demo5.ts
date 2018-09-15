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


var file = new Midi.File();
var track;

track = new Midi.Track();
track.setTempo(80);
file.addTrack(track);

var scale1 = mm.MakeScale("c4", mm.ScaleType.MinorPentatonic, 2)

for (var i = 0; i < scale1.length; i++) {
    track.addNote(0, scale1[i], beat * 2);
}

fs.writeFileSync('test.mid', file.toBytes(), 'binary');

