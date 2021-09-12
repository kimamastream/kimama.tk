var quoteArry = [
  "https://drive.google.com/file/d/1lJ8ScpAzpyI21pzPDmsxK-15c1jFks1z/preview",
  "https://drive.google.com/file/d/1gxrefAYq1CFxjwOEuumyP9eCY79FoJ-u/preview",
  "https://drive.google.com/file/d/1-u8DQl-G96bhKMHKyHUdzs4xYa_8AjWy/preview",
  "https://drive.google.com/file/d/1qNYBAn7f61bMvR-YfNs5XHpr4r57CXEW/preview",
  "https://drive.google.com/file/d/10XiqNrAhUjAkYzhmumfLPWXzdErldWox/preview",
  "https://drive.google.com/file/d/1Wdsp6uwzTRQiFgYTCRo9KwFWUKh929ng/preview",
  "https://drive.google.com/file/d/1cirEU6RMQus0hRkpvTLdubu7Aw80uUOb/preview",
  "https://drive.google.com/file/d/1dEOCfRjgN4DfsU6Q_u2LjhEhOWbI7VoD/preview",
  "https://drive.google.com/file/d/1oQzbBWu5KjBCc_6d3QKx9vNkvGRJACGh/preview",
  "https://drive.google.com/file/d/1r93XXc3mIOZy96R-eHqpPRFYpcJe2oSM/preview",
  "https://drive.google.com/file/d/1aIqmNLcWYKJScIq4ysxWqtVR6s2iMFel/preview",
  "https://drive.google.com/file/d/10F-WMteZytB5nME2eest7WLQXFbMDole/preview"
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
  document.getElementById('link-2').innerHTML = "One Punch Man Season 1  Episode " + (i + 1);
}
