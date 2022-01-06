var quoteArry = [
  "https://drive.google.com/file/d/1kOeWgUTo2HL1iibIHZRY5n6W7Rvdvdgw/preview",
  "https://drive.google.com/file/d/1mZzQNdoGTt_iu98MmDJLBaIvma0te7Zc/preview",
  "https://drive.google.com/file/d/1hKG6gCvu-eX1r7Gnehx-716y8UpXaXEy/preview",
  "https://drive.google.com/file/d/103KguMU3B_-P81hBfPzSZSsdY__eM98p/preview",
  "https://drive.google.com/file/d/1bQ2J4OVXEPutknikXeOL3phDrD7i6419/preview",
  "https://drive.google.com/file/d/1m1pv_kVY-2rYaxBvzFZpSrEpXGkZ_a47/preview",
  "https://drive.google.com/file/d/1kvEGjoFFrSQaQ3G4sf1qwjj_WiVNM3kR/preview",
  "https://drive.google.com/file/d/161M1s0vD2cZYOSIdubBXPXTVrReNgm2a/preview",
  "https://drive.google.com/file/d/1Luz_96vOlTnX_ItgqQZkJAatrFZRwh6I/preview",
  "https://drive.google.com/file/d/1jfXfEIETIPVqgOxRpg1P0mIs18o3gqgW/preview",
  "https://drive.google.com/file/d/1uzqmtLBMBVbwFMpwgjsIGMLe5z2UDCDM/preview",
  "https://drive.google.com/file/d/1AeMmDNjFvGfNipGVVHuJYyFYKEhMK0zr/preview",
  "https://drive.google.com/file/d/1zoz-Gym-F6K4mC8pNwkrAfOGd0CK9erM/preview",
  "https://drive.google.com/file/d/1SjjcehFPOJ4K3CvldDDdAQk_uioBYNq2/preview",
  "https://drive.google.com/file/d/1PA_faC97sYSDdvhOo1vdINfgQkZhHb2E/preview",
  "https://drive.google.com/file/d/1L8PFBaFp0jpGhmHHiT-mX3cuL_k1JFeY/preview",
  "https://drive.google.com/file/d/1upU2vEbGfHPM3dSYam67whJkkPApGDTD/preview",
  "https://drive.google.com/file/d/107v3owRgMiW1Ia1na6algANOf2Z9tssk/preview",
  "https://drive.google.com/file/d/1ZHAQrwQhHopgoCjVXZV_ZrsaNSeOoXEi/preview",
  "https://drive.google.com/file/d/1XPIXGbqLMp4iNQGSrDEU-Tp0Y3zcqIzy/preview",
  "https://drive.google.com/file/d/1I55mZorgmNNerFmmnYRXwq24qoPaCD6Z/preview",
  "https://drive.google.com/file/d/1gxmwH4FxhBPhx00fu_ydFa_DPSLb8Tw7/preview",
  "https://drive.google.com/file/d/1sUKPl8xv3ITzVX8K_kKG-BHieQ9GEHwL/preview",
  "https://drive.google.com/file/d/1-_xMXTT750MDT7wcbg9u_aWOSFftwK98/preview",
  "https://drive.google.com/file/d/1lIYb0xpz2Hx-cS3LBGSrtwNj8QVaNOO7/preview"
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
  document.getElementById('link-2').innerHTML = "Steins;Gate Episode " + (i + 1);
}
