var quoteArry = [
  "https://drive.google.com/file/d/161Vgso0sGVF4YHQHXirEkFheItn3AwGj/preview",
  "https://drive.google.com/file/d/1S09v4hAhR5yZi6zWie1e3TTOf7qkBYuw/preview",
  "https://drive.google.com/file/d/1aJdDf409ztYnlb0BsXPsoEmyDOHVvgvS/preview",
  "https://drive.google.com/file/d/17dch3xUHneHNrnYxY4gzC-PtrLdHml52/preview",
  "https://drive.google.com/file/d/1UlzkLSkUI8D4-PkUWNrcqHvODz6i__xz/preview",
  "https://drive.google.com/file/d/1zm--1rF5KuNe97UwaueyRQTQHcqs6WOm/preview",
  "https://drive.google.com/file/d/1uU0wxPywYQgFt14zJFIOtPTBoLqugwb1/preview",
  "https://drive.google.com/file/d/1C5LALN82MjVu1Do4dMA1NQ-2vPZOdJzn/preview",
  "https://drive.google.com/file/d/1i3zspVHxO8Dbr8pqiCqvJWLjXwi_2nWf/preview",
  "https://drive.google.com/file/d/1unqKbwYqqXo_tR0o6PJENvFQZW5bNzQr/preview",
  "https://drive.google.com/file/d/1106HRJsJGYmA8bJTjOwLjRf_n9SgaPgf/preview",
  "https://drive.google.com/file/d/1Mx_1GTWa-XyjXbhaMU2DdMe-8ymbePda/preview",
  "https://drive.google.com/file/d/1CocGYrhMRfJ6q9uhvhzWKQf8YO9B15YU/preview",
  "https://drive.google.com/file/d/1klrFSScdYeyNaIaiIvWJevHPGgcUX1HR/preview",
  "https://drive.google.com/file/d/1rxhAMBdtbgGOjPR1EfxpJ2dM742Ilair/preview",
  "https://drive.google.com/file/d/1UcjYuaVDxTkEgY6x19UQbDmDKXoHKuc7/preview",
  "https://drive.google.com/file/d/189hL30bhlW9SPsDUA59UFRARpD6VdkRu/preview",
  "https://drive.google.com/file/d/13VumDHstLuipPJWfv_8jm3WOf5BXGMRC/preview",
  "https://drive.google.com/file/d/1_Wx5ZKxDiR89hVXZdPv-GEqRfFLKiw1r/preview",
  "https://drive.google.com/file/d/1BdFQOD2wI2H-2ACGCfuydVaOCpaeWlho/preview",
  "https://drive.google.com/file/d/1l-OdGoyMp2_oYaf0S52xTi7Woe27877W/preview",
  "https://drive.google.com/file/d/1I72-MDRuGNbLQbsjLxEixoe4yJDmWHa-/preview",
  "https://drive.google.com/file/d/1OLlN2BPEoQrIRDncfKnN-Fwx7z4tz4DF/preview",
  "https://drive.google.com/file/d/1grj4rGjzi-PMaLcS6wa0DRceBotqXpy4/preview",
  "https://drive.google.com/file/d/1_pHwGWz-dcB07KIHv7MiumdNTpfxUylQ/preview",
  "https://drive.google.com/file/d/1KQCvpDjjSxNaV6aHC28MTH16A8pWEkI_/preview"
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


function generate_episode(i) {
  if (quoteArry[i] === undefined) {
  	return;
  }

  current_episode = i;
  document.getElementById('link-1').src = quoteArry[i];
  document.getElementById('link-2').innerHTML = "Demon Slayer  Episode " + (i + 1);
}
