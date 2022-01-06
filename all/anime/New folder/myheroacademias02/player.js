var quoteArry = [
  "https://drive.google.com/file/d/1TaMhDQACZlmVP4M644SNoHqqsbv9kNHq/preview",
  "https://drive.google.com/file/d/18pO-1DOoCrlUzJjnyMuKsv-g3PSIln-L/preview",
  "https://drive.google.com/file/d/1Lu8M3pMORS2IkGwHcZmjprSn8oGhazCl/preview",
  "https://drive.google.com/file/d/1XwI0UYcrUIH9ABRv_XCWadzEclt-ILwD/preview",
  "https://drive.google.com/file/d/1ocg8gyZZ1kfUWyGxyoLW4UjdVshXkm93/preview",
  "https://drive.google.com/file/d/1Pm94QGJxqK5vWtBRHHk24pN62wtlqwHM/preview",
  "https://drive.google.com/file/d/1D3i6kx_sENb2OrWZ8KT8fCJDglU8aBRq/preview",
  "https://drive.google.com/file/d/1FYmEmMyKnOoqNEsfw7DKWLSj7ei_GDqE/preview",
  "https://drive.google.com/file/d/1oTbXxKd5ysmYh8HOqSdJAHy6HhaW6MUE/preview",
  "https://drive.google.com/file/d/1XNtYeFAJ0X8kwfR7cHXvIU8OBibhiUxH/preview",
  "https://drive.google.com/file/d/1ia8438GlG3qg6pLfYVr1iU0VcmmtcPSk/preview",
  "https://drive.google.com/file/d/1agcDsM4sk_lAeFEoHu9MpPJe62SpPnuQ/preview",
  "https://drive.google.com/file/d/1IfNLNtqgbkc2ukrrm-5jYy78WFeF7VMo/preview",
  "https://drive.google.com/file/d/1fWqM6VCp39my6ynrgokdicYRS-diBoMY/preview",
  "https://drive.google.com/file/d/1EZs7iPFxeFQsBzdpfwDO4nEKHMgNSxOD/preview",
  "https://drive.google.com/file/d/1HV8cOaJcnTZq2ENKf-_WUFI7llhm40nW/preview",
  "https://drive.google.com/file/d/1DF8WzShi2dvTxgcHVMb9e33Qz4nhHgx9/preview",
  "https://drive.google.com/file/d/1lkLa1qSnT98DFNqox30fydmkg9c9TuhG/preview",
  "https://drive.google.com/file/d/1dJ--WN0o5tKxEkRDchlJRwXX7eSSS2uk/preview",
  "https://drive.google.com/file/d/1qGg_pvaXIVWVl3uaUVymhnqz3LF9PhyA/preview",
  "https://drive.google.com/file/d/1y8InhQOp9Tb20GYOya7KGeQoljPMc3s7/preview",
  "https://drive.google.com/file/d/1GbOyVgmxp7yeUTLgdqdmvPzMdEkQG1Tv/preview",
  "https://drive.google.com/file/d/1z3PB3Zc6b0cpJwHftfHpD5SMyxR54u8m/preview",
  "https://drive.google.com/file/d/12-pqAoluQA3XqKMJBfa8tG6bfKJIpiu-/preview",
  "https://drive.google.com/file/d/1YleYurwWDYKI29rKZtIbZIJAOx3hiHQ2/preview"
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
  document.getElementById('link-2').innerHTML = "My Hero Academia Season 2  Episode " + (i + 1);
}
