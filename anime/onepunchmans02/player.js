var quoteArry = [
  "https://drive.google.com/file/d/1MRekkapqDy2nKWuB73JX32Z3lzBJuGaB/preview",
  "https://drive.google.com/file/d/1BMWyz-w0ouTNc62i-pqR1ZG4lhu9RRlL/preview",
  "https://drive.google.com/file/d/1X0lqHPPOf_3K-BLcBdQG24pBHHobHMlV/preview",
  "https://drive.google.com/file/d/1E-fiDbGlM_N37-nHTrzb_ButeiQHFZPE/preview",
  "https://drive.google.com/file/d/1blu0aaiw37jd-kFY3ufnJzgMmoZ4vZJB/preview",
  "https://drive.google.com/file/d/1qMQInXaNc3zHKezsFbWZydnMzEDFufgg/preview",
  "https://drive.google.com/file/d/1O0srcPZ9S5Y4JIY1ae5kvtDetWWsy6sT/preview",
  "https://drive.google.com/file/d/1Xm4drVVGcEEimPrYzdnZfw43UvuRInhE/preview",
  "https://drive.google.com/file/d/1ydQ0-FrgxLOxkLaVb1Acvogx0lgfwygD/preview",
  "https://drive.google.com/file/d/1BdxosZBXUsHmwbDP02kjMXJGnRMn15iy/preview",
  "https://drive.google.com/file/d/1vh3EQnzMkP7e0N-79_9l8GE8gbu1bLHA/preview",
  "https://drive.google.com/file/d/1AJY6SCLDtGm9P8ld43m3tXGXriYHl2Tv/preview"
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
  document.getElementById('link-2').innerHTML = "One Punch Man Season 2  Episode " + (i + 1);
}
