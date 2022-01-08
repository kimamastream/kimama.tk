var quoteArry = [
  "https://drive.google.com/file/d/1rERUq1cbz82HrPlHWXyildTPd-P6-sxw/preview",
  "https://drive.google.com/file/d/11PGWHwai2RBnnz-q28O6uumYuLMp7H6O/preview",
  "https://drive.google.com/file/d/1M7ULIUffoWlGzWWkNM79Cv1W4QAoJc6j/preview",
  "https://drive.google.com/file/d/1bBOHRgbc6emDYLYaWQSOgS7azNA_N6sq/preview",
  "https://drive.google.com/file/d/1qzBLEsHJfg2WQ2_oHfpvtbJGqCvZPTnC/preview",
  "https://drive.google.com/file/d/1ohtr9CMXQpj2jHsoggsS59YAeZKkEMdy/preview",
  "https://drive.google.com/file/d/1mGopo17fgcdMzcOxx2i1ZVI_3jEBgP5b/preview",
  "https://drive.google.com/file/d/18bRZX_J61q8uzvOMFmYm7pvnY5wwnHcU/preview",
  "https://drive.google.com/file/d/1PQt056ZjEddREk1wODa1N4wgd4uO17x-/preview",
  "https://drive.google.com/file/d/1qonHp0INKNGP-o_TOusLpbKs9mVC68Lj/preview",
  "https://drive.google.com/file/d/136YO1x26PiEvurpre4nbEqs5LMC5dyek/preview",
  "https://drive.google.com/file/d/1x8QcJ46PLwMG29GpCTFgZhINOS757jQS/preview",
  "https://drive.google.com/file/d/1UzniYgjYdkpedio58qWInjToBlqDTT9o/preview",
  "https://drive.google.com/file/d/1n7znm1Z11RElppmS9Fj_NYJ8lTXMjSlA/preview",
  "https://drive.google.com/file/d/1hB8-DBqXZ3nF8bKzNv84CHXnUY4IVifp/preview",
  "https://drive.google.com/file/d/184SfKVe_lOx4ltLfnsFDjBXK_0jPdRsV/preview",
  "https://drive.google.com/file/d/1NeHQ1OgzJIymKupQl4NkUkFFLVLaUIeB/preview",
  "https://drive.google.com/file/d/1bUzgc_0IUDf30XOWkBZe7WXp7GPLcD2W/preview",
  "https://drive.google.com/file/d/1IV7nCe3lHg4PNFOYBQFCVJ-tnROlQeJr/preview",
  "https://drive.google.com/file/d/1RdtLSXndswhuGgYY_Hsb3vU4-ZjB5IzN/preview",
  "https://drive.google.com/file/d/12WXEcnX8pTpdhe7mQ1x1r-aJINaIoPiW/preview",
  "https://drive.google.com/file/d/1CoJJ3He7RFWavAcwYy-yukpj2Y9Giy6f/preview",
  "https://drive.google.com/file/d/13cSNtAH92Cqixx1yI3Mn1OsR3IoFxFJ2/preview",
  "https://drive.google.com/file/d/1q9ti4j1PK2n-Y8jccCPpQSzIOJrltmgZ/preview",
  "https://drive.google.com/file/d/1NmZW0gtRLQ9qn4u01Opk9sdITfkDPMB3/preview"
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
  document.getElementById('link-2').innerHTML = "My Hero Academia Season 4  Episode " + (i + 1);
}
