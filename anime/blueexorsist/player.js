var quoteArry = [
  "https://drive.google.com/file/d/1sefvPKKd14aG1ApOrffMTSsYO2YfISbk/preview",
  "https://drive.google.com/file/d/1tRwXwMlz0vUV4wY49ySteuogZmq__O97/preview",
  "https://drive.google.com/file/d/1QVUjheSywwK8G1RBeoyi4w9Cycr4rbqy/preview",
  "https://drive.google.com/file/d/1aCFoWbeqJrqPqg9H_iBVxipXklxFzPoC/preview",
  "https://drive.google.com/file/d/141buXV0Oub80kx-oZeRimUIAGp5yXTqy/preview",
  "https://drive.google.com/file/d/1nMVDUfI3UMpjb_hD_qvh13E1PupsuRUP/preview",
  "https://drive.google.com/file/d/1HT8WatmKSaYHf0MSQ5j19htyYj4Wl_lv/preview",
  "https://drive.google.com/file/d/1ATBX_KRfKlWKEbm06uXG8MXe0Rjc-T2y/preview",
  "https://drive.google.com/file/d/1C8pssOjCNrmI254oWT0NL6VJEvs4K1ZM/preview",
  "https://drive.google.com/file/d/1ZM6cgQMASNplMaFLnPh9UJdVoYzYPYUH/preview",
  "https://drive.google.com/file/d/1JRDbGRSWFEA3OkQtTvdgNhaFXt_MwvFt/preview",
  "https://drive.google.com/file/d/1YildqNPMomKsicwJjPiy1cybHPOLBb-5/preview",
  "https://drive.google.com/file/d/19j-PcVP_j6TU1AD1Nh0HV7J7jHeS8cTr/preview",
  "https://drive.google.com/file/d/1TKqiWjPOfeBHJBpaoSBzHPsoA8BtBF5f/preview",
  "https://drive.google.com/file/d/1n7ywr55Rp4jRUgH6NbzB9xzQTlUWIreq/preview",
  "https://drive.google.com/file/d/1dh35tbwgAN8noSfVGbZh57L9PvhP-I3r/preview",
  "https://drive.google.com/file/d/1pVUbeKqabkU1yNhxQwGXPIyN2svgaIHB/preview",
  "https://drive.google.com/file/d/14M8IZCoxmJBzZcwTmvsHPm7UeI1YYSx9/preview",
  "https://drive.google.com/file/d/1d68luPg88r1VBV5zpnJRPrcTx90Xbtgk/preview",
  "https://drive.google.com/file/d/1m-mCMtaCb-YeWO9PlIDxwMMcMEba26Q-/preview",
  "https://drive.google.com/file/d/1SqZjet_UudN6ec1r6WjyZU-89iBbEofa/preview",
  "https://drive.google.com/file/d/1hbFW-VGLnPHASTfrYNep_kyRp2_KgpIn/preview",
  "https://drive.google.com/file/d/1TRULFqqUWA3q1R0bJdGTLwTQ3_gEa1Vr/preview",
  "https://drive.google.com/file/d/1YqZBR2AW7ZL01kx6NBI8RxIHHw_KORCR/preview"
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
  document.getElementById('link-2').innerHTML = "Blue Exorcist  Episode " + (i + 1);
}
