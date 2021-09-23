var quoteArry = [
  "https://drive.google.com/file/d/1pXQHLrZ9CsW8BKJBmD2L1fSfPYgiK1Fz/preview",
  "https://drive.google.com/file/d/1jvEVDb7Rc_V56VrrgPWr0ZJDsI6P-UVY/preview",
  "https://drive.google.com/file/d/1HXl_8S3h9g-qRDE-OuigeOiedUQNnxt9/preview",
  "https://drive.google.com/file/d/1UbPg4UAAP-9o86BHmgZux5boijgYd_6l/preview",
  "https://drive.google.com/file/d/1CmBuS7R-Bz8Bj2Pv4_lCY4_LUuIA-v6p/preview",
  "https://drive.google.com/file/d/1B9JquPVPzkAsrYBaxYqAzRP0AFsTu5eZ/preview",
  "https://drive.google.com/file/d/1jFFgaO62gHmQiyJbJraXe7R7Y2BlxRd3/preview",
  "https://drive.google.com/file/d/1AU8FmyfnoKwQqB2CbUun1AWNEFFq1d_-/preview",
  "https://drive.google.com/file/d/1rKLZDsy9v09Gfy6Jeexs4ZrZdnBK1lDa/preview",
  "https://drive.google.com/file/d/1genzCY_ak7D5wcdUIRJRt0nNoxyCvN5B/preview",
  "https://drive.google.com/file/d/1sUPcUcKBobzPwCF_Gvf7jZfU-H62Fq5K/preview",
  "https://drive.google.com/file/d/1rcyV8xfUeNkG94zMxai5hpGdHpSkQtKB/preview",
  "https://drive.google.com/file/d/1i6M_BawycdhM409P82bbkEFvwP6YtrUz/preview",
  "https://drive.google.com/file/d/1Kt42RQ6LJslFKN8eFsU4rgHH1lhZxAme/preview",
  "https://drive.google.com/file/d/1f90pgXWdLwLY5pIyHQFI3bkvux30m2CM/preview",
  "https://drive.google.com/file/d/1OTo_JXSWjq34r8YKzkgWvQ1Jg60KXLsr/preview",
  "https://drive.google.com/file/d/12IsGeukPuQWI-LbMs9l42jvEmIttARKc/preview",
  "https://drive.google.com/file/d/1gVIzrNGkRNnNAmfQCXJ5zp8HUS2-GUk1/preview",
  "https://drive.google.com/file/d/1VLjRBv2m_KmgMB2ZOiH42lG0LIIB-Eva/preview",
  "https://drive.google.com/file/d/1df_5Y4SF-sNBt90qT8Lk5XYutFyBhPh7/preview",
  "https://drive.google.com/file/d/1dShlPOhUt89y1oeJ_gbFIEgyOzpjjWFH/preview",
  "https://drive.google.com/file/d/1tyOj8B1SnxT6SZooqyGsZx9cbjzqkszj/preview",
  "https://drive.google.com/file/d/1YdIC0KaAP5SQW-a7-F-cMUxi9SS-iOFu/preview",
  "https://drive.google.com/file/d/1ZYrhJjVKUZpmmjEGc5YT0UKceGZltKVQ/preview",
  "https://drive.google.com/file/d/1416Of-oeSlI5WJ_f0HdfcrV2Z_ukk041/preview",
  "https://drive.google.com/file/d/1IZrvf3IFOZo8CB-6ONxzBZMQFJQkL3df/preview",
  "https://drive.google.com/file/d/1Gk-xytEz0h8usKv7zb2CTsIH81Cn2ug2/preview",
  "https://drive.google.com/file/d/1FMqrgGEAOc6tlvMpfKrQ2J8NLOezyrgk/preview",
  "https://drive.google.com/file/d/1RchzKdYsXQeeoV5wD6FP6oqeq_M3_feE/preview",
  "https://drive.google.com/file/d/1ArOWzArh6DZwG-EEepPvN6TJQtqGS-xw/preview",
  "https://drive.google.com/file/d/1_uYgwA83oB1HrIBm_nWKCGCpUwfU_Id4/preview",
  "https://drive.google.com/file/d/1mNYD5agZVQC_0SQhwR1O2RTckOnI9NpG/preview",
  "https://drive.google.com/file/d/1qZgPaTVDiFesKgA1WK5K326ihrV-bjdi/preview",
  "https://drive.google.com/file/d/1YnTsjVaWfhUpRJwHhfDZOoKFle7pOBD_/preview",
  "https://drive.google.com/file/d/12IsSI05MialplGef09Ayxn6S3gOnR5wy/preview",
  "https://drive.google.com/file/d/1pDdSBXQHnVhrfMoVslAEYm771vDQr7mS/preview",
  "https://drive.google.com/file/d/1xlTVIr3i-o2bzZKkeAXiqvHRQVrvYkLE/preview"
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

var btn26 = document.querySelector('.btn26');
btn26.addEventListener('click', function() { generate_episode(25); });

var btn27 = document.querySelector('.btn27');
btn27.addEventListener('click', function() { generate_episode(26); });

var btn28 = document.querySelector('.btn28');
btn28.addEventListener('click', function() { generate_episode(27); });

var btn29 = document.querySelector('.btn29');
btn29.addEventListener('click', function() { generate_episode(28); });

var btn30 = document.querySelector('.btn30');
btn30.addEventListener('click', function() { generate_episode(29); });

var btn31 = document.querySelector('.btn31');
btn31.addEventListener('click', function() { generate_episode(30); });

var btn32 = document.querySelector('.btn32');
btn32.addEventListener('click', function() { generate_episode(31); });

var btn33 = document.querySelector('.btn33');
btn33.addEventListener('click', function() { generate_episode(32); });

var btn34 = document.querySelector('.btn34');
btn34.addEventListener('click', function() { generate_episode(33); });

var btn35 = document.querySelector('.btn35');
btn35.addEventListener('click', function() { generate_episode(34); });

var btn36 = document.querySelector('.btn36');
btn36.addEventListener('click', function() { generate_episode(35); });

var btn37 = document.querySelector('.btn37');
btn37.addEventListener('click', function() { generate_episode(36); });


function generate_episode(i) {
  if (quoteArry[i] === undefined) {
  	return;
  }

  current_episode = i;
  document.getElementById('link-1').src = quoteArry[i];
  document.getElementById('link-2').innerHTML = "Death Note Episode " + (i + 1);
}
