var quoteArry = [
  "https://drive.google.com/file/d/17DttvToA1QL1Xa0x6n0fy_ZqhfM1ep0-/preview",
  "https://drive.google.com/file/d/1gkbDNLHmtz6rkBI9rCG1vEcCLIEa_TwX/preview",
  "https://drive.google.com/file/d/1ZKlvjXmDwsHWZz-5NUCzshTqAO4Q0KIR/preview",
  "https://drive.google.com/file/d/1k3B42ywSzbOonK0bHbJpheWkwO-SgB0F/preview",
  "https://drive.google.com/file/d/1l5uXP43MaC3Z8Xb-3kmHn57VzJRYQOgb/preview",
  "https://drive.google.com/file/d/1ynaCMGocAiItFa-YQMQXj_x15lgDkgWu/preview",
  "https://drive.google.com/file/d/19HyonJpYKg3owQsNw8-7ZPucfFpq_l-z/preview",
  "https://drive.google.com/file/d/1EGq_mGUNtwTGPVxUUpWIclUI00ZzgyZQ/preview",
  "https://drive.google.com/file/d/17x4WkE8YOf7RZii1VvU-DyZWKeJnwm_A/preview",
  "https://drive.google.com/file/d/1644nFL660uwmR7BBA6fOfJ-m1dEg72g5/preview",
  "https://drive.google.com/file/d/1qekHRHLWPoCjJ4XTOJ983bEp1JFfcbyK/preview",
  "https://drive.google.com/file/d/1WiJrDZXkJMMLmD-0oB_daf_sr6a1Frpa/preview",
  "https://drive.google.com/file/d/1RNCNyCyUJJc0t6qDka-dAe2LpZoq_1wx/preview",
  "https://drive.google.com/file/d/14y7v3NhvCzH0ctQ4hGkz_RyVrDXCvegj/preview",
  "https://drive.google.com/file/d/1lNXvnLMtr48xMyhIrknnE71n7sRzttO0/preview",
  "https://drive.google.com/file/d/1kS4VvvO1g4rTZ1J6FbiHf5V0Hv7seKnp/preview",
  "https://drive.google.com/file/d/1ZUC9OvH-ACKQmEixao51QG1mw4MO5OXP/preview",
  "https://drive.google.com/file/d/1_pLH7WaWXp-taSlJZeF7s2Xi-eweyN3p/preview",
  "https://drive.google.com/file/d/1tDDKzpaM71iur70Io4UsC9UVaqRMMea2/preview",
  "https://drive.google.com/file/d/1ukh2Ty8erdLktPTkpoODy-B_xae3UXAG/preview",
  "https://drive.google.com/file/d/10IhDqotQEtq55CwcTEjF1AFRS7B1OykL/preview",
  "https://drive.google.com/file/d/1tpX8V6U88R062M6V8epJbpcAvHhqMsZv/preview",
  "https://drive.google.com/file/d/1bFNr4u-e3MlGfnPI9unIJbhBpSIB0Wwc/preview"
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


function generate_episode(i) {
  if (quoteArry[i] === undefined) {
  	return;
  }

  current_episode = i;
  document.getElementById('link-1').src = quoteArry[i];
  document.getElementById('link-2').innerHTML = "Steins;Gate 0 Episode " + (i + 1);
}
