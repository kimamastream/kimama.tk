var quoteArry = [
  "https://drive.google.com/file/d/1SmeefFI4mc4V0Fk4e37o-RXCyd-thhcl/preview",
  "https://drive.google.com/file/d/1MVp4WTNSpgLpeikcSecunVS6BheKSAGs/preview",
  "https://drive.google.com/file/d/1ZuOToUeP8TnFfiwRbIqqUxel_sLh7P4a/preview",
  "https://drive.google.com/file/d/16FGS-YbZTSQXO2PbEnekSLezchdaRhpR/preview",
  "https://drive.google.com/file/d/1MlFG74E09-phVJdqbhAQT9iiYDa2r5uP/preview",
  "https://drive.google.com/file/d/1ZTT-d08ClMB7oLEhKDXGXSYE2T-2q2eW/preview",
  "https://drive.google.com/file/d/1c6Pm1JsGS178K2LfXJX1zaVvHYzGely-/preview",
  "https://drive.google.com/file/d/1pSRTWQWSBnjPFsRr98-PKhf88gcl9cer/preview",
  "https://drive.google.com/file/d/11qJxaseSz3d1fmZ-AjWFVdxfHCjisOn3/preview",
  "https://drive.google.com/file/d/1pfrJr8n952sbgtfV0lRgHn6J3yONBzCo/preview",
  "https://drive.google.com/file/d/1YT8DvCKZ7TJRrT8nqxQbatwXWqev2Akx/preview",
  "https://drive.google.com/file/d/1aEkGm38rxG3VB8cJseZTUaK_0E18Ieli/preview",
  "https://drive.google.com/file/d/1k0H7MUMIDG9mO9hew6oHt_LPyOh3J7hE/preview",
  "https://drive.google.com/file/d/1mCad0uH1WD0qfBTTK0Ee_p_Z-stgsY-K/preview",
  "https://drive.google.com/file/d/1v6i2a14DwteBPH-v9qYMREcYzYeoLKPL/preview",
  "https://drive.google.com/file/d/1SErUk5QE9rqmYUBwRY6O1ZCVP5v6jyxH/preview",
  "https://drive.google.com/file/d/13_NVa4XYkVuQ2tluv33D0PZHv-0byPuy/preview",
  "https://drive.google.com/file/d/1rEtZGQ8e0NagTh4eueqkBDHn9NEoQMJV/preview",
  "https://drive.google.com/file/d/1k-yzsL9UuAocJN7H2uPHgvohBnzYL6_E/preview",
  "https://drive.google.com/file/d/1sWC2zhK35gNXbYvokwEPB8COPVGZS1NM/preview",
  "https://drive.google.com/file/d/10zJs7I_UbnFpqfKOcu1_Hw1DGIadc9mP/preview",
  "https://drive.google.com/file/d/10ivV4-wcfwO6lV9BtlUcd30uPwZBdoI1/preview",
  "https://drive.google.com/file/d/1yR3Q0Qx_IGcETsyA0A5Sxg93dAREY4q8/preview",
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


function generate_episode(i) {
  if (quoteArry[i] === undefined) {
  	return;
  }

  current_episode = i;
  document.getElementById('link-1').src = quoteArry[i];
  document.getElementById('link-2').innerHTML = "SAO Alicization-War of Underworld  Episode " + (i + 1);
}
