
var fs   = require('fs');
var Midi = require('jsmidgen');
var Util = require('jsmidgen').Util;
var mm   = require('./MusicMaker');

var beat=128;

module.exports = {
    
main: function(){
    var trackList = new Array();
    
    var track = new Midi.Track();
    track.setTempo(70);
    trackList.push(track);
    mm.AddRhythmPattern(track, "x---xxxx----x-x-", mm.DrumNotes.BassDrum1);
    mm.AddRhythmPattern(track, "x---xxxx----x-x-", mm.DrumNotes.BassDrum1);
    mm.AddRhythmPattern(track, "x---xxxx----x-x-", mm.DrumNotes.BassDrum1);
    mm.AddRhythmPattern(track, "x---xxxx----x-x-", mm.DrumNotes.BassDrum1);


    track = new Midi.Track();
    trackList.push(track);
    mm.AddRhythmPattern(track, "----x-------x---", mm.DrumNotes.SnareDrum);
    mm.AddRhythmPattern(track, "----x-------x--x", mm.DrumNotes.SnareDrum);
    mm.AddRhythmPattern(track, "----x-------x---", mm.DrumNotes.SnareDrum);
    mm.AddRhythmPattern(track, "----x-------x-xx", mm.DrumNotes.SnareDrum);
    
    
    track = new Midi.Track();
    trackList.push(track);
    mm.AddRhythmPattern(track, "x-x-x-x-x-x-x-x-", mm.DrumNotes.ClosedHighHat);
    mm.AddRhythmPattern(track, "x-x-x-x-x-x-x-x-", mm.DrumNotes.ClosedHighHat);
    mm.AddRhythmPattern(track, "x-x-x-x-x-x-x-x-", mm.DrumNotes.ClosedHighHat);
    mm.AddRhythmPattern(track, "x-x-x-x-x-x-x-x-", mm.DrumNotes.ClosedHighHat);

    
    
    return trackList;

}

}

