var quoteArry = [
  "https://drive.google.com/file/d/1sPNMOSUv8GV6cbwNJDpTkmLEyBZ_lIEa/preview",
  "https://drive.google.com/file/d/1wo_ktp6ABq3vt6TioegtmGBNGfYsK4wY/preview",
  "https://drive.google.com/file/d/1K6WN_w3DGm4tnqeR42ljwYfxl8iO0_yd/preview",
  "https://drive.google.com/file/d/1qdqFpbS5ny9jndyP7BpKMbqUL1bk8Lg5/preview",
  "https://drive.google.com/file/d/1bq-cko6CgqN-SUonPBud-Bp5jpI0WFNA/preview",
  "https://drive.google.com/file/d/12Gnqsl6T6_L3j-wYbFqdY_XBS5i_L8Ko/preview",
  "https://drive.google.com/file/d/1JC1ViCTTVw4u0aAMGzpaSL7_HjW6IKzG/preview",
  "https://drive.google.com/file/d/1WHRIszbKOCdnwCmQAI6t8FHiAihrK_zw/preview",
  "https://drive.google.com/file/d/18GyYdjR7ifsMUuwNLO7bx09KJ_KHxFGm/preview",
  "https://drive.google.com/file/d/1SwHHNQL12D9uKA3Wm_HRuMWwv8JjHjZs/preview",
  "https://drive.google.com/file/d/14-YF5pkZ_ZKf4SqVqVvf-uA_Lsbc-V_2/preview",
  "https://drive.google.com/file/d/1jfNnSoMxepxWVhcqIs2WxXkA_81WqkNj/preview",
  "https://drive.google.com/file/d/1IxVi6gIB-ofEm8yEy3FPGWrmwXR4oXfk/preview",
  "https://drive.google.com/file/d/1EcdPRv9z69kSKLO-wQBxsdkhQKV_TLsX/preview",
  "https://drive.google.com/file/d/1LE1MaIXpf2_iCdt9KnB3zYE2Xx_4q6Ue/preview",
  "https://drive.google.com/file/d/188Wp6ULJXViTflFP5EqL6ySrOQpbd7M8/preview",
  "https://drive.google.com/file/d/1K1jORqO13oQxtRaUOqNHh3803db2sHNc/preview",
  "https://drive.google.com/file/d/1-Ws9WZ_CD3gwJtOfuqkQoYZye5CKFfnO/preview",
  "https://drive.google.com/file/d/19SS50Tr8w2DbKX3zuGY-5FXwD00Uce4Y/preview",
  "https://drive.google.com/file/d/1k3UqJwFUa5qwKbHRs9vCTBQA0vrkgVxk/preview",
  "https://drive.google.com/file/d/1aQ9ksfl6I3g0Uxvv7hU8MvzkBXY44UGY/preview",
  "https://drive.google.com/file/d/1hC488AgTwlsFXT_PhxZWyuFmVOJ4oj2W/preview",
  "https://drive.google.com/file/d/1FEbiBat2RZLdoxdTrKH03Qly9QeVbe19/preview",
  "https://drive.google.com/file/d/1pdFfWngVc58SwgdLmM4n2WIl-0UiJlb-/preview",
  "https://drive.google.com/file/d/1DLCEcUNpxFs4yW_-fKmMr8A8cHkk5Vfv/preview",
  "https://drive.google.com/file/d/1YQWfr_6a7D7ho0vS1Vrb-jamesGpXPJf/preview",
  "https://drive.google.com/file/d/1JvLVCWQkTYNMgj0WJlX61ooWum2X7yXf/preview",
  "https://drive.google.com/file/d/1KBI8Ot2dJupa3e2y3l8Mfzjl8ec0QEZx/preview",
  "https://drive.google.com/file/d/1L_efC8yRczce7HdBPlRGjXG3O2w6CAoA/preview",
  "https://drive.google.com/file/d/1SONvQlTUiE32kJTU066IcfYVtJaSyVBR/preview",
  "https://drive.google.com/file/d/1Og2-LHg8AUcHVS_WvhW0Gr6VMX8fpokl/preview",
  "https://drive.google.com/file/d/1AD-bSpWB40UzpCrCpNeZFvhvKhYamKy4/preview"
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


function generate_episode(i) {
  if (quoteArry[i] === undefined) {
  	return;
  }

  current_episode = i;
  document.getElementById('link-1').src = quoteArry[i];
  document.getElementById('link-2').innerHTML = "Fullmetal Alchemist Brotherhood Season 1  Episode " + (i + 1);
}
