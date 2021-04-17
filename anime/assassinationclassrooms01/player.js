var quoteArry = [
  "https://drive.google.com/file/d/1T_4UlA6i4esxmqmXxWcQX-rHILOyuRWs/preview",
  "https://drive.google.com/file/d/1nRunJTNSN326c9t8qYUWEUfkDyegLDwd/preview",
  "https://drive.google.com/file/d/1XcQHpjPCY9p6xFI8WI_K01RF0b9YXl7H/preview",
  "https://drive.google.com/file/d/1uN4FVpdavt9XLcV5inqwe5L3UxC1a-ZT/preview",
  "https://drive.google.com/file/d/1QeoVMvUxudOwamWw80E-PLUNsWIRHuUr/preview",
  "https://drive.google.com/file/d/1pB4Xgb79BUKH2Who4-DesyW5T5cDeS3t/preview",
  "https://drive.google.com/file/d/1Qym58954M5NyxAEhNepxUQ5aIvozHYgV/preview",
  "https://drive.google.com/file/d/1-i5ADAwn-PSCr6Fk5aFcf8m604nVbu47/preview",
  "https://drive.google.com/file/d/1vIaiqkLCsC6gefNEpSI-6D57d_iAdodV/preview",
  "https://drive.google.com/file/d/1xl4YOBvlRNFWe_T6Ba3Sx8_OWIBVjXe6/preview",
  "https://drive.google.com/file/d/1j2DiJdHHK-JRE9sw0RSPq6tYuTH9ZjUt/preview",
  "https://drive.google.com/file/d/17UY3DxmjBpJLFjsScHgE2CGJKKnpila8/preview",
  "https://drive.google.com/file/d/1POkuHuq8zgALIjpLRcfP1aOGmP01UDly/preview",
  "https://drive.google.com/file/d/1JVzqwQR4sUaHb1GZUs_ZExEjnaR4q_gD/preview",
  "https://drive.google.com/file/d/1HiuJE2R-2GJUazFea4eZg3XAFkWmc26K/preview",
  "https://drive.google.com/file/d/1Yo9pqlT-sN0CTbb8meygiOCdWZx6ZARs/preview",
  "https://drive.google.com/file/d/12YsEjiHmtqFos96IegS5nkfG9_OrbdKP/preview",
  "https://drive.google.com/file/d/1hvSFcLNpe72fjCAtdB5DbticyB9XFLCV/preview",
  "https://drive.google.com/file/d/1Y3Is65oS8NhyB-IyoUG-xazBpQb9yurM/preview",
  "https://drive.google.com/file/d/1LwnCfEuQUWjSJrP_rV_B8PY4WyfZidP7/preview",
  "https://drive.google.com/file/d/1ueKvym61HEDF1QLSnqU2Yns3KPae81__/preview",
  "https://drive.google.com/file/d/1fK8p48TLsuGyf6XgTWq_69I1i-hWHKB6/preview"
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
  document.getElementById('link-2').innerHTML = "Assassination CLassroom S01  Episode " + (i + 1);
}
