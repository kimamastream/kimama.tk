var quoteArry = [
  "https://drive.google.com/file/d/1cQzxHREZdV_0ccQAJxACjggQU5bXSAcD/preview",
  "https://drive.google.com/file/d/1OUce5_Rlkbbzf1HdpABheG2wO5_gGfZ2/preview",
  "https://drive.google.com/file/d/15Mu2WEf6hdXTTOaG_FfUSxgkLeFIourH/preview",
  "https://drive.google.com/file/d/1aJ0RxKdWXmGErEnpPDXAc8Nj2OgFByxo/preview",
  "https://drive.google.com/file/d/1K5mA6ZvR40BitasluzZrwMzpSWZfVOyB/preview",
  "https://drive.google.com/file/d/1RospdTfp3Upm-KcSwAMRb9hYwutiPVL7/preview",
  "https://drive.google.com/file/d/1rATEw3r3nRGyChYHjj1ujAh6d9HhpYAN/preview",
  "https://drive.google.com/file/d/1CABb3mp2pLRZp-4knVtNJC2W9tW_vRjb/preview",
  "https://drive.google.com/file/d/1HXPTPYqODwkxZfHJNQcmQOct9z3R6oLo/preview",
  "https://drive.google.com/file/d/1WkV1Ag0O7n8xupyStUhtaLDkEG0IqX9f/preview",
  "https://drive.google.com/file/d/1H1rAZlLoY3puCCZIS2wqzkbIVJZ9FOXA/preview",
  "https://drive.google.com/file/d/1CmtSmUQhdOBHnJsYoGihbR4u7Qb1UYOU/preview"
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
  document.getElementById('link-2').innerHTML = "Erased  Episode " + (i + 1);
}
