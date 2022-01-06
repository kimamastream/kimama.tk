var quoteArry = [
  "https://drive.google.com/file/d/1hbqKnI6BXLbQjTa73HkolmwgblZyNrkO/preview",
  "https://drive.google.com/file/d/1nDlCsUoK_bFkzc4lZ_yqMfB2sQbgBIKQ/preview",
  "https://drive.google.com/file/d/1O9aik7WAFuEjniU8-h7JbQyzGYurylhP/preview",
  "https://drive.google.com/file/d/1MpppS6MvfVpTDAfiTAEbYy6njnyBxODF/preview",
  "https://drive.google.com/file/d/18TZ-j2HHKyAtAbyzWf2tqqcwbYQwKD5s/preview",
  "https://drive.google.com/file/d/1Z7qVyrEtYUqacHoBAeg6VqN1XKq0l9p3/preview",
  "https://drive.google.com/file/d/1a6aTgicCGi5iVY_IOzTA6GObkOPLd67p/preview",
  "https://drive.google.com/file/d/16y1VkF8QFnfhMB-aFCfDS7GcKEPkfp5p/preview",
  "https://drive.google.com/file/d/1rjchmLrFR8A9iF6y10xwVzrTqTCf7p66/preview"
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


function generate_episode(i) {
  if (quoteArry[i] === undefined) {
  	return;
  }

  current_episode = i;
  document.getElementById('link-1').src = quoteArry[i];
  document.getElementById('link-2').innerHTML = "The Dragon Prince Season 2  Episode " + (i + 1);
}
