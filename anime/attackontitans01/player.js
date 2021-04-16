var quoteArry = [
  "https://drive.google.com/file/d/14uTyNlAuwAOM4KErhr56cnkI3jxYoBGd/preview",
  "https://drive.google.com/file/d/13DugTIX4wok2FXaY-zUJyJMbpKh79JyR/preview",
  "https://drive.google.com/file/d/11w3Dt_0z4XyMkU00K8W8ckOa7GKl3TpB/preview",
  "https://drive.google.com/file/d/1raQBFoV72n94LnbvKIGGZIyphb_-7OmA/preview",
  "https://drive.google.com/file/d/13DV1rm3jczeG2YB5BBv9eRiwTLsUfpct/preview",
  "https://drive.google.com/file/d/1FErIar7_fplgWg0v-HpfPkkotebQfLbo/preview",
  "https://drive.google.com/file/d/1SZEQaDPE0cUDYhP9UKBi-QrtZW5vCS4o/preview",
  "https://drive.google.com/file/d/1oYTy_5ehToL_t3lhE66WNx9A_RtmeaOQ/preview",
  "https://drive.google.com/file/d/1wmtIgxjIQLHns8jUoHG5mCeD7BaH8jl_/preview",
  "https://drive.google.com/file/d/1ZnTiOh6qJ_0pdU_9K_eWYiLw6eBRkopZ/preview",
  "https://drive.google.com/file/d/1JVQrdQBN8yoO6u3aRN5Jf9ZgJHqwpVBP/preview",
  "https://drive.google.com/file/d/1YHy_yH6W7gEtWRIKyb82P7J-S0IwCn-2/preview",
  "https://drive.google.com/file/d/1oNnkxf7xEFK0BOYlq3V8ng4nu_wMqmqh/preview",
  "https://drive.google.com/file/d/14b_wRnVIpS-XWqulcayXTrZWJ0ayilX7/preview",
  "https://drive.google.com/file/d/1jl-mtGOrhhfhSJlOaLNw2rmOJXgtoM6I/preview",
  "https://drive.google.com/file/d/1GyoQMGjaRvuMnczZ31OzRkZS8q5p0_G2/preview",
  "https://drive.google.com/file/d/18vLbqsDjNnz8XQN4ERaOEauSB7DkzKew/preview",
  "https://drive.google.com/file/d/1BMF5T6do5jpusc37iIvf77PyA1iFRIu3/preview",
  "https://drive.google.com/file/d/1bdaVsH9QsGRD1_17b_CV4movaNJRRbnh/preview",
  "https://drive.google.com/file/d/1lKrc1WD7x_cxLhvDchpUte1wVpy3EGFy/preview",
  "https://drive.google.com/file/d/1GmIxxDYVKggAfwjAWWcK-H8LFFQU4EEW/preview",
  "https://drive.google.com/file/d/1HzfnWQA7jcsalkeeE8lg48PzOaZ_C-EO/preview",
  "https://drive.google.com/file/d/1JcfoVwljD9U4kGSosrmLwLyulK1o3RS3/preview",
  "https://drive.google.com/file/d/16X4QiAQp1_lx7bpCcO_F5X65VafEAOxT/preview",
  "https://drive.google.com/file/d/1LPtA9WA4Wo7N6eVCmo0Z5bQ7_nz5xUWY/preview"
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
  document.getElementById('link-2').innerHTML = "Attack on Titan Season 1  Episode " + (i + 1);
}
