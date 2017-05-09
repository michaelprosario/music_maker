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
var Util = require('jsmidgen').Util;
exports.beat = 128;
var DrumNotes = (function () {
    function DrumNotes() {
    }
    return DrumNotes;
}());
DrumNotes.BassDrum1 = 35;
DrumNotes.SideStick = 37;
DrumNotes.SnareDrum = 38;
DrumNotes.HandClap = 39;
DrumNotes.ElectricSnare = 40;
DrumNotes.LowFloorTom = 41;
DrumNotes.HighFloorTom = 43;
DrumNotes.LowTom = 45;
DrumNotes.LowMidTom = 47;
DrumNotes.HiMidTom = 48;
DrumNotes.Tambourine = 54;
DrumNotes.ClosedHighHat = 42;
DrumNotes.OpenHighHat = 46;
DrumNotes.Bongo1 = 60;
DrumNotes.Bongo2 = 61;
DrumNotes.Congo1 = 62;
DrumNotes.Congo2 = 63;
DrumNotes.Congo3 = 64;
DrumNotes.Timbale1 = 65;
DrumNotes.Timbale2 = 66;
DrumNotes.CowBell = 56;
exports.DrumNotes = DrumNotes;
var Instruments = (function () {
    function Instruments() {
    }
    return Instruments;
}());
Instruments.AcousticGrandPiano = 0;
Instruments.BrightAcousticPiano = 1;
Instruments.ElectricGrandPiano = 2;
Instruments.Honk3tonkPiano = 3;
Instruments.ElectricPiano1 = 4;
Instruments.ElectricPiano2 = 5;
Instruments.Harpsichord = 6;
Instruments.Clavi = 7;
Instruments.Celesta = 8;
Instruments.Glockenspiel = 9;
Instruments.MusicBox = 10;
Instruments.Vibraphone = 11;
Instruments.Marimba = 12;
Instruments.X13lophone = 13;
Instruments.TubularBells = 14;
Instruments.Dulcimer = 15;
Instruments.DrawbarOrgan = 16;
Instruments.PercussiveOrgan = 17;
Instruments.RockOrgan = 18;
Instruments.ChurchOrgan = 19;
Instruments.ReedOrgan = 20;
Instruments.Accordion = 21;
Instruments.Harmonica = 22;
Instruments.TangoAccordion = 23;
Instruments.AcousticGuitarN24lon = 24;
Instruments.AcousticGuitarSteel = 25;
Instruments.ElectricGuitarJazz = 26;
Instruments.ElectricGuitarClean = 27;
Instruments.ElectricGuitarMuted = 28;
Instruments.OverdrivenGuitar = 29;
Instruments.DistortionGuitar = 30;
Instruments.Guitarharmonics = 31;
Instruments.AcousticBass = 32;
Instruments.ElectricBassfinger = 33;
Instruments.ElectricBasspick = 34;
Instruments.FretlessBass = 35;
Instruments.SlapBass1 = 36;
Instruments.SlapBass2 = 37;
Instruments.S38nthBass1 = 38;
Instruments.S39nthBass2 = 39;
Instruments.Violin = 40;
Instruments.Viola = 41;
Instruments.Cello = 42;
Instruments.Contrabass = 43;
Instruments.TremoloStrings = 44;
Instruments.PizzicatoStrings = 45;
Instruments.OrchestralHarp = 46;
Instruments.Timpani = 47;
Instruments.StringEnsemble1 = 48;
Instruments.StringEnsemble2 = 49;
Instruments.S50nthStrings1 = 50;
Instruments.S51nthStrings2 = 51;
Instruments.ChoirAahs = 52;
Instruments.VoiceOohs = 53;
Instruments.S54nthVoice = 54;
Instruments.OrchestraHit = 55;
Instruments.Trumpet = 56;
Instruments.Trombone = 57;
Instruments.Tuba = 58;
Instruments.MutedTrumpet = 59;
Instruments.FrenchHorn = 60;
Instruments.BrassSection = 61;
Instruments.S62nthBrass1 = 62;
Instruments.S63nthBrass2 = 63;
Instruments.SopranoSax = 64;
Instruments.AltoSax = 65;
Instruments.TenorSax = 66;
Instruments.BaritoneSax = 67;
Instruments.Oboe = 68;
Instruments.EnglishHorn = 69;
Instruments.Bassoon = 70;
Instruments.Clarinet = 71;
Instruments.Piccolo = 72;
Instruments.Flute = 73;
Instruments.Recorder = 74;
Instruments.PanFlute = 75;
Instruments.BlownBottle = 76;
Instruments.Shakuhachi = 77;
Instruments.Whistle = 78;
Instruments.Ocarina = 79;
Instruments.Lead1square = 80;
Instruments.Lead2sawtooth = 81;
Instruments.Lead3calliope = 82;
Instruments.Lead4chiff = 83;
Instruments.Lead5charang = 84;
Instruments.Lead6voice = 85;
Instruments.Lead7fifths = 86;
Instruments.Lead8BassLead = 87;
Instruments.Pad1newage = 88;
Instruments.Pad2warm = 89;
Instruments.Pad3pol90s90nth = 90;
Instruments.Pad4choir = 91;
Instruments.Pad5bowed = 92;
Instruments.Pad6metallic = 93;
Instruments.Pad7halo = 94;
Instruments.Pad8sweep = 95;
Instruments.FX1rain = 96;
Instruments.FX2soundtrack = 97;
Instruments.FX3cr98stal = 98;
Instruments.FX4atmosphere = 99;
Instruments.FX5brightness = 100;
Instruments.FX6goblins = 101;
Instruments.FX7echoes = 102;
Instruments.FX8scifi = 103;
Instruments.Sitar = 104;
Instruments.Banjo = 105;
Instruments.Shamisen = 106;
Instruments.Koto = 107;
Instruments.Kalimba = 108;
Instruments.Bagpipe = 109;
Instruments.Fiddle = 110;
Instruments.Shanai = 111;
Instruments.TinkleBell = 112;
Instruments.Agogo = 113;
Instruments.SteelDrums = 114;
Instruments.Woodblock = 115;
Instruments.TaikoDrum = 116;
Instruments.MelodicTom = 117;
Instruments.S118nthDrum = 118;
Instruments.ReverseC119mbal = 119;
Instruments.GuitarFretNoise = 120;
Instruments.BreathNoise = 121;
Instruments.Seashore = 122;
Instruments.BirdTweet = 123;
Instruments.TelephoneRing = 124;
Instruments.Helicopter = 125;
Instruments.Applause = 126;
Instruments.Gunshot = 127;
exports.Instruments = Instruments;
function GetNoteNumber(aNote) {
    if (typeof (aNote) == 'number') {
        return aNote;
    }
    else {
        var note = Util.midiPitchFromNote(aNote);
        note = parseInt(note);
        return note;
    }
}
exports.GetNoteNumber = GetNoteNumber;
var ChordType;
(function (ChordType) {
    ChordType[ChordType["Major"] = 0] = "Major";
    ChordType[ChordType["Minor"] = 1] = "Minor";
    ChordType[ChordType["M7"] = 2] = "M7";
    ChordType[ChordType["Major7"] = 3] = "Major7";
    ChordType[ChordType["Minor7"] = 4] = "Minor7";
})(ChordType = exports.ChordType || (exports.ChordType = {}));
var ChordChange = (function () {
    function ChordChange(chord, length) {
        this.Chord = chord;
        this.Length = length;
    }
    return ChordChange;
}());
exports.ChordChange = ChordChange;
function MakeChord(root, type) {
    var intRoot = GetNoteNumber(root);
    var aChord = new Array();
    if (type == ChordType.Major) {
        aChord.push(intRoot);
        aChord.push(intRoot + 4);
        aChord.push(intRoot + 7);
    }
    else if (type == ChordType.Minor) {
        aChord.push(intRoot);
        aChord.push(intRoot + 3);
        aChord.push(intRoot + 7);
    }
    else if (type == ChordType.Major7) {
        aChord.push(intRoot);
        aChord.push(intRoot + 4);
        aChord.push(intRoot + 7);
        aChord.push(intRoot + 11);
    }
    else if (type == ChordType.M7) {
        aChord.push(intRoot);
        aChord.push(intRoot + 4);
        aChord.push(intRoot + 7);
        aChord.push(intRoot + 10);
    }
    else if (type == ChordType.Minor7) {
        aChord.push(intRoot);
        aChord.push(intRoot + 3);
        aChord.push(intRoot + 7);
        aChord.push(intRoot + 10);
    }
    else {
        throw new Error("Help...Handle new chord type");
    }
    return aChord;
}
exports.MakeChord = MakeChord;
function SelectRandom(myArray) {
    var rand = myArray[Math.floor(Math.random() * myArray.length)];
    return rand;
}
exports.SelectRandom = SelectRandom;
function Repeat(count, functionToRepeat) {
    var k;
    for (k = 0; k < count; k++) {
        functionToRepeat();
    }
}
exports.Repeat = Repeat;
function AddRhythmPattern(track, strPattern, note) {
    var i = 0;
    for (i = 0; i < strPattern.length; i++) {
        var currentChar = strPattern[i];
        if (currentChar == "x") {
            track.addNote(9, note, exports.beat / 4);
        }
        else if (currentChar != "|") {
            track.addNote(9, 0, exports.beat / 4, 0);
        }
    }
}
exports.AddRhythmPattern = AddRhythmPattern;
var ScaleType;
(function (ScaleType) {
    ScaleType[ScaleType["Major"] = 0] = "Major";
    ScaleType[ScaleType["Minor"] = 1] = "Minor";
    ScaleType[ScaleType["MinorPentatonic"] = 2] = "MinorPentatonic";
    ScaleType[ScaleType["MajorPentatonic"] = 3] = "MajorPentatonic";
    ScaleType[ScaleType["Blues"] = 4] = "Blues";
    ScaleType[ScaleType["Spanish"] = 5] = "Spanish";
})(ScaleType = exports.ScaleType || (exports.ScaleType = {}));
function MakeScale(note, type, octaves) {
    var intStartNote = GetNoteNumber(note);
    var scale = new Array();
    if (type == ScaleType.Major) {
        var currentNote = intStartNote;
        scale.push(currentNote);
        var k;
        for (k = 0; k < octaves; k++) {
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
    else if (type == ScaleType.Minor) {
        var currentNote = intStartNote;
        scale.push(currentNote);
        var k;
        for (k = 0; k < octaves; k++) {
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
    else if (type == ScaleType.Spanish) {
        var currentNote = intStartNote;
        scale.push(currentNote);
        var k;
        for (k = 0; k < octaves; k++) {
            currentNote = currentNote + 1;
            scale.push(currentNote);
            currentNote = currentNote + 2;
            scale.push(currentNote);
            currentNote = currentNote + 2;
            scale.push(currentNote);
            currentNote = currentNote + 2;
            scale.push(currentNote);
            currentNote = currentNote + 2;
            scale.push(currentNote);
            currentNote = currentNote + 1;
            scale.push(currentNote);
            currentNote = currentNote + 2;
            scale.push(currentNote);
        }
    }
    else if (type == ScaleType.MinorPentatonic) {
        var currentNote = intStartNote;
        scale.push(currentNote);
        var k;
        for (k = 0; k < octaves; k++) {
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
    else if (type == ScaleType.Blues) {
        var currentNote = intStartNote;
        scale.push(currentNote);
        var k;
        for (k = 0; k < octaves; k++) {
            currentNote = currentNote + 3; //b3
            scale.push(currentNote);
            currentNote = currentNote + 2; //4
            scale.push(currentNote);
            scale.push(currentNote + 1);
            currentNote = currentNote + 2; // 5
            scale.push(currentNote);
            currentNote = currentNote + 3; // b7
            scale.push(currentNote);
            currentNote = currentNote + 2; // root
            scale.push(currentNote);
        }
    }
    else if (type == ScaleType.MajorPentatonic) {
        var currentNote = intStartNote;
        scale.push(currentNote);
        var k;
        for (k = 0; k < octaves; k++) {
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
    else {
        throw new Error("Scale type not handled");
    }
    return scale;
}
exports.MakeScale = MakeScale;
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
exports.AbstractChordPlayer = AbstractChordPlayer;
var Arpeggio1 = (function (_super) {
    __extends(Arpeggio1, _super);
    function Arpeggio1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Arpeggio1.prototype.PlayFourBarPattern = function (track, channel, chordChange) {
        track.addNote(channel, chordChange.Chord[0], exports.beat / 2);
        track.addNote(channel, chordChange.Chord[0] + 2, exports.beat / 2);
        track.addNote(channel, chordChange.Chord[1], exports.beat / 2);
        track.addNote(channel, chordChange.Chord[2], exports.beat / 2);
        track.addNote(channel, chordChange.Chord[0], exports.beat / 2);
        track.addNote(channel, chordChange.Chord[0] + 2, exports.beat / 2);
        track.addNote(channel, chordChange.Chord[1], exports.beat / 2);
        track.addNote(channel, chordChange.Chord[2], exports.beat / 2);
    };
    Arpeggio1.prototype.PlayThreeBarPattern = function (track, channel, chordChange) {
        track.addNote(channel, chordChange.Chord[0], exports.beat / 2);
        track.addNote(channel, chordChange.Chord[0] + 2, exports.beat / 2);
        track.addNote(channel, chordChange.Chord[1], exports.beat / 2);
        track.addNote(channel, chordChange.Chord[2], exports.beat / 2);
        track.addNote(channel, chordChange.Chord[0], exports.beat / 2);
        track.addNote(channel, chordChange.Chord[0] + 2, exports.beat / 2);
    };
    Arpeggio1.prototype.PlayTwoBarPattern = function (track, channel, chordChange) {
        track.addNote(channel, chordChange.Chord[0], exports.beat / 2);
        track.addNote(channel, chordChange.Chord[0] + 2, exports.beat / 2);
        track.addNote(channel, chordChange.Chord[1], exports.beat / 2);
        track.addNote(channel, chordChange.Chord[2], exports.beat / 2);
    };
    Arpeggio1.prototype.PlayOneBarPattern = function (track, channel, chordChange) {
        track.addNote(channel, chordChange.Chord[0], exports.beat / 2);
        track.addNote(channel, chordChange.Chord[2], exports.beat / 2);
    };
    return Arpeggio1;
}(AbstractChordPlayer));
exports.Arpeggio1 = Arpeggio1;
var BassPLayer1 = (function (_super) {
    __extends(BassPLayer1, _super);
    function BassPLayer1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.noteDelta = 24;
        return _this;
    }
    BassPLayer1.prototype.PlayFourBarPattern = function (track, channel, chordChange) {
        track.addNote(channel, chordChange.Chord[0] - this.noteDelta, exports.beat * 3);
        track.addNote(channel, chordChange.Chord[0] - this.noteDelta, exports.beat);
    };
    BassPLayer1.prototype.PlayThreeBarPattern = function (track, channel, chordChange) {
        track.addNote(channel, chordChange.Chord[0] - this.noteDelta, exports.beat * 3);
    };
    BassPLayer1.prototype.PlayTwoBarPattern = function (track, channel, chordChange) {
        track.addNote(channel, chordChange.Chord[0] - this.noteDelta, exports.beat * 2);
    };
    BassPLayer1.prototype.PlayOneBarPattern = function (track, channel, chordChange) {
        track.addNote(channel, chordChange.Chord[0] - this.noteDelta, exports.beat * 1);
    };
    return BassPLayer1;
}(AbstractChordPlayer));
exports.BassPLayer1 = BassPLayer1;
var BassPLayer2 = (function (_super) {
    __extends(BassPLayer2, _super);
    function BassPLayer2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.noteDelta = 24;
        return _this;
    }
    BassPLayer2.prototype.PlayFourBarPattern = function (track, channel, chordChange) {
        var i = 0;
        for (i = 0; i < 8; i++)
            track.addNote(channel, chordChange.Chord[0] - this.noteDelta, exports.beat / 2);
    };
    BassPLayer2.prototype.PlayThreeBarPattern = function (track, channel, chordChange) {
        var i = 0;
        for (i = 0; i < 6; i++)
            track.addNote(channel, chordChange.Chord[0] - this.noteDelta, exports.beat / 2);
    };
    BassPLayer2.prototype.PlayTwoBarPattern = function (track, channel, chordChange) {
        var i;
        for (i = 0; i < 4; i++)
            track.addNote(channel, chordChange.Chord[0] - this.noteDelta, exports.beat / 2);
    };
    BassPLayer2.prototype.PlayOneBarPattern = function (track, channel, chordChange) {
        track.addNote(channel, chordChange.Chord[0] - this.noteDelta, exports.beat / 2);
        track.addNote(channel, chordChange.Chord[0] - this.noteDelta, exports.beat / 2);
    };
    return BassPLayer2;
}(AbstractChordPlayer));
exports.BassPLayer2 = BassPLayer2;
var RandomPlayer = (function (_super) {
    __extends(RandomPlayer, _super);
    function RandomPlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RandomPlayer.prototype.PlayFourBarPattern = function (track, channel, chordChange) {
        var i = 0;
        for (i = 0; i < 8; i++) {
            track.addNote(channel, SelectRandom(chordChange.Chord), exports.beat / 2);
        }
    };
    RandomPlayer.prototype.PlayThreeBarPattern = function (track, channel, chordChange) {
        var i = 0;
        for (i = 0; i < 6; i++) {
            track.addNote(channel, SelectRandom(chordChange.Chord), exports.beat / 2);
        }
    };
    RandomPlayer.prototype.PlayTwoBarPattern = function (track, channel, chordChange) {
        var i;
        for (i = 0; i < 4; i++) {
            track.addNote(channel, SelectRandom(chordChange.Chord), exports.beat / 2);
        }
    };
    RandomPlayer.prototype.PlayOneBarPattern = function (track, channel, chordChange) {
        track.addNote(channel, chordChange.Chord[0], exports.beat / 2);
        track.addNote(channel, chordChange.Chord[0] + 12, exports.beat / 2);
    };
    return RandomPlayer;
}(AbstractChordPlayer));
exports.RandomPlayer = RandomPlayer;
var BassPLayer3 = (function (_super) {
    __extends(BassPLayer3, _super);
    function BassPLayer3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BassPLayer3.prototype.PlayFourBarPattern = function (track, channel, chordChange) {
        track.addNote(channel, chordChange.Chord[0] - 12, exports.beat * 1.5);
        track.addNote(channel, chordChange.Chord[0] - 12, exports.beat * 1.5);
        track.addNote(channel, chordChange.Chord[0] - 12, exports.beat);
    };
    BassPLayer3.prototype.PlayThreeBarPattern = function (track, channel, chordChange) {
        track.addNote(channel, chordChange.Chord[0] - 12, exports.beat * 1.5);
        track.addNote(channel, chordChange.Chord[0] - 12, exports.beat * 1.5);
        track.addNote(channel, chordChange.Chord[0] - 12, exports.beat);
    };
    BassPLayer3.prototype.PlayTwoBarPattern = function (track, channel, chordChange) {
        track.addNote(channel, chordChange.Chord[0] - 12, exports.beat * 2);
    };
    BassPLayer3.prototype.PlayOneBarPattern = function (track, channel, chordChange) {
        track.addNote(channel, chordChange.Chord[0] - 12, exports.beat);
    };
    return BassPLayer3;
}(AbstractChordPlayer));
exports.BassPLayer3 = BassPLayer3;
var SimplePlayer = (function (_super) {
    __extends(SimplePlayer, _super);
    function SimplePlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SimplePlayer.prototype.PlayFourBarPattern = function (track, channel, chordChange) {
        track.addChord(channel, chordChange.Chord, chordChange.Length * exports.beat);
    };
    SimplePlayer.prototype.PlayThreeBarPattern = function (track, channel, chordChange) {
        track.addChord(channel, chordChange.Chord, chordChange.Length * exports.beat);
    };
    SimplePlayer.prototype.PlayTwoBarPattern = function (track, channel, chordChange) {
        track.addChord(channel, chordChange.Chord, chordChange.Length * exports.beat);
    };
    SimplePlayer.prototype.PlayOneBarPattern = function (track, channel, chordChange) {
        track.addChord(channel, chordChange.Chord, chordChange.Length * exports.beat);
    };
    return SimplePlayer;
}(AbstractChordPlayer));
exports.SimplePlayer = SimplePlayer;
var OffBeatPlayer = (function (_super) {
    __extends(OffBeatPlayer, _super);
    function OffBeatPlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OffBeatPlayer.prototype.PlayFourBarPattern = function (track, channel, chordChange) {
        track.addNote(channel, 0, exports.beat, 0);
        track.addChord(channel, chordChange.Chord, exports.beat);
        track.addNote(channel, 0, exports.beat, 0);
        track.addChord(channel, chordChange.Chord, exports.beat);
    };
    OffBeatPlayer.prototype.PlayThreeBarPattern = function (track, channel, chordChange) {
        track.addNote(channel, 0, exports.beat, 0);
        track.addChord(channel, chordChange.Chord, exports.beat);
        track.addNote(channel, 0, exports.beat, 0);
    };
    OffBeatPlayer.prototype.PlayTwoBarPattern = function (track, channel, chordChange) {
        track.addNote(channel, 0, exports.beat, 0);
        track.addChord(channel, chordChange.Chord, exports.beat);
    };
    OffBeatPlayer.prototype.PlayOneBarPattern = function (track, channel, chordChange) {
        track.addChord(channel, chordChange.Chord, exports.beat);
    };
    return OffBeatPlayer;
}(AbstractChordPlayer));
exports.OffBeatPlayer = OffBeatPlayer;
