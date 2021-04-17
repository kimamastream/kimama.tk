var quoteArry = [
  "https://drive.google.com/file/d/1uJooIA3pvHee5GfICiYwZNSRxnlCzzxC/preview",
  "https://drive.google.com/file/d/1Mm8oLEr5CJnTfTSPYcCy8kQQhqZ1M3a4/preview",
  "https://drive.google.com/file/d/1wg3TTbn3ac2BmVcFOgBAt4Bp1TlWWUnN/preview",
  "https://drive.google.com/file/d/1-8ifLRFqZ5qLetKJBnmmJj0ZgxUV0wEv/preview",
  "https://drive.google.com/file/d/1N1QvWeJfdMNwk7xfG3n9eRJ03bXfk9fl/preview",
  "https://drive.google.com/file/d/1lVVkd5sVpsVfaaIjjlGQcP0Meim4u7zB/preview",
  "https://drive.google.com/file/d/15kTANiNM1NjJnb5t3XZWAbWerBMci7jy/preview",
  "https://drive.google.com/file/d/1qGhn_RCaeEtofj-CeGCdxlt46g_FN4JZ/preview",
  "https://drive.google.com/file/d/1F6Q1M1b7TQExhx-GJyTWNb_28mnZr0DC/preview",
  "https://drive.google.com/file/d/1f5DkVUc9tVIvZgoktZjtrM8YkO2KaaXT/preview",
  "https://drive.google.com/file/d/11px_eKQWqOI05_XcdlcGkoxw9lrkpLR6/preview",
  "https://drive.google.com/file/d/1x5C8UO0r5p3Ngrb8Rm1a-OAiqWBs3To_/preview",
  "https://drive.google.com/file/d/1ksx3-FucGRmAG5RB71AToYnaQ8G_ZI-J/preview",
  "https://drive.google.com/file/d/1qTFqFnxYdNL07btfIKqXYlHd7EdHB42Q/preview",
  "https://drive.google.com/file/d/1Oio0-E2VswqTpgtiGf-TVGjHrTLGVKQL/preview",
  "https://drive.google.com/file/d/1-9hWSvillipazIzCi5R4-NlldMG1buyQ/preview",
  "https://drive.google.com/file/d/1pRh9w2vGIqoVkbpVKPY8OuCcfefRte8K/preview",
  "https://drive.google.com/file/d/1PuxCFVPuxULNCkBNdQM2ZKbOWVv32mWk/preview",
  "https://drive.google.com/file/d/1GS26jWVFVECtnOrxRJdGruajrkqdWLo4/preview",
  "https://drive.google.com/file/d/1smcF9S62LNc-Vfm6QC_Z7kUUAy-zjnT6/preview",
  "https://drive.google.com/file/d/1fa33LgfIZPP4oo2xnWjsrUiPA0CcX6VA/preview",
  "https://drive.google.com/file/d/1OOK_v8O5d0QwqexvvfM-qvLMVT61lnmj/preview",
  "https://drive.google.com/file/d/17sb36r8uZQmac23PAN8JxakWIYZrGg9j/preview",
  "https://drive.google.com/file/d/16mmXO7ucTLSxgC3HfcsWB7dJbVE4lLwr/preview",
  "https://drive.google.com/file/d/1sZoN4XX_JTHOwtBTquc8We6OtS0fwO_8/preview"
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

var btn13 = document.querySelector('.btn13');
btn13.addEventListener('click', function() { generate_episode(12); });

var btn14 = document.querySelector('.btn14');
btn14.addEventListener('click', function() { generate_episode(13); });

var btn15 = document.querySelector('.btn15');
btn15.addEventListener('click', function() { generate_episode(14); });

var btn16 = document.querySelector('.btn16');
btn16.addEventListener('click', function() { generate_episode(15); });

var btn17 = document.querySelector('.btn17');
btn17.addEventListener('click', function() { generate_episode(16); });

var btn18 = document.querySelector('.btn18');
btn18.addEventListener('click', function() { generate_episode(17); });

var btn19 = document.querySelector('.btn19');
btn19.addEventListener('click', function() { generate_episode(18); });

var btn20 = document.querySelector('.btn20');
btn20.addEventListener('click', function() { generate_episode(19); });

var btn21 = document.querySelector('.btn21');
btn21.addEventListener('click', function() { generate_episode(20); });

var btn22 = document.querySelector('.btn22');
btn22.addEventListener('click', function() { generate_episode(21); });

var btn23 = document.querySelector('.btn23');
btn23.addEventListener('click', function() { generate_episode(22); });

var btn24 = document.querySelector('.btn24');
btn24.addEventListener('click', function() { generate_episode(23); });

var btn25 = document.querySelector('.btn25');
btn25.addEventListener('click', function() { generate_episode(24); });


function generate_episode(i) {
  if (quoteArry[i] === undefined) {
  	return;
  }

  current_episode = i;
  document.getElementById('link-1').src = quoteArry[i];
  document.getElementById('link-2').innerHTML = "Assassination Classroom S02  Episode " + (i + 1);
}
