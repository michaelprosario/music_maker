# music_maker
collection of typescript scripts for generating music

For a project overview, check the following blog post:
http://innovativeteams.net/music-maker-using-nodejs-to-create-songs/

I do want to give a shout out to David Ingram of Google for putting together jsmidgen. David’s library handled all the low-level concerns for generating MIDI files, adding tracks, and notes. Please keep in mind that MIDI is a music protocol and file format that focuses on the idea of turning notes and off like switches over time. Make sure to check out his work here:
https://github.com/dingram/jsmidgen


# Hello world

```
var fs = require('fs');
var Midi = require('jsmidgen');
var Util = require('jsmidgen').Util;
import mm = require('./MusicMaker')

var beat=25;
var file = new Midi.File();

// Build a track
var track = new Midi.Track();
track.setTempo(80);
file.addTrack(track);

// Play a scale
var scale = mm.MakeScale("c4", mm.ScaleType.MajorPentatonic,2)

for(var i=0; i<scale.length; i++){
    track.addNote(0,scale[i],beat*2);
}

// Write a MIDI file
fs.writeFileSync('test.mid', file.toBytes(), 'binary');
```


# Creating a new file and track

```
var file = new Midi.File();
var track = new Midi.Track();
track.setTempo(80);
file.addTrack(track);

// Play cool music here ...

```

# Play three notes

```
track.addNote(0, mm.GetNoteNumber("c4"), beat);
track.addNote(0, mm.GetNoteNumber("d4"), beat);
track.addNote(0, mm.GetNoteNumber("e4"), beat);
```

# Saving file to MIDI
```
fs.writeFileSync('test.mid', file.toBytes(), 'binary');
```


# Playing a scale

```
var scale = mm.MakeScale("c4", mm.ScaleType.MajorPentatonic,2)

for(var i=0; i<scale.length; i++){
    track.addNote(0,scale[i],beat*2);
}
```





# Playing drum patterns
```
var DrumNotes = mm.DrumNotes;
var addRhythmPattern = mm.AddRhythmPattern;
addRhythmPattern(track, "x-x-|x-x-|xxx-|x-xx",DrumNotes.ClosedHighHat);
```




# Setup chord progression

```
var chordList = new Array();
chordList.push(new mm.ChordChange(mm.MakeChord("e4", mm.ChordType.Minor),4));
chordList.push(new mm.ChordChange(mm.MakeChord("c4", mm.ChordType.Major),4));
chordList.push(new mm.ChordChange(mm.MakeChord("d4", mm.ChordType.Major),4));
chordList.push(new mm.ChordChange(mm.MakeChord("c4", mm.ChordType.Major),4));
```





# Play random notes from chord progression

```
var p = new mm.RandomPlayer
p.PlayFromChordChanges(track, chordList, 0);
```



# Play root of chord every measure

```
var p = new mm.SimplePlayer
p.PlayFromChordChanges(track, chordList, 0);
```

# Tour of chord players

```
var chordList = new Array();

// setup chord progression
chordList.push(new mm.ChordChange(mm.MakeChord("e4", mm.ChordType.Minor),4));
chordList.push(new mm.ChordChange(mm.MakeChord("c4", mm.ChordType.Major),4));
chordList.push(new mm.ChordChange(mm.MakeChord("d4", mm.ChordType.Major),4));
chordList.push(new mm.ChordChange(mm.MakeChord("c4", mm.ChordType.Major),4));

var chordPlayer = new mm.SimplePlayer
chordPlayer.PlayFromChordChanges(track, chordList, 0);

chordPlayer = new mm.Arpeggio1
chordPlayer.PlayFromChordChanges(track, chordList, 0);

chordPlayer = new mm.RandomPlayer
chordPlayer.PlayFromChordChanges(track, chordList, 0);

chordPlayer = new mm.BassPLayer1
chordPlayer.PlayFromChordChanges(track, chordList, 0);

chordPlayer = new mm.BassPLayer2
chordPlayer.PlayFromChordChanges(track, chordList, 0);

chordPlayer = new mm.BassPLayer3
chordPlayer.PlayFromChordChanges(track, chordList, 0);

chordPlayer = new mm.OffBeatPlayer
chordPlayer.PlayFromChordChanges(track, chordList, 0);

```
