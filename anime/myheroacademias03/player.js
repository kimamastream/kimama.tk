var quoteArry = [
  "https://drive.google.com/file/d/1K0sPpzFupH2fbujO5qJyzx7a1AmNNtUM/preview",
  "https://drive.google.com/file/d/1q6HQkjy8KDlAf_uO29sRFWt-xPQvx-EJ/preview",
  "https://drive.google.com/file/d/1CA4j1rmoJJXC4xAgiCbNfExZjidSC5Zf/preview",
  "https://drive.google.com/file/d/1Cq_0mjoR7LZpqwXlDdXzpXT_jCyAPew8/preview",
  "https://drive.google.com/file/d/1trdXeOHKHu3yNpCgR_-LheoeIphdSza_/preview",
  "https://drive.google.com/file/d/1fjDCBK8OpSdOkR75imh6o367JZGhVhg6/preview",
  "https://drive.google.com/file/d/1KUqWaroNaQoUKjEP8nnHN47-rH1TDOOK/preview",
  "https://drive.google.com/file/d/1mC_i9CYkr2GpJrCX-KyIPpm943fIyrKS/preview",
  "https://drive.google.com/file/d/1nwb_6llqtSJW_ZuVTmGAP7nVv_t1AC2V/preview",
  "https://drive.google.com/file/d/1qymBwLQCudwi5DM3XKHlbMZQS7UmntxE/preview",
  "https://drive.google.com/file/d/1S-jMwfiFeJj_0UjyVD3YzICaKAf2sedr/preview",
  "https://drive.google.com/file/d/1d1633WqwgACoy6nUb9UOqtJzFmoOUc6Z/preview",
  "https://drive.google.com/file/d/1kUrZcNvCcOYqKhoTudd-KeW5xRmnx3hU/preview",
  "https://drive.google.com/file/d/1k_v26OaLdOqEdaZQjNDEKXkzktQTM_MP/preview",
  "https://drive.google.com/file/d/1Asil2HN2colO4EQJBcKD1wpI9j7KZSuV/preview",
  "https://drive.google.com/file/d/1SMi5p24_tnN0GhgYoX1bITp8UQN4PdOj/preview",
  "https://drive.google.com/file/d/1GgS_phZzHfUHshiMEGIt224Ksxoze7d0/preview",
  "https://drive.google.com/file/d/1HOQOF1WIEbrrG5eUo6e8zQNSGmMdTob0/preview",
  "https://drive.google.com/file/d/1lrm2491nteV2Asx8iZxR2Ic8VcdPOGMT/preview",
  "https://drive.google.com/file/d/1viz0Br5CyaMjXi8ahZ4XEq50BUeXjmle/preview",
  "https://drive.google.com/file/d/1viz0Br5CyaMjXi8ahZ4XEq50BUeXjmle/preview",
  "https://drive.google.com/file/d/1yHwXJWqQEZVRomc6KtO6Mq6r40lEF15v/preview",
  "https://drive.google.com/file/d/1J7JhsXLJm9fhAnBqC22_vL3t5wLHh6s6/preview",
  "https://drive.google.com/file/d/1sSdSBN7_4BrgDy_GjhWGxOLQuhFwyPrd/preview",
  "https://drive.google.com/file/d/11yr2TaKehFmTCnjAGQ4Y-qriziB7DRWk/preview"
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
  document.getElementById('link-2').innerHTML = "My Hero Academia Season 3  Episode " + (i + 1);
}
