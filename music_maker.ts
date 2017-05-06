var fs = require('fs');
var Midi = require('jsmidgen');
var Util = require('jsmidgen').Util;
import mm = require('./MusicMaker')

var beat=128;


abstract class AbstractChordPlayer{
    abstract PlayFourBarPattern(track,channel, chordChange);
    abstract PlayThreeBarPattern(track,channel, chordChange);
    abstract PlayTwoBarPattern(track,channel, chordChange);
    abstract PlayOneBarPattern(track,channel, chordChange);

    PlayFromChordChanges(track,chordList,channel){
        
        for(var chordChange of chordList){
            if(chordChange.Length == 2){        
                this.PlayTwoBarPattern(track, channel, chordChange);
            }
            else if(chordChange.Length == 4)
            {
                this.PlayFourBarPattern(track, channel, chordChange);
            }
            else if(chordChange.Length == 3)
            {
                this.PlayFourBarPattern(track, channel, chordChange);
            }
            else if(chordChange.Length == 1)
            {
                this.PlayOneBarPattern(track, channel, chordChange);
            }else{
                track.addChord(channel, chordChange.Chord, chordChange.Length*128);
            }
            
        }
    }    
}

class Arpeggio1 extends AbstractChordPlayer {

    PlayFourBarPattern(track,channel, chordChange){
        track.addNote(channel, chordChange.Chord[0], beat/2);
        track.addNote(channel, chordChange.Chord[0]+2, beat/2);
        track.addNote(channel, chordChange.Chord[1], beat/2);
        track.addNote(channel, chordChange.Chord[2], beat/2);

        track.addNote(channel, chordChange.Chord[0], beat/2);
        track.addNote(channel, chordChange.Chord[0]+2, beat/2);
        track.addNote(channel, chordChange.Chord[1], beat/2);
        track.addNote(channel, chordChange.Chord[2], beat/2);
    }

    PlayThreeBarPattern(track,channel, chordChange){
        track.addNote(channel, chordChange.Chord[0], beat/2);
        track.addNote(channel, chordChange.Chord[0]+2, beat/2);
        track.addNote(channel, chordChange.Chord[1], beat/2);
        track.addNote(channel, chordChange.Chord[2], beat/2);
        track.addNote(channel, chordChange.Chord[0], beat/2);
        track.addNote(channel, chordChange.Chord[0]+2, beat/2);
    }
    

    PlayTwoBarPattern(track,channel, chordChange){
        track.addNote(channel, chordChange.Chord[0], beat/2);
        track.addNote(channel, chordChange.Chord[0]+2, beat/2);
        track.addNote(channel, chordChange.Chord[1], beat/2);
        track.addNote(channel, chordChange.Chord[2], beat/2);
    }

    PlayOneBarPattern(track,channel, chordChange){
        track.addNote(channel, chordChange.Chord[0], beat/2);
        track.addNote(channel, chordChange.Chord[2], beat/2);
    }

}


class BasePLayer1 extends AbstractChordPlayer {

    PlayFourBarPattern(track,channel, chordChange){
        track.addNote(channel, chordChange.Chord[0]-12, beat*3);
        track.addNote(channel, chordChange.Chord[0]-12, beat);
    }

    PlayThreeBarPattern(track,channel, chordChange){
        track.addNote(channel, chordChange.Chord[0]-12, beat*3);        
    }
    
    PlayTwoBarPattern(track,channel, chordChange){
        track.addNote(channel, chordChange.Chord[0]-12, beat*2);
    }

    PlayOneBarPattern(track,channel, chordChange){
        track.addNote(channel, chordChange.Chord[0]-12, beat*1);
    }
}

class BasePLayer2 extends AbstractChordPlayer {

    PlayFourBarPattern(track,channel, chordChange){
        var i=0;

        for(i=0;i<8;i++)
            track.addNote(channel, chordChange.Chord[0]-12, beat/2);
        
    }

    PlayThreeBarPattern(track,channel, chordChange)
    {
        var i=0;

        for(i=0;i<6;i++)
            track.addNote(channel, chordChange.Chord[0]-12, beat/2);
    }
    
    PlayTwoBarPattern(track,channel, chordChange){
        var i;
        for(i=0;i<4;i++)
            track.addNote(channel, chordChange.Chord[0]-12, beat/2);

    }

    PlayOneBarPattern(track,channel, chordChange){
        track.addNote(channel, chordChange.Chord[0]-12, beat/2);
        track.addNote(channel, chordChange.Chord[0]-12, beat/2);
    }
}

class RandomPlayer extends AbstractChordPlayer {

