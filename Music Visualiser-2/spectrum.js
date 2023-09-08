function Spectrum(){
	this.name = "spectrum";

	this.draw = function(){
		push();
		var spectrum = fourier.analyze();
		noStroke();
		
		for (var i = 0; i< spectrum.length; i++){
			var y = map(i, 0, spectrum.length, 0, height);
		    var w = map(spectrum[i], 0, 255, 0, width);

			var colourStrength = map(spectrum[i], 0, 255, 255, 0);
			fill(spectrum[i], colourStrength, 0);
			
		    rect(0, y, w, height / spectrum.length);
  		}
	
		pop();
	};
}
