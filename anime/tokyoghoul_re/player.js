var quoteArry = [
  "https://drive.google.com/file/d/1BFR9xHeM1xGAVXX-57pLpzEvaNSuem6G/preview",
  "https://drive.google.com/file/d/1Tmkbp-vaX3wmofmkIGxdaxlwvCcTlmdn/preview",
  "https://drive.google.com/file/d/1_MhwdJVJpyAKTPxcZJnq6IjPihLBwQGn/preview",
  "https://drive.google.com/file/d/1aIt1u-HCnUkB7tWDxxMatsY4_3YoGp4i/preview",
  "https://drive.google.com/file/d/1W5owf-uELKrCr9BSlFES8XSdTcH6RxRB/preview",
  "https://drive.google.com/file/d/1yb4Zc9kYjlPNSvcUxvjawfCsGAsbYtr0/preview",
  "https://drive.google.com/file/d/1hUEc1EWrdBJYMFs--icc4VDBui9134kQ/preview",
  "https://drive.google.com/file/d/1x4VTXYwbAFYBpgPyhOzD-XrEPLAS2nhW/preview",
  "https://drive.google.com/file/d/1LfTuT2sGV5lk0Vdi3OYuAjSJ0Rgmxg1g/preview",
  "https://drive.google.com/file/d/1PA5fryW8rodoR4MLPpl80xqYNcYPrSNN/preview",
  "https://drive.google.com/file/d/1zCpnCZ-Cw2LU0DnSLs0JTsAwbbvUrFM0/preview",
  "https://drive.google.com/file/d/1vRBbu1RKgJfXzIJrbJdHGqdWB3ZAHw0m/preview",
  "https://drive.google.com/file/d/1vnH13IVITtDfBsVYaVP3nLnm3rL2xEV3/preview",
  "https://drive.google.com/file/d/1VbSbKnDzqUGrV7kbG_v3XUrnz1DlzUgM/preview",
  "https://drive.google.com/file/d/10lofpo35VRb7T7G-V0yo4Yetbkn_slFG/preview",
  "https://drive.google.com/file/d/1aLxLV380YP_zYwy_Q1_Wyn-_YrPxJ1aC/preview",
  "https://drive.google.com/file/d/1eYTfF4g3rNcdtboK6-3vwUsTltwx6-wM/preview",
  "https://drive.google.com/file/d/1xd3r7nIBTbXV82pI50EgJoD-s35Egy7x/preview",
  "https://drive.google.com/file/d/1Ypd6SZKrBXRvgVvEDBC8lP0ESlqDTIlX/preview",
  "https://drive.google.com/file/d/10V5WEhgENjn6lN5tzJwYjH3L1giFQCTe/preview",
  "https://drive.google.com/file/d/1HnazVhRQBnFthHwMp9NUO9dRTF0Ws6fc/preview",
  "https://drive.google.com/file/d/10WNtGPgzsDpot82Td9aSb72G9nUvCwML/preview",
  "https://drive.google.com/file/d/12uX9ZSNTNuNIy6vINZklRzF8hRcPN9YC/preview",
  "https://drive.google.com/file/d/1vbdSu0_Qj8JURfy7mtwiJsvVTX2Mwo4b/preview"
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
  document.getElementById('link-2').innerHTML = "Tokyo Ghoul:re  Episode " + (i + 1);
}
