var quoteArry = [
  "https://drive.google.com/file/d/1keb7OOqi1dwP6MZaq5V-VEqOjPBtvS1y/preview",
  "https://drive.google.com/file/d/1S71Q8-75QgZ-HiSHwZckuWN7xJ2VG_ky/preview",
  "https://drive.google.com/file/d/1MdMwuiSYPhX_NHhPZP1-Ov5OtluzHgC_/preview",
  "https://drive.google.com/file/d/19CE3ruV44ovLOgEV-K9zocJkEwhYh6EI/preview",
  "https://drive.google.com/file/d/10uIRQoZrq9Cl_lWpHnr3RoTTdLhqC_fL/preview",
  "https://drive.google.com/file/d/1IUBXasU91yzLmNgSiHU77FibyUY0_nPO/preview",
  "https://drive.google.com/file/d/1_1q9NRXtWXFtXZmCWN95_tE5CwIvkmO7/preview",
  "https://drive.google.com/file/d/1C_itqAoC23tPTSuLY4UuPzbjUb7fjFg2/preview",
  "https://drive.google.com/file/d/1qzB8gA_U6bv2dABAwk6-mQmk18lFuBXT/preview",
  "https://drive.google.com/file/d/1mK3A6hwA5cD9BhtUVy2nW0oMND7u2G-6/preview",
  "https://drive.google.com/file/d/17APpTVAFBpOX9oplm-ZP1YlHLU5yVsa1/preview",
  "https://drive.google.com/file/d/19NQMvvYyz6U-YuheOd6RXqGApgFSguWr/preview",
  "https://drive.google.com/file/d/1Wmcq0fbpwoA18NFCwV6DG8n8ZmKM73ER/preview",
  "https://drive.google.com/file/d/1oIDuxza2a3W_OOIljIoGlQTuI59aQ3AO/preview",
  "https://drive.google.com/file/d/1dP4jeSlRlU1J2eMfjKVRZbdEr5_cQ6kP/preview",
  "https://drive.google.com/file/d/13qESaMZM74ElS6Xlf2qBS3huxWrc9QS1/preview",
  "https://drive.google.com/file/d/1rGqIXq_MFK8Z-aAeEi0kr4JZh2WB2Kff/preview",
  "https://drive.google.com/file/d/1Ejzx9jO_XhE9Idl_gdOxOksvAp9DoWbG/preview",
  "https://drive.google.com/file/d/1sQdgbZNBrlwClVzkLLgJku_HdFybADJW/preview",
  "https://drive.google.com/file/d/1WHSPEM9q3PtdMMDc8d7hqBbAgGRZe34B/preview",
  "https://drive.google.com/file/d/1G69fMlVEWka2E6ixe1rNI9pauMvG6-fn/preview",
  "https://drive.google.com/file/d/1CElQeGqHVVbKGaXFNS1PK9dnrOoNS8-2/preview",
  "https://drive.google.com/file/d/1z5Q-SRZ2nVFSZ8TAmW3wSMSeuogE4uYj/preview",
  "https://drive.google.com/file/d/19jc1CEVIt0IQpk11wQjSi350OVeWm-3M/preview",
  "https://drive.google.com/file/d/1hzZ9Mt9r0cnj6gro_TNEAm-o6pC7FY5Z/preview",
  "https://drive.google.com/file/d/1Bpbw28hkd15ml9aj_kG_puLA-CMbIXrf/preview",
  "https://drive.google.com/file/d/1Il6F811JrpYMjWDRfuCHjE2iy0DMsXeR/preview",
  "https://drive.google.com/file/d/1hritYGCqYD_-3L1oCOHjQyXJfyvJ4axD/preview",
  "https://drive.google.com/file/d/1vjqtilG5KT1JsBwJS0KPbhN0rb5tDIJV/preview",
  "https://drive.google.com/file/d/1qLa21AXDS36WdWj1mzgyV_kAhiADKn-h/preview",
  "https://drive.google.com/file/d/1gWfU7XQcYT8guYskELx5s60U2cHGCHCu/preview",
  "https://drive.google.com/file/d/15xMMsc_3Lz4k-73mrUrIPRAX95xgHsds/preview",
  "https://drive.google.com/file/d/1WgmSqbLQAgDLrAwHGPcNBDIlhp1Mkd1j/preview",
  "https://drive.google.com/file/d/1R8DcW8CmdAn6D3BgQ5-dfafvqAZ-LW5S/preview",
  "https://drive.google.com/file/d/1kQnhOqcMUiTM1O-h5e9oPge5QohYNDnF/preview",
  "https://drive.google.com/file/d/1GzXemBI_Higd_cRWWmYoKtZFnCl2JPZ1/preview",
  "https://drive.google.com/file/d/1acG3cwY0oT2VLYT0gw_D8ICLAbUtyXXl/preview",
  "https://drive.google.com/file/d/1tUx-CQDNSJqCMEGvTda4ouBVn1gaw2rO/preview",
  "https://drive.google.com/file/d/1WyA3qc1OBD60HI28luoQyH4zwM0XWU7j/preview",
  "https://drive.google.com/file/d/1APaXgxptJ4ethl-vsPVb6zIAmbeRmSC6/preview",
  "https://drive.google.com/file/d/1PbXuQ60fb26Tk0toSMZ-WQtbixR82LIw/preview",
  "https://drive.google.com/file/d/1vtWWo9PTvKwTcoJYVXYyJzCaW4D5_iqY/preview",
  "https://drive.google.com/file/d/1HFO-BEapzoibKG8tN03SHVZIFhn7yL-t/preview",
  "https://drive.google.com/file/d/1HXnHmQ1hUnTDDHChxnrxVpvs6esqZLAT/preview",
  "https://drive.google.com/file/d/1ltRzuC2HXKCj6kVKf_WbhenpIlbn1SLJ/preview",
  "https://drive.google.com/file/d/1SwwH6S4e8CRoK7bjwxlBsitfiZtmMIL9/preview",
  "https://drive.google.com/file/d/1tUoHBVLD55kQDsT1iQpRe4uHhjY1Im8W/preview",
  "https://drive.google.com/file/d/1u5AR13hke_JXLMd58N4UtL2vFGXlXUIr/preview",
  "https://drive.google.com/file/d/181jnvlYLQ7eB6t6ndACVGqHcIToR74L7/preview",
  "https://drive.google.com/file/d/110DpG2IIl4sWO4GgdQ8mPYS-8olWwYGQ/preview",
  "https://drive.google.com/file/d/1Gb4WOmFg5FMV8c5I4m9OWVphq-id0zGZ/preview"
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

var btn38 = document.querySelector('.btn38');
btn38.addEventListener('click', function() { generate_episode(37); });

var btn39 = document.querySelector('.btn39');
btn39.addEventListener('click', function() { generate_episode(38); });

var btn40 = document.querySelector('.btn40');
btn40.addEventListener('click', function() { generate_episode(39); });

var btn41 = document.querySelector('.btn41');
btn41.addEventListener('click', function() { generate_episode(40); });

var btn42 = document.querySelector('.btn42');
btn42.addEventListener('click', function() { generate_episode(41); });

var btn43 = document.querySelector('.btn43');
btn43.addEventListener('click', function() { generate_episode(42); });

var btn44 = document.querySelector('.btn44');
btn44.addEventListener('click', function() { generate_episode(43); });

var btn45 = document.querySelector('.btn45');
btn45.addEventListener('click', function() { generate_episode(44); });

var btn46 = document.querySelector('.btn46');
btn46.addEventListener('click', function() { generate_episode(45); });

var btn47 = document.querySelector('.btn47');
btn47.addEventListener('click', function() { generate_episode(46); });

var btn48 = document.querySelector('.btn48');
btn48.addEventListener('click', function() { generate_episode(47); });

var btn49 = document.querySelector('.btn49');
btn49.addEventListener('click', function() { generate_episode(48); });

var btn50 = document.querySelector('.btn50');
btn50.addEventListener('click', function() { generate_episode(49); });

var btn51 = document.querySelector('.btn51');
btn51.addEventListener('click', function() { generate_episode(50); });


function generate_episode(i) {
  if (quoteArry[i] === undefined) {
  	return;
  }

  current_episode = i;
  document.getElementById('link-1').src = quoteArry[i];
  document.getElementById('link-2').innerHTML = "Soul Eater -  Episode " + (i + 1);
}
