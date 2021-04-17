var quoteArry = [
  "https://drive.google.com/file/d/1ZgOP3-SJ1pdxSbn8_KprodZWB4eMRkb_/preview",
  "https://drive.google.com/file/d/145OxBeNxkuD5KlB4rI8bcfisRmfsYNU3/preview",
  "https://drive.google.com/file/d/1fqvmiNZmYWdnwI9hMtzHxox07OhY5AYV/preview",
  "https://drive.google.com/file/d/1enTF_xygExlKZrWsaKeyLMYk8tFn59bi/preview",
  "https://drive.google.com/file/d/14njXAfuHmSCUvZ6AjrbupLPfC810WZ7p/preview",
  "https://drive.google.com/file/d/1L0wq_lF6Cr_UyC9X365lUT3-odvSPn9k/preview",
  "https://drive.google.com/file/d/1zqaNwcWCQ3znNdJ1UIw-AtCPrQDibhb1/preview",
  "https://drive.google.com/file/d/1s6a3pZvdD-N8j4pDSfsE96ToNHo5Oe9M/preview",
  "https://drive.google.com/file/d/1TAuu1PriJt2_SGEJMD4odG4UTGhfeTLo/preview",
  "https://drive.google.com/file/d/1Frfnejw1piWfdopbCee6VckwLvaPE0KW/preview",
  "https://drive.google.com/file/d/1NIPzgfuG91PjYWa0FvcpBNna7mGB3p0u/preview",
  "https://drive.google.com/file/d/1RBVTcjiiz-tBomNRZgAfS_Va0bldu_W5/preview"
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
  document.getElementById('link-2').innerHTML = "Blue Exorcist Kyoto Saga  Episode " + (i + 1);
}
