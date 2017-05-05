"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var fs = require('fs');
var Midi = require('jsmidgen');
var Util = require('jsmidgen').Util;
var mm = require("./MusicMaker");
var beat = 128;
var DrumNotes = mm.DrumNotes;
var selectRandom = mm.SelectRandom;
var makeChord = mm.MakeChord;
var addRhythmPattern = mm.AddRhythmPattern;
var ChordType = mm.ChordType;
var ChordChange = mm.ChordChange;
var AbstractChordPlayer = (function () {
    function AbstractChordPlayer() {
    }
    AbstractChordPlayer.prototype.PlayFromChordChanges = function (track, chordList, channel) {
        for (var _i = 0, chordList_1 = chordList; _i < chordList_1.length; _i++) {
            var chordChange = chordList_1[_i];
            if (chordChange.Length == 2) {
                this.PlayTwoBarPattern(track, channel, chordChange);
            }
            else if (chordChange.Length == 4) {
                this.PlayFourBarPattern(track, channel, chordChange);
            }
            else if (chordChange.Length == 3) {
                this.PlayFourBarPattern(track, channel, chordChange);
            }
            else if (chordChange.Length == 1) {
                this.PlayOneBarPattern(track, channel, chordChange);
            }
            else {
                track.addChord(channel, chordChange.Chord, chordChange.Length * 128);
            }
        }
    };
    return AbstractChordPlayer;
}());
var Arpeggio1 = (function (_super) {
    __extends(Arpeggio1, _super);
    function Arpeggio1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Arpeggio1.prototype.PlayFourBarPattern = function (track, channel, chordChange) {
        track.addNote(channel, chordChange.Chord[0], beat / 2);
        track.addNote(channel, chordChange.Chord[0] + 2, beat / 2);
        track.addNote(channel, chordChange.Chord[1], beat / 2);
        track.addNote(channel, chordChange.Chord[2], beat / 2);
        track.addNote(channel, chordChange.Chord[0], beat / 2);
        track.addNote(channel, chordChange.Chord[0] + 2, beat / 2);
        track.addNote(channel, chordChange.Chord[1], beat / 2);
        track.addNote(channel, chordChange.Chord[2], beat / 2);
    };
    Arpeggio1.prototype.PlayThreeBarPattern = function (track, channel, chordChange) {
        track.addNote(channel, chordChange.Chord[0], beat / 2);
        track.addNote(channel, chordChange.Chord[0] + 2, beat / 2);
        track.addNote(channel, chordChange.Chord[1], beat / 2);
        track.addNote(channel, chordChange.Chord[2], beat / 2);
        track.addNote(channel, chordChange.Chord[0], beat / 2);
        track.addNote(channel, chordChange.Chord[0] + 2, beat / 2);
    };
    Arpeggio1.prototype.PlayTwoBarPattern = function (track, channel, chordChange) {
        track.addNote(channel, chordChange.Chord[0], beat / 2);
        track.addNote(channel, chordChange.Chord[0] + 2, beat / 2);
        track.addNote(channel, chordChange.Chord[1], beat / 2);
        track.addNote(channel, chordChange.Chord[2], beat / 2);
    };
    Arpeggio1.prototype.PlayOneBarPattern = function (track, channel, chordChange) {
        track.addNote(channel, chordChange.Chord[0], beat / 2);
        track.addNote(channel, chordChange.Chord[2], beat / 2);
    };
    return Arpeggio1;
}(AbstractChordPlayer));
var BasePLayer1 = (function (_super) {
    __extends(BasePLayer1, _super);
    function BasePLayer1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BasePLayer1.prototype.PlayFourBarPattern = function (track, channel, chordChange) {
        track.addNote(channel, chordChange.Chord[0] - 12, beat * 3);
        track.addNote(channel, chordChange.Chord[0] - 12, beat);
    };
    BasePLayer1.prototype.PlayThreeBarPattern = function (track, channel, chordChange) {
        track.addNote(channel, chordChange.Chord[0] - 12, beat * 3);
    };
    BasePLayer1.prototype.PlayTwoBarPattern = function (track, channel, chordChange) {
        track.addNote(channel, chordChange.Chord[0] - 12, beat * 2);
    };
    BasePLayer1.prototype.PlayOneBarPattern = function (track, channel, chordChange) {
        track.addNote(channel, chordChange.Chord[0] - 12, beat * 1);
    };
    return BasePLayer1;
}(AbstractChordPlayer));
var BasePLayer2 = (function (_super) {
    __extends(BasePLayer2, _super);
    function BasePLayer2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BasePLayer2.prototype.PlayFourBarPattern = function (track, channel, chordChange) {
        track.addNote(channel, chordChange.Chord[0] - 12, beat / 2);
        track.addNote(channel, chordChange.Chord[0] - 12, beat / 2);
        track.addNote(channel, chordChange.Chord[0] - 12, beat / 2);
        track.addNote(channel, chordChange.Chord[0] - 12, beat / 2);
        track.addNote(channel, chordChange.Chord[0] - 12, beat / 2);
        track.addNote(channel, chordChange.Chord[0] - 12, beat / 2);
        track.addNote(channel, chordChange.Chord[0] - 12, beat / 2);
        track.addNote(channel, chordChange.Chord[0] - 12, beat / 2);
    };
    BasePLayer2.prototype.PlayThreeBarPattern = function (track, channel, chordChange) {
        track.addNote(channel, chordChange.Chord[0] - 12, beat / 2);
        track.addNote(channel, chordChange.Chord[0] - 12, beat / 2);
        track.addNote(channel, chordChange.Chord[0] - 12, beat / 2);
        track.addNote(channel, chordChange.Chord[0] - 12, beat / 2);
        track.addNote(channel, chordChange.Chord[0] - 12, beat / 2);
        track.addNote(channel, chordChange.Chord[0] - 12, beat / 2);
    };
    BasePLayer2.prototype.PlayTwoBarPattern = function (track, channel, chordChange) {
        track.addNote(channel, chordChange.Chord[0] - 12, beat / 2);
        track.addNote(channel, chordChange.Chord[0] - 12, beat / 2);
        track.addNote(channel, chordChange.Chord[0] - 12, beat / 2);
        track.addNote(channel, chordChange.Chord[0] - 12, beat / 2);
    };
    BasePLayer2.prototype.PlayOneBarPattern = function (track, channel, chordChange) {
        track.addNote(channel, chordChange.Chord[0] - 12, beat / 2);
        track.addNote(channel, chordChange.Chord[0] - 12, beat / 2);
    };
    return BasePLayer2;
}(AbstractChordPlayer));
var BasePLayer3 = (function (_super) {
    __extends(BasePLayer3, _super);
    function BasePLayer3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BasePLayer3.prototype.PlayFourBarPattern = function (track, channel, chordChange) {
        track.addNote(channel, chordChange.Chord[0] - 12, beat * 1.5);
        track.addNote(channel, chordChange.Chord[0] - 12, beat * 1.5);
        track.addNote(channel, chordChange.Chord[0] - 12, beat);
    };
    BasePLayer3.prototype.PlayThreeBarPattern = function (track, channel, chordChange) {
        track.addNote(channel, chordChange.Chord[0] - 12, beat * 1.5);
        track.addNote(channel, chordChange.Chord[0] - 12, beat * 1.5);
        track.addNote(channel, chordChange.Chord[0] - 12, beat);
    };
    BasePLayer3.prototype.PlayTwoBarPattern = function (track, channel, chordChange) {
        track.addNote(channel, chordChange.Chord[0] - 12, beat * 2);
    };
    BasePLayer3.prototype.PlayOneBarPattern = function (track, channel, chordChange) {
        track.addNote(channel, chordChange.Chord[0] - 12, beat);
    };
    return BasePLayer3;
}(AbstractChordPlayer));
var SimplePlayer = (function (_super) {
    __extends(SimplePlayer, _super);
    function SimplePlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SimplePlayer.prototype.PlayFourBarPattern = function (track, channel, chordChange) {
        track.addChord(channel, chordChange.Chord, chordChange.Length * beat);
    };
    SimplePlayer.prototype.PlayThreeBarPattern = function (track, channel, chordChange) {
        track.addChord(channel, chordChange.Chord, chordChange.Length * beat);
    };
    SimplePlayer.prototype.PlayTwoBarPattern = function (track, channel, chordChange) {
        track.addChord(channel, chordChange.Chord, chordChange.Length * beat);
    };
    SimplePlayer.prototype.PlayOneBarPattern = function (track, channel, chordChange) {
        track.addChord(channel, chordChange.Chord, chordChange.Length * beat);
    };
    return SimplePlayer;
}(AbstractChordPlayer));
var OffBeatPlayer = (function (_super) {
    __extends(OffBeatPlayer, _super);
    function OffBeatPlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OffBeatPlayer.prototype.PlayFourBarPattern = function (track, channel, chordChange) {
        track.addNote(channel, 0, beat, 0);
        track.addChord(channel, chordChange.Chord, beat);
        track.addNote(channel, 0, beat, 0);
        track.addChord(channel, chordChange.Chord, beat);
    };
    OffBeatPlayer.prototype.PlayThreeBarPattern = function (track, channel, chordChange) {
        track.addNote(channel, 0, beat, 0);
        track.addChord(channel, chordChange.Chord, beat);
        track.addNote(channel, 0, beat, 0);
    };
    OffBeatPlayer.prototype.PlayTwoBarPattern = function (track, channel, chordChange) {
        track.addNote(channel, 0, beat, 0);
        track.addChord(channel, chordChange.Chord, beat);
    };
    OffBeatPlayer.prototype.PlayOneBarPattern = function (track, channel, chordChange) {
        track.addChord(channel, chordChange.Chord, beat);
    };
    return OffBeatPlayer;
}(AbstractChordPlayer));
function demo4() {
    var file = new Midi.File();
    var track;
    track = new Midi.Track();
    track.setTempo(180);
    file.addTrack(track);
    var chordList = new Array();
    mm.Repeat(8, function () {
        chordList.push(new ChordChange(mm.MakeChord("a4", mm.ChordType.Major), 4));
        chordList.push(new ChordChange(mm.MakeChord("e4", mm.ChordType.Major), 4));
        chordList.push(new ChordChange(mm.MakeChord("f#4", mm.ChordType.Minor), 4));
        chordList.push(new ChordChange(mm.MakeChord("d4", mm.ChordType.Major), 4));
    });
    var track = new Midi.Track();
    track.setInstrument(7);
    var p = new OffBeatPlayer();
    p.PlayFromChordChanges(track, chordList, 0);
    file.addTrack(track);
    var track = new Midi.Track();
    var basePlayer2 = new BasePLayer2();
    basePlayer2.PlayFromChordChanges(track, chordList, 1);
    file.addTrack(track);
    track = new Midi.Track();
    file.addTrack(track);
    mm.Repeat(32, function () {
        mm.AddRhythmPattern(track, "x---|x--x|x---|x--x", mm.DrumNotes.BassDrum1);
    });
    track = new Midi.Track();
    file.addTrack(track);
    mm.Repeat(32, function () {
        mm.AddRhythmPattern(track, "----|x---|----|x---", mm.DrumNotes.SnareDrum);
    });
    fs.writeFileSync('test.mid', file.toBytes(), 'binary');
}
demo4();
