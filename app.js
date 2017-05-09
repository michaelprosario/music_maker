var nunjucks  =  require('nunjucks');
var express   =  require('express');
var bodyParser = require('body-parser');
var fs =         require('fs');
var app       =  express();
var Midi =       require('jsmidgen');
var reload =     require('require-reload')(require)
var check =      require('syntax-error');

app.listen(3000);
app.use(express.static('public'))
app.use(bodyParser.json());

nunjucks.configure('views', {
  autoescape: true,
  express   : app,
  watch: true
});

app.get('/', function(req, res) {
  res.render('index.html', {
    title : 'Welcome to my first music maker page'
  });

});


app.post('/build_music', function(request, response){
    var result = {}



    var fileName = "_temp.js";
    fs.writeFile(fileName, request.body.jscode, function(err){	
	    if(err) {
		    result = { status: "ERROR", message: "Issue writing file.", code:1 }
	    }else{
			var src = fs.readFileSync(fileName);
			var err = check(src, fileName);
			if (err) {
			    result = { status: "ERROR", message: "Syntax Error", code:2, details: err }
			}else{
			    try{
				    var temp = reload("./_temp");
				    var tracks = temp.main();

				    var file = new Midi.File();
				    tracks.forEach(function(track){
					file.addTrack(track);
				    });

				    fs.writeFileSync('./public/songs/test.mid', file.toBytes(), 'binary');          
				    result = { status: "OK", fileName: "test.mid" }
			    }
			    catch(ex){
				    result = { status: "ERROR", message: ex.toString(), code:3 }
				    				
			    }


		    }
		    response.send(JSON.stringify(result)); 
	    }

    });	

    
});
