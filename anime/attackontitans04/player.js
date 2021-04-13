var quoteArry = [
  "https://drive.google.com/file/d/1KLt0gsBiG2DA0oT8yOydLKC8Xe3YFa83/preview",
  "https://drive.google.com/file/d/14yics0YrHAZEHbSMSK3uWKb1M0CpaCSr/preview",
  "https://drive.google.com/file/d/14806beDktpxanI2zVeSwZ9XGBXLPkZnU/preview",
  "https://drive.google.com/file/d/1MZ7Rqc49DF3JaM3-ijHGSI2rreTIuupk/preview",
  "https://drive.google.com/file/d/1zSoDk18CS5ABZa_HS73abYMFUps16FeF/preview",
  "https://drive.google.com/file/d/1j3yi466M0ft9-5zlte66YZm7ybKhkdO6/preview",
  "https://drive.google.com/file/d/13YL-Nyoo6-XM4WfeiZmxr51QxySmtd-F/preview",
  "https://drive.google.com/file/d/1CyA1mfaHI-U_KHaz0a3sOTCAhab8OH6U/preview",
  "https://drive.google.com/file/d/17qQ_BvNGxXmEtA20Dzlw-oAPQ-IWnvtx/preview",
  "https://drive.google.com/file/d/19lFIsMjBQqvfx_4EIms7OixU7s9bgYh9/preview",
  "https://drive.google.com/file/d/1_nSihlBgjMT53GmnkT6jVUY0sd2l_LMW/preview",
  "https://drive.google.com/file/d/1efyLUOj1ELVSY49rfSPhkt8oZ4oW_2pe/preview",
  "https://drive.google.com/file/d/16CPLzL3n151U_Z4LsPCDaa5FYifngvkh/preview",
  "https://drive.google.com/file/d/1hpfDOu3r9O8XNDZ35raWS7UNLNnkHm-2/preview",
  "https://drive.google.com/file/d/1g8P75D6wEbhPZjcJ7X-6dp2dOvFq2tHn/preview",
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


function generate_episode(i) {
  if (quoteArry[i] === undefined) {
  	return;
  }

  current_episode = i;
  document.getElementById('link-1').src = quoteArry[i];
  document.getElementById('link-2').innerHTML = "Attack On Titan Season 4  Episode " + (i + 1);
}
