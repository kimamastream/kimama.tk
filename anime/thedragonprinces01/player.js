var quoteArry = [
  "https://drive.google.com/file/d/1oi36fL1T188gIjLi3CnVWkQPb6qhTyrK/preview",
  "https://drive.google.com/file/d/1KoT6kMxLR_Rft9Otv1Y-ADMYlwij-hff/preview",
  "https://drive.google.com/file/d/1WGrrrOcR9ppj-Pr9pOT7zhWyr7J5TkWQ/preview",
  "https://drive.google.com/file/d/1hHy3nOMzhAWsU0LCLY7f3f5-_ONuc4eM/preview",
  "https://drive.google.com/file/d/1dc3YbUBulA0RswNXU8-bXo-7_qmN3hiE/preview",
  "https://drive.google.com/file/d/14UKppjDkS_wu08EVvXfbQ0SXf_hMHexl/preview",
  "https://drive.google.com/file/d/10D_cCcPghGkr8EwfoUaAGufjbU6QdsVf/preview",
  "https://drive.google.com/file/d/1XIK4phf-TV6H5WzwUN6a_JTx4BC4andj/preview",
  "https://drive.google.com/file/d/136aTiG0fNJViZVjXcIVAlBc35ypXtbhQ/preview"
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
  document.getElementById('link-2').innerHTML = "The Dragon Prince Season 1  Episode " + (i + 1);
}
