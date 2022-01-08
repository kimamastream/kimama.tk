var quoteArry = [
  "https://drive.google.com/file/d/1-A8Qr1fVUg58kHXX8VrY6ZiS-4yAPXmT/preview",
  "https://drive.google.com/file/d/1-gX6kTM1sYp2oNbqs8Hq-qgfYgEnj_nB/preview",
  "https://drive.google.com/file/d/1Ax5AIE3ajJ_YSB0iEHDsdG2pP4OdRd0S/preview",
  "https://drive.google.com/file/d/1eVA9u2_n-iSqwZ-29iGGwTOyBJiIe1y1/preview",
  "https://drive.google.com/file/d/1q0-5WAHXx-ey08PzpiIk8iyeQs4GUzyx/preview",
  "https://drive.google.com/file/d/1bIbOi5MZmKuxU3l8uhHICWVQIWUKHCXa/preview",
  "https://drive.google.com/file/d/1ZcglzHReUaahEUdDzQ2Tk3E2e_hI8EzY/preview",
  "https://drive.google.com/file/d/1a30n927plbnvg3XnMzJmv0-HRh46all3/preview",
  "https://drive.google.com/file/d/1rPfLhbxqdpp_MBHl4VNijc5j4l7B9TSb/preview",
  "https://drive.google.com/file/d/177ZcCKYzMA_ZBSTHGg2fP1Mfp-zo9UyD/preview",
  "https://drive.google.com/file/d/1QCWX-EKhP-qwxAH3Kpgpqfk3QkQTWcOn/preview",
  "https://drive.google.com/file/d/1efyLUOj1ELVSY49rfSPhkt8oZ4oW_2pe/preview",
  "https://drive.google.com/file/d/16CPLzL3n151U_Z4LsPCDaa5FYifngvkh/preview",
  "https://drive.google.com/file/d/1hpfDOu3r9O8XNDZ35raWS7UNLNnkHm-2/preview",
  "https://drive.google.com/file/d/1g8P75D6wEbhPZjcJ7X-6dp2dOvFq2tHn/preview",
  "https://drive.google.com/file/d/1zlFCmtk3XuF_FvqfjMUSfu6hSgUozxxz/preview",
  "https://drive.google.com/file/d/1_jVSgafwZrxkP75_Z0GAL21r3j3-vR5I/preview",
  "https://drive.google.com/file/d/1Yy8abW4tDqRaaN6vWxC-p6-fbJ5JiSTK/preview",
  "https://drive.google.com/file/d/1lB9a9QqSxSHHRqEqxK7TfdvLn3EunScv/preview",
  "https://drive.google.com/file/d/1QOtjpwVei0lG8YtDFlImVtFUoF7L2Ie7/preview",
  "https://drive.google.com/file/d/1OX7O3o8PO28Vrc5cJI7xq9xD_vWTBIpa/preview",
  "https://drive.google.com/file/d/1gnswsFJbBoAhFrilpUkB5UdzwCiC0puu/preview"
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


function generate_episode(i) {
  if (quoteArry[i] === undefined) {
  	return;
  }

  current_episode = i;
  document.getElementById('link-1').src = quoteArry[i];
  document.getElementById('link-2').innerHTML = "Attack On Titan Season 3  Episode " + (i + 1);
}
