var quoteArry = [
  "https://drive.google.com/file/d/1UMsjDIEMM9RR6qOrrSUzJgNgF2ELjEUN/preview",
  "https://drive.google.com/file/d/1uIfQXxNvBA8J4paWWnFSMP1Ej_ZLqC7X/preview",
  "https://drive.google.com/file/d/17kJXzW54zTvDTwioZw65E9jE8MFUvf85/preview",
  "https://drive.google.com/file/d/1-XErGEKCJiGdOUWLh6lytolKRVB5ftjv/preview",
  "https://drive.google.com/file/d/1d1xsLtsu33fx1F8zJ7YMLvxKv-IJpmOe/preview",
  "https://drive.google.com/file/d/1srnsqYz9XuMKJ3HWI_ZFE8Z_5gZntp75/preview",
  "https://drive.google.com/file/d/11BIdp4S3-e8jiOj05ohgbRzL3Tfc8JWB/preview",
  "https://drive.google.com/file/d/1tlIeGMYvDUxP06xMtsO855pGJiFd6YLa/preview",
  "https://drive.google.com/file/d/11iBIM7YOTCP49m6ACxgx_jVxVYNGcY55/preview",
  "https://drive.google.com/file/d/1_Bmko1qUNFT7awSsGBWoHNB7iGnJfG_Z/preview",
  "https://drive.google.com/file/d/1r1HKSqHRkijcsFWzqaMeaxSoTWxnPnMI/preview",
  "https://drive.google.com/file/d/1AAsA0WDA-P31xyoglpP43F4TZg1P4v4X/preview",
  "https://drive.google.com/file/d/1lh7I_5Qof1-wEFc3sjPruNe3I9_o9cLN/preview",
  "https://drive.google.com/file/d/1F3NEIz2Exrjl_jifG7wjN6YRbQZPRQ8H/preview",
  "https://drive.google.com/file/d/13ukQgN8AKN-tPr73RcOzZWvVC8Xf3iTt/preview",
  "https://drive.google.com/file/d/1u7rM5DTUHWgPxXKoJJJis1jQ9KZSa3yG/preview",
  "https://drive.google.com/file/d/1Xfo0SvfWMPRMWC8NMsv8Wh0B1qFUO58b/preview",
  "https://drive.google.com/file/d/1sP5GT37W5we8jvZbnHSe92UO5yg_3Qtj/preview",
  "https://drive.google.com/file/d/1U4v_Ihl8ZOVwAT2CpBi3o5ura6dyC1YF/preview",
  "https://drive.google.com/file/d/1ijmfFplgetbLNDq_OCLeQFsQM6gBJtaZ/preview",
  "https://drive.google.com/file/d/18j1IF4mPazZSqWGNVfPNEs0kBruKApNz/preview",
  "https://drive.google.com/file/d/1O5w-ivf5hXuWlNi5MZfkAm92BH575K7O/preview",
  "https://drive.google.com/file/d/1FaWWH0W_p4FufCybSfX4cQq1YG4MP3xT/preview",
  "https://drive.google.com/file/d/1zVxZ6OXQ0NMCXPv6JBYHhr_s_muqdi-x/preview"
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
  document.getElementById('link-2').innerHTML = "Sword Art Online S02  Episode " + (i + 1);
}
