var stars;
var poziomy;

function rysujChoinke(poziomy) {
	for (var k = 1; k <= poziomy ; k++) {
		stars = '';

		for(var l = poziomy-k; l >= 0 ; l--) {
			stars += ' '; 
		}

		for(var l = 1; l <= (k*2)-1 ; l++) {
			stars += '*'; 
		}

		console.log(stars);
	}

}


rysujChoinke(10)