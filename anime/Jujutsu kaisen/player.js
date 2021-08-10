var quoteArry = [
  "https://drive.google.com/file/d/1NA45LLh-81aYWRuMYOK_C61p1Jx5Air3/preview",
  "https://drive.google.com/file/d/1rR10UmuEu2iG6pX9AQ5TqSVzKyaqQnOL/preview",
  "https://drive.google.com/file/d/19ArQ0842U9yBOTNvnKaMTx6UG6Sqet5f/preview",
  "https://drive.google.com/file/d/1FydR6oCl6VQbkGcPf19opvPIMtjkyse9/preview",
  "https://drive.google.com/file/d/1arh9adpZVZFfYT0W1RJvbTkDe2tZlWsh/preview",
  "https://drive.google.com/file/d/1oRIpC-BjUvpFd-YldV6sNNkUIUqOVUJP/preview",
  "https://drive.google.com/file/d/1pf3wXqnsUJvOrYsBNV9v3g6ASJrVjCso/preview",
  "https://drive.google.com/file/d/1eYzGoL43Z3qatHRcCIxG0LMUEHoNjtN4/preview",
  "https://drive.google.com/file/d/1PXWUpN6W0gfnevTymjDdZcIrF_2QGwko/preview",
  "https://drive.google.com/file/d/1LAPeULLgJBqvynDtWKychwz79W8bXYb1/preview",
  "https://drive.google.com/file/d/1sLOnBHYfDyp5-7rIgFiNdcZFoDsQOdYs/preview",
  "https://drive.google.com/file/d/1rZuxs0oC1K_uCraVNYLghjryT-G5QzHB/preview",
  "https://drive.google.com/file/d/1ccm096EPcGyDsDA8iel_Cz8_Q7u_JHoA/preview",
  "https://drive.google.com/file/d/1tIkFDmtemagFsBU7AK1r8gnsmZ-wuxu6/preview",
  "https://drive.google.com/file/d/1E8TdVTQX44Q0afcke0S0-bo3l8u83CA3/preview",
  "https://drive.google.com/file/d/1rqXlx4m8Pf2GqS6fu8mOojlLsmr-2hYh/preview",
  "https://drive.google.com/file/d/1-sKxqYZN40Pe2KXjM9kaXn-kTF6JI6Yg/preview",
  "https://drive.google.com/file/d/1PTI1IWgTrqvyTo4XkQQ0FcRt_yCkI9RO/preview",
  "https://drive.google.com/file/d/1NMNK5b6WAvTxlAFj5OzdEpbp6Ex1P8Aq/preview",
  "https://drive.google.com/file/d/1vqcohMVyhc6Zjlsaybv0GdCDlGcg7rcg/preview",
  "https://drive.google.com/file/d/1LatkJ6UTH2xhG9O81w0f77uEYsxZ3WyV/preview",
  "https://drive.google.com/file/d/1Gm7vmZ_H2Y5ZvVU_QPiMxrszvukgyrPA/preview",
  "https://drive.google.com/file/d/1DYHKON8P5MPisDTwJo_hTnOGVwKjF5TS/preview",
  "https://drive.google.com/file/d/1LWe_V64BYKMs6lnuyd46yfFStLnK2V6f/preview",
  "https://drive.google.com/file/d//preview"
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
  document.getElementById('link-2').innerHTML = "Jujutsu Kaisen Episode " + (i + 1);
}
