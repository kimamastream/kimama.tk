var quoteArry = [
  "https://drive.google.com/file/d/1CEKVTvhWxPb7auB1s24SptNb8suDJVwz/preview",
  "https://drive.google.com/file/d/17UYTAT_BSSEKkxQS2Ks8moqv68u1nRmq/preview",
  "https://drive.google.com/file/d/1gWzUHoKoM3Je0Ym9kz2D8ro5vj1RVX8X/preview",
  "https://drive.google.com/file/d/1vC3mstvT9WU0TbHHY3g88qx-Se6JssBQ/preview",
  "https://drive.google.com/file/d/1nm-JG7Hnwi1j-mLWrCWTiFJ0CsL8CgnR/preview",
  "https://drive.google.com/file/d/1usLcfAldk_DYU5FofPiKlTgpEP_RkOTC/preview",
  "https://drive.google.com/file/d/1v1XxD1rG0G1GohsGd1L2dRZUfneQkBCy/preview",
  "https://drive.google.com/file/d/1lW_j2ta48ludpvx5VMdo0M9w8_I7O_CV/preview",
  "https://drive.google.com/file/d/1D5wIwSiPXEhr4FrV5TFMYcwBUWrzfZx0/preview",
  "https://drive.google.com/file/d/1kaBvl66zP0Sx_Wwr5ihks1jowc5mzw-Q/preview",
  "https://drive.google.com/file/d/1FQiXfM_GNY5Qv_uRRkjTrzH9_QhxhuWE/preview",
  "https://drive.google.com/file/d/1t7xlZVGBm2xmoC4OjDc34qOq2WXxwdtC/preview"
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
  document.getElementById('link-2').innerHTML = "Mob Psycho 100 Season 1  Episode " + (i + 1);
}
