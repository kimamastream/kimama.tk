var quoteArry = [
  "https://drive.google.com/file/d/1nncFLRJFTsmaKWV86ZiGixW9c8-LcHgQ/preview",
  "https://drive.google.com/file/d/1Hk7MGF8HqkerC7surPRAFBw2OjY9JN07/preview",
  "https://drive.google.com/file/d/1AvnRS3L5awkcUex1oL7kSCw0UJ3ktLdT/preview",
  "https://drive.google.com/file/d/11dLH61Q-LdZcyZVcq08WvxAbhFuy_yGZ/preview",
  "https://drive.google.com/file/d/1i5cTDqEnh47TKa9MrlE6pIUAFYMuKfqF/preview",
  "https://drive.google.com/file/d/1DMP2wGJDWezMO9yIC2GLuLiWVI7c92Ju/preview"
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


function generate_episode(i) {
  if (quoteArry[i] === undefined) {
  	return;
  }

  current_episode = i;
  document.getElementById('link-1').src = quoteArry[i];
  document.getElementById('link-2').innerHTML = "One Punch Man Season 2 Sp " + (i + 1);
}
