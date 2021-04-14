var quoteArry = [
  "https://drive.google.com/file/d/1kStTs8_L3YQxG5PXD-tjXxWQF3Bc_s8A/preview",
  "https://drive.google.com/file/d/17zkeV4C_sCZsyRypxWaxIlO_aYy0If_n/preview",
  "https://drive.google.com/file/d/1hAOEADcdCEdENAvLLIKF0Ld07GZJypYb/preview",
  "https://drive.google.com/file/d/1yljz1F8v-1nhWtsaFp1qUL0cbSKa7JuY/preview",
  "https://drive.google.com/file/d/1l4lb-xmidPnkwAI2i9W3t9hXi4ZOy1CS/preview",
  "https://drive.google.com/file/d/1E_zxbPTYW8aJVhKdN1k-H8b8PJIQ3mHL/preview",
  "https://drive.google.com/file/d/1EwiCQMSGXnTK9jIu6wkKdu566p-abIfl/preview",
  "https://drive.google.com/file/d/1gpZk3Y-NOECWw4sJReTwZ3I6tRWy_WM_/preview",
  "https://drive.google.com/file/d/1G6gEvhUq489IE7tB8PGSgb7rS_MQ5DwX/preview",
  "https://drive.google.com/file/d/1JMHAttiB_1LhEghpS5bjY_TgM1uSrkTT/preview",
  "https://drive.google.com/file/d/1Brf03zhmrhaQAAXhcFowPr1-UdrBIdpY/preview",
  "https://drive.google.com/file/d/12ZG9blMD5GJYWCBMgEFfOKh-oLLeeTBc/preview",
  "https://drive.google.com/file/d/1M1TEvkAi0QqbHT-wS-w27zPme-C8L_tR/preview"
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


function generate_episode(i) {
  if (quoteArry[i] === undefined) {
  	return;
  }

  current_episode = i;
  document.getElementById('link-1').src = quoteArry[i];
  document.getElementById('link-2').innerHTML = "My Hero Academia Season 1  Episode " + (i + 1);
}
