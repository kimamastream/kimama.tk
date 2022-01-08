var quoteArry = [
  "https://drive.google.com/file/d/1mHj_dsfv8THlXgBcLlP7BdGneu9db9lV/preview",
  "https://drive.google.com/file/d/1f_ZHep1JZN2yG9tW6UxngJ5OxRij2wio/preview",
  "https://drive.google.com/file/d/1v7Zyk4180-hkFS51hNIWp2GFlx9-BqIb/preview",
  "https://drive.google.com/file/d/1MQZ4Fc2gEY88_tDmMgjyRe9EigUB8I-P/preview",
  "https://drive.google.com/file/d/1meleEo0kmNdEXVJ1YvSlR7tk0NBd3Xoi/preview",
  "https://drive.google.com/file/d/1TgeGKATqX1oBjzfMp3tanMiZ3WQDBG6A/preview",
  "https://drive.google.com/file/d/1VX2xOB9poOQpwLOhR7emCwlKeAIMWraZ/preview",
  "https://drive.google.com/file/d/1mtsf2a4RpuKMKEeRffUsv4xnAM44Osv8/preview",
  "https://drive.google.com/file/d/1UGJOx7bGxF4ufLJg9JsGJWE5m7Kpbupp/preview",
  "https://drive.google.com/file/d/1NN_NaddBa9fMNmsm0KcL9bCY7DzdoMMV/preview",
  "https://drive.google.com/file/d/1JpW_81-Wis588iB6XFGYb_S_UByenj7L/preview",
  "https://drive.google.com/file/d/1CIyjd6R-HEyoiiwmOIdksn5SBfhC13Ph/preview"
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
  document.getElementById('link-2').innerHTML = "Tokyo Ghoul  -  Episode " + (i + 1);
}
