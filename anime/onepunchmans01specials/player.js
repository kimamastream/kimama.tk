var quoteArry = [
  "https://drive.google.com/file/d/1K0rx70M-QJuLqw2xORBaZX-Mmt--wVjp/preview",
  "https://drive.google.com/file/d/1w5458236_A-44tQ_Ixy96pvBVu-0Rqx8/preview",
  "https://drive.google.com/file/d/1bmVDiWiybyK_bHh5mofZzLZohxYIp3dg/preview",
  "https://drive.google.com/file/d/1o54OIHvwQ18teQq-jD6qGLdBhnhFVfGx/preview",
  "https://drive.google.com/file/d/1l07yDuole-klWUbBzwhNZJ8lwQIkK3Ke/preview",
  "https://drive.google.com/file/d/1pW1rJmwJ_4pJ5rdMpE6j94_RafrsXyC9/preview"
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


function generate_episode(i) {
  if (quoteArry[i] === undefined) {
  	return;
  }

  current_episode = i;
  document.getElementById('link-1').src = quoteArry[i];
  document.getElementById('link-2').innerHTML = "One Punch Man Season 1 Sp " + (i + 1);
}
