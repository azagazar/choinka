var stars;
var poziomy = 5;

for (var k = 1; k <= poziomy ; k++) {
  stars = '';

  for(var l = poziomy-k; l >= 0 ; l--) {
    stars += ' '; 
  }

  for(var l = 1; l <= (k*2)-1 ; l++) {
    stars += '*'; 
  }

  console.log(stars);
  
  stars = stars + '**';
  
}
