var quoteArry = [
  "https://drive.google.com/file/d/1PulFrImY1lh536dPfOnbeXgF8QCCotp8/preview",
  "https://drive.google.com/file/d/10uWv6sC5eFcdAFXkrIHInkaAMtSTPLLJ/preview",
  "https://drive.google.com/file/d/1rJMntq5d2n46TBFMxvNYnl1RKwCCgQSF/preview",
  "https://drive.google.com/file/d/1PuFSgYtMQ_nlamDHeZHpaH2WEBU7YWar/preview",
  "https://drive.google.com/file/d/1xzuwirE-UpSvmvSvheKhJbBJgkWlXyQc/preview",
  "https://drive.google.com/file/d/1oCUKXSrvnNQV9ePlu2QTEnOfZAnjO_4G/preview",
  "https://drive.google.com/file/d/1sBBhq16YXQwH83LDi2oX6Eq7K5MHFeXC/preview",
  "https://drive.google.com/file/d/1uOWOvG5hSjWIcbVUsTDFmGQ2jI2thObk/preview",
  "https://drive.google.com/file/d/1-Y1G6O6PowtOOTm-Qe0PUJZ1g36ow7IH/preview",
  "https://drive.google.com/file/d/1ZJ_oKPt3Mb8D-rSB2AmqtlPIdqWt56f-/preview",
  "https://drive.google.com/file/d/1_mtpGdJL8UxbUankBSywoopRBuG0iipf/preview",
  "https://drive.google.com/file/d/1eu7pDK9BRk-_mzZF_5l4kHsimRSikxAe/preview",
  "https://drive.google.com/file/d/1FiVPiLpbx4OPAuUZkMyUlkXdH3d34mFU/preview",
  "https://drive.google.com/file/d/1vJ2yrOiAS-xlumMLK7MaVLXhAvRHkgIm/preview",
  "https://drive.google.com/file/d/1EgvDsI5rncYNIuz0mJXUi_nZ_sP07Px8/preview",
  "https://drive.google.com/file/d/1odZ3m-CUE_juKXskczvUoEfBQYa2cWXJ/preview",
  "https://drive.google.com/file/d/1ascSLt0PJDqxoFHZPgTHb5CpL0AD51uw/preview",
  "https://drive.google.com/file/d/1pv87PvVJTUAhErh3YI3CInYYXlzhMSEl/preview",
  "https://drive.google.com/file/d/1OPyWBT3gXYKeSN74qj5x0k746Givr-FV/preview",
  "https://drive.google.com/file/d/1XqvNHKpGBpwihmtPLogTMwgGkeYpDsEm/preview",
  "https://drive.google.com/file/d/1I9ND-RsY60vbKbCbxdsnlZ2yFxFsnECa/preview",
  "https://drive.google.com/file/d/1q6yEN19E3BrJZa-KdhVo7AWM0OQ3F9rn/preview",
  "https://drive.google.com/file/d/1cHD_X0yvBGTpW9oiSLtbiIJsGk9MGVmQ/preview",
  "https://drive.google.com/file/d/19XDu7yZ0B29EVJ5RU5ask-VlEGb5hu5T/preview"
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
  document.getElementById('link-2').innerHTML = "Sword Art Online Alicization   Episode " + (i + 1);
}
