function reportBuildMusicOk()
{
	var divAlert = document.getElementById("divAlert");
	divAlert.innerHTML = "Music building worked!";
}

function reportBuildMusicError(strError){
	var divAlert = document.getElementById("divAlert");
	divAlert.innerHTML = strError;	
}
function buildMusic(){
	var codeData = { jscode: editor.getValue() };
	$.ajax({
	   type: "POST",
	   url: "/build_music",
	   contentType: "application/json",
	   success: function (msg) {
			console.log(msg);
			var result = JSON.parse(msg);

		   if(result.status == "OK"){
			  reportBuildMusicOk();
			  var fileName = result.fileName;
			  MIDIjs.play('/songs/' + fileName);
		   }else{

			  if(result.details){
				reportBuildMusicError(result.details.message 
				                      + "| line:" + result.details.line
									  + "| column:" + result.details.column
									  + "| annotated:" + JSON.stringify(result.details.annotated)
									  );	
			  }else{ 
			  	reportBuildMusicError(result.message);
			  }
		   }
	   },
	   error: function(){
	       alert("error happened.")
	   },

	   data: JSON.stringify(codeData)
	});    

}


