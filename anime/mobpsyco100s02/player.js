var quoteArry = [
  "https://drive.google.com/file/d/1SIIdcEq1rhHYej4QwhUBavVmme8fUzv1/preview",
  "https://drive.google.com/file/d/174aUasze7PBzY9xfR3AMpcRjPlNStSq0/preview",
  "https://drive.google.com/file/d/1jhk6CI7gMK6hcTxFVW6LlDcuh_aEX8pD/preview",
  "https://drive.google.com/file/d/1Y3WwJ7j_v4sgNOUVAuopw9n5p7jV_mu5/preview",
  "https://drive.google.com/file/d/1r5RpybFrdvCeIhRBEtaszr_vKk2mipEP/preview",
  "https://drive.google.com/file/d/1pUfXnCLankl76F8U1nmF9YB0wu4FMckV/preview",
  "https://drive.google.com/file/d/15auUcDDakBy6cmTZMmIydqprJAC3g6J8/preview",
  "https://drive.google.com/file/d/1d30Taaq2hO2l4D8BVuHacf7xB8Vph7gC/preview",
  "https://drive.google.com/file/d/1gy4pvvby3t5hAwUsn4JBB-PuFhWR9qUH/preview",
  "https://drive.google.com/file/d/1kSeoPPNBYmIe70Hl2oEpslAP1E4owFZA/preview",
  "https://drive.google.com/file/d/1Lf4D-HTxFFBBIPk20SOL15AZarUSV7sz/preview",
  "https://drive.google.com/file/d/1Ajs0zxcKvylDAIRNIZHe-NjNvJRio3tD/preview"
];

var current_episode = 0;

var nextbtn = document.querySelector('.nextbtn');
var prevbtn = document.querySelector('.prevbtn');

nextbtn.addEventListener('click', function() { generate_episode(current_episode + 1); });
prevbtn.addEventListener('click', function() { generate_episode(current_episode - 1); });

var btn1 = document.querySelector('.btn1');
btn1.addEventListener('click', function() { generate_episode(0); });

var btn2 = document.querySelector('.btn2');
btn2.addEventListener('click', function() { generate_episode(1); });

var btn3 = document.querySelector('.btn3');
btn3.addEventListener('click', function() { generate_episode(2); });

var btn4 = document.querySelector('.btn4');
btn4.addEventListener('click', function() { generate_episode(3); });

var btn5 = document.querySelector('.btn5');
btn5.addEventListener('click', function() { generate_episode(4); });

var btn6 = document.querySelector('.btn6');
btn6.addEventListener('click', function() { generate_episode(5); });

var btn7 = document.querySelector('.btn7');
btn7.addEventListener('click', function() { generate_episode(6); });

var btn8 = document.querySelector('.btn8');
btn8.addEventListener('click', function() { generate_episode(7); });

var btn9 = document.querySelector('.btn9');
btn9.addEventListener('click', function() { generate_episode(8); });

var btn10 = document.querySelector('.btn10');
btn10.addEventListener('click', function() { generate_episode(9); });

var btn11 = document.querySelector('.btn11');
btn11.addEventListener('click', function() { generate_episode(10); });

var btn12 = document.querySelector('.btn12');
btn12.addEventListener('click', function() { generate_episode(11); });


function generate_episode(i) {
  if (quoteArry[i] === undefined) {
  	return;
  }

  current_episode = i;
  document.getElementById('link-1').src = quoteArry[i];
  document.getElementById('link-2').innerHTML = "Mob Psycho 100 Season 2  Episode " + (i + 1);
}
