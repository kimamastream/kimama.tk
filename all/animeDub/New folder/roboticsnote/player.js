var quoteArry = [
  "https://drive.google.com/file/d/1jxRUDNZKBO-QrMywfVlIOT6lyLrvNuTu/preview",
  "https://drive.google.com/file/d/1jnHum28cZA54FFnQ34TgJF_RHAjCfey6/preview",
  "https://drive.google.com/file/d/1S3W6nPvX14SEGPTg_qQRSw5ic_otS_vT/preview",
  "https://drive.google.com/file/d/1sLImFFjPb8OQm-zltA3830Iz23GPFPj1/preview",
  "https://drive.google.com/file/d/1f2jfhA_zHFBrr2ZJlu8gZB7JVH7jMHmA/preview",
  "https://drive.google.com/file/d/19Gu-wb419MHlRVyeh7yUTMr5VdjQmCD3/preview",
  "https://drive.google.com/file/d/1TGm7L-KgJqlrTw-8f5mgMXMxFq6yTZuO/preview",
  "https://drive.google.com/file/d/1xbVypZwpk1ovRtoLG4gtXDdDnr0Hxv3j/preview",
  "https://drive.google.com/file/d/1hVLzvrJOYWTf3Iv2pKq1vhfxR04eeq_R/preview",
  "https://drive.google.com/file/d/1K_WBSnt8c8Su2xMQ-R8GtcWK_taVtgdy/preview",
  "https://drive.google.com/file/d/1iKwcpfTkUTxmkW9CWCpQ1PgVSnkKq7Sq/preview",
  "https://drive.google.com/file/d/16Tja51Btxw5mP_U3Bkd_JeImdve8P-vK/preview",
  "https://drive.google.com/file/d/113iy_DTG5iWAVWIliLIORBBiSUz_kDhP/preview",
  "https://drive.google.com/file/d/16fNT6GrnaEYu1Q70XMoCSs4Htk91k96j/preview",
  "https://drive.google.com/file/d/1tEnVfZlfFtipg_CyaU0WfHSLAEUdw6Pl/preview",
  "https://drive.google.com/file/d/1v-t77hPyPOlzBNVYe2JPF355fTsHXhZT/preview",
  "https://drive.google.com/file/d/1ieCCImZunzLisAjyzTwpzoLnpvI-53DL/preview",
  "https://drive.google.com/file/d/1SfMAyuZQyvWeIU9gj-lwVIlN3-AR6JIo/preview",
  "https://drive.google.com/file/d/14VHloTkBY6s1xHrb1ibfR4HGo__454Fj/preview",
  "https://drive.google.com/file/d/1VQxnHA2m_wiQMAewa8IWqXoNp97JlZ2o/preview",
  "https://drive.google.com/file/d/11Ictl_ZaOZ4q9q36xRIK0g7-vPBJZrEP/preview",
  "https://drive.google.com/file/d/1FJpcEUQYKPT9MXb2OrdQ9eBj0e38AQK8/preview"
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
  document.getElementById('link-2').innerHTML = "Robotics Note  Episode " + (i + 1);
}
