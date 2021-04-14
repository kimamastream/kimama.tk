var quoteArry = [
  "https://drive.google.com/file/d/1ygLuKoA8C8aW2jmS40evmdG5auroEJW0/preview",
  "https://drive.google.com/file/d/1p3ZG-RLTAIeTK9t_F75zYaWB2jC2NxQR/preview",
  "https://drive.google.com/file/d/1iN69AnjdSARffTVgfg3-JSohwdSn5gYe/preview",
  "https://drive.google.com/file/d/1TqJUrTC8igVihdAY_Z-rj7jWMZWzVXan/preview",
  "https://drive.google.com/file/d/1Os5Tei_FsNQNRjHFxMh9IjSmB8VHGsFg/preview",
  "https://drive.google.com/file/d/1v5Ud4ZP0r_L5oHzJ9-Pv6X2svUp5IeMt/preview",
  "https://drive.google.com/file/d/1e22kubo0quqWu3Anq8zAhWDoWaYkwP55/preview",
  "https://drive.google.com/file/d/1bdYjILNTQS4OxO7nLANLAqO1h9AFd4wD/preview",
  "https://drive.google.com/file/d/1KqK5IYcYE__L2GFokdGH7llZX8PEwdyh/preview",
  "https://drive.google.com/file/d/18_9fLhKWhMxZ8Ltfr58z2pYGIKR2IFGX/preview",
  "https://drive.google.com/file/d/1hQzB_a0bjzY7sLzPyMSEOj8ccA_WyrLj/preview",
  "https://drive.google.com/file/d/1zXCuIM8A3a-q4zKpHnn8BZhWnz_SSW7b/preview"
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
  document.getElementById('link-2').innerHTML = "Attack On Titan Season 2  Episode " + (i + 1);
}
