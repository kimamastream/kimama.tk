var quoteArry = [
  "https://drive.google.com/file/d/1rJTvbDuArpwyVALxNL2-H6RwKu6y3q-t/preview",
  "https://drive.google.com/file/d/18fpbBKfKhcdbQbZRl-dt80iZIda_jTtJ/preview",
  "https://drive.google.com/file/d/1-2T4e6K1UtSkXAEWN4_EnGzLCG_SeKaq/preview",
  "https://drive.google.com/file/d/1GRazAIOmOY-RbLyhMewydcZcD0pywtTr/preview",
  "https://drive.google.com/file/d/1xeXZVOMYWI6oE8iFHULt-relLjv0cnaJ/preview",
  "https://drive.google.com/file/d/1cSQcZqKy98H5Akd9275540d7wIneQCkd/preview",
  "https://drive.google.com/file/d/17Tvn_RK-nNFqNYCA1Oi4nkAc_5i2xmet/preview",
  "https://drive.google.com/file/d/1YGOWlisRNWiN7B94e3JTGF5UOK71xsMU/preview",
  "https://drive.google.com/file/d/1w1_Hjp4iHBXmhc2WwWj56sROTX8VpyrY/preview"
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
  document.getElementById('link-2').innerHTML = "The Dragon Prince Season 3 Episode " + (i + 1);
}
