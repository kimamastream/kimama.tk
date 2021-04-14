var quoteArry = [
  "https://drive.google.com/file/d/1r47oKdJlSdmEW7UOLfJpdmdU_Ib8__36/preview",
  "https://drive.google.com/file/d/19DmsUn_3JxdOuBiCvgkLUPK3rsSAARoE/preview",
  "https://drive.google.com/file/d/1cVNWTsGvKuuuISKRreTIf4VusfmWWt2N/preview",
  "https://drive.google.com/file/d/1OwB-__k3uKijmUGGU8LxZqN3t40pJEjx/preview",
  "https://drive.google.com/file/d/1nAvZZbQw24D9SN7UOoavkaUeP_xijRBS/preview",
  "https://drive.google.com/file/d/1LYfrUNy-C45HOHmrk8qYyyo4rcCbwb5f/preview",
  "https://drive.google.com/file/d/1kbfyIUuI49j7A96XDDOEobQyZZJ1UQeh/preview",
  "https://drive.google.com/file/d/1eKcjP2a83iq9naZ71Q1cQCA-0JO7d9cq/preview",
  "https://drive.google.com/file/d/1-YWB210-_OBilToKcGXZaLXCKLun9XQJ/preview",
  "https://drive.google.com/file/d/127d08uPlPBjpvfDWBU0EmElliJOalMvT/preview",
  "https://drive.google.com/file/d/13u1sONxzT-lUZLdYvepbEMNdMzQt3CE8/preview",
  "https://drive.google.com/file/d/18w3EM4BwQe2YtHVawUifAy8Ed6IWXCzM/preview",
  "https://drive.google.com/file/d/19w4NS3_ddpLYlpLmSnuJZ1NxSm-jx8be/preview",
  "https://drive.google.com/file/d/1xS6u_wVOHh6GxyzKWfHeQHqUqxOXlMSg/preview",
  "https://drive.google.com/file/d/1r76HEKAsqDeM7FOkVGxyz1lA4mTOY9Ij/preview",
  "https://drive.google.com/file/d/1CLoIOv_frHxJFxlbuG6fxNwDC2ClvzU9/preview",
  "https://drive.google.com/file/d/1sy-d8UldFXkRsatC8Rxo068Qm3rC3Y9Q/preview",
  "https://drive.google.com/file/d/1xFnf0jCBQ0ygGX99BQ6Inbgfcs7nirsq/preview",
  "https://drive.google.com/file/d/1uLTfIvunRb_nZc1d6SMPmdbWA-8wpeEP/preview",
  "https://drive.google.com/file/d/19tBINKcXwEngHba-Har1t2ERBHXgpEwh/preview",
  "https://drive.google.com/file/d/1ppRq6Sti83g-MOiuzb5-EUcA6sCUxOES/preview",
  "https://drive.google.com/file/d/1eRtYu-4CyHUK46Ry18g0bSuHg9EBMKjL/preview",
  "https://drive.google.com/file/d/1vdPCtmP2JvGOwRwYclu-O6qxnpN0m3eT/preview",
  "https://drive.google.com/file/d/1Gl3tJDklGSBG-jKGeb_Vg0gPkBlL3FjQ/preview",
  "https://drive.google.com/file/d/1kCaO2Mk_XPdpFSJHEtXH2WZtkqGI0yvo/preview"
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
  document.getElementById('link-2').innerHTML = "Attack On Titan Season 1  Episode " + (i + 1);
}
