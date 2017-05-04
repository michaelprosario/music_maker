"use strict";
exports.__esModule = true;
var Util = require('jsmidgen').Util;
exports.Beat = 128;
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
            track.addNote(9, note, exports.Beat / 4);
        }
        else if (currentChar != "|") {
            track.addNote(9, 0, exports.Beat / 4, 0);
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
