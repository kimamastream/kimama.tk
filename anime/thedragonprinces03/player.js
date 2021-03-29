var quoteArry = [
  "https://drive.google.com/file/d/1N2MQPL3feKIMCG4oOXdCJBEfDDwB8ox0/preview",
  "https://drive.google.com/file/d/1JvGzvo3VAlYY17X9q0DzaLveghbSXP0G/preview",
  "https://drive.google.com/file/d/1XfNWn53hmQe9ohi01Y8fAhf_PnW1WoIf/preview",
  "https://drive.google.com/file/d/1EayAEDox-FC8D_0CMSZ5wLOdM41Fu0QJ/preview",
  "https://drive.google.com/file/d/1ul-WavuXtRg4aBY1LPyCPgk-E5oNnMaz/preview",
  "https://drive.google.com/file/d/1-Xp7ZKAcYINO8kjrID00EJtaTI5uMuIc/preview",
  "https://drive.google.com/file/d/1z7MHGhGBaf-DUnr3P3GuMLjfyPlY2R8h/preview",
  "https://drive.google.com/file/d/1yah28e6BmwF0pmjxadLfK9vAQQ_MQGKB/preview",
  "https://drive.google.com/file/d/1lE0tnR5d3qUXW4-H10AvA-0OxFV_fHEJ/preview"
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
  document.getElementById('link-2').innerHTML = "The Dragon Prince Season 3  Episode " + (i + 1);
}