    PlayFourBarPattern(track,channel, chordChange){
        var i=0;

        for(i=0;i<8;i++){
            track.addNote(channel, mm.SelectRandom(chordChange.Chord), beat/2);
        }
        
    }

    PlayThreeBarPattern(track,channel, chordChange)
    {
        var i=0;

        for(i=0;i<6;i++){
            track.addNote(channel, mm.SelectRandom(chordChange.Chord), beat/2);
        }
    }
    
    PlayTwoBarPattern(track,channel, chordChange){
        var i;
        for(i=0;i<4;i++){
            track.addNote(channel, mm.SelectRandom(chordChange.Chord), beat/2);
        }

    }

    PlayOneBarPattern(track,channel, chordChange){
        track.addNote(channel, chordChange.Chord[0], beat/2);
        track.addNote(channel, chordChange.Chord[0]+12, beat/2);
    }
}


class BasePLayer3 extends AbstractChordPlayer {

    PlayFourBarPattern(track,channel, chordChange){
        track.addNote(channel, chordChange.Chord[0]-12, beat*1.5);
        track.addNote(channel, chordChange.Chord[0]-12, beat*1.5);
        track.addNote(channel, chordChange.Chord[0]-12, beat);
    }

    PlayThreeBarPattern(track,channel, chordChange){
        track.addNote(channel, chordChange.Chord[0]-12, beat*1.5);
        track.addNote(channel, chordChange.Chord[0]-12, beat*1.5);
        track.addNote(channel, chordChange.Chord[0]-12, beat);
    }
    
    PlayTwoBarPattern(track,channel, chordChange){
        track.addNote(channel, chordChange.Chord[0]-12, beat*2);

    }

    PlayOneBarPattern(track,channel, chordChange){
        track.addNote(channel, chordChange.Chord[0]-12, beat);
    }
}

class SimplePlayer extends AbstractChordPlayer {

    PlayFourBarPattern(track,channel, chordChange){
        track.addChord(channel, chordChange.Chord, chordChange.Length*beat);
    }

    PlayThreeBarPattern(track,channel, chordChange){
        track.addChord(channel, chordChange.Chord, chordChange.Length*beat);    
    }
    
    PlayTwoBarPattern(track,channel, chordChange){
        track.addChord(channel, chordChange.Chord, chordChange.Length*beat);
    }

    PlayOneBarPattern(track,channel, chordChange){
        track.addChord(channel, chordChange.Chord, chordChange.Length*beat);
    }
}

class OffBeatPlayer extends AbstractChordPlayer {

    PlayFourBarPattern(track,channel, chordChange){
        track.addNote(channel, 0, beat, 0)
        track.addChord(channel, chordChange.Chord, beat);
        track.addNote(channel, 0, beat, 0)
        track.addChord(channel, chordChange.Chord, beat);
    }

    PlayThreeBarPattern(track,channel, chordChange){
        track.addNote(channel, 0, beat, 0)
        track.addChord(channel, chordChange.Chord, beat);
        track.addNote(channel, 0, beat, 0)
    }
    
    PlayTwoBarPattern(track,channel, chordChange){
        track.addNote(channel, 0, beat, 0)
        track.addChord(channel, chordChange.Chord, beat);
    }

    PlayOneBarPattern(track,channel, chordChange){
        track.addChord(channel, chordChange.Chord, beat);
    }
}



function demo4(){
        
        var file = new Midi.File();
        var track;
        
        track = new Midi.Track();
        track.setTempo(130);
        file.addTrack(track);

        var chordList = new Array();



        mm.Repeat(8, function()
        {
            chordList.push(new mm.ChordChange(mm.MakeChord("e4", mm.ChordType.Minor),4));
            chordList.push(new mm.ChordChange(mm.MakeChord("c4", mm.ChordType.Major),4));
            chordList.push(new mm.ChordChange(mm.MakeChord("d4", mm.ChordType.Major),4));
            chordList.push(new mm.ChordChange(mm.MakeChord("c4", mm.ChordType.Major),4));
        })

        var track = new Midi.Track();
        track.setInstrument(7)
        var p = new RandomPlayer();
        p.PlayFromChordChanges(track,chordList,0);
        file.addTrack(track);

        /*
        track = new Midi.Track();
        track.setInstrument(7)
        p = new OffBeatPlayer()
        p.PlayFromChordChanges(track,chordList,0);
        file.addTrack(track);
        */

        
        
        var track = new Midi.Track();
        var bp = new BasePLayer1();
        bp.PlayFromChordChanges(track,chordList,1);
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