var quoteArry = [
  "https://drive.google.com/file/d/1tnr0rkuCwY75dHwHDlrWrVSUsZRN54mi/preview",
  "https://drive.google.com/file/d/189VfNXa7rWbqWjES1Thoi0owNBwsRw1i/preview",
  "https://drive.google.com/file/d/1fV3k5-EBrRqvsI7qkC9R9zXXI_7YBt_l/preview",
  "https://drive.google.com/file/d/1ImbSkgSGKTlIwaq61ck04QfyLja6eKI8/preview",
  "https://drive.google.com/file/d/1G1tbUGbY2uPmcKw44hyodKM8MOCdLRfB/preview",
  "https://drive.google.com/file/d/1_JiF4P3nC7FcNZwuEg3t1qTeNYD3PIYu/preview",
  "https://drive.google.com/file/d/1TB9KK5B14o747bqNjzKvPCbqMZfkxtsl/preview",
  "https://drive.google.com/file/d/18-6Pglp0SeyqPhJX3J8DxFJlO9R7GGgB/preview",
  "https://drive.google.com/file/d/17N2ubJ1qpIy6XUK81YsfbS96vkLwxSc-/preview",
  "https://drive.google.com/file/d/1bF5_SjxhEU021MpI5NWhqZVLLJqZQCyZ/preview",
  "https://drive.google.com/file/d/1s5zexbxpDkAwZe--KO41QZJzC9IVQjuK/preview",
  "https://drive.google.com/file/d/1sw0GXpy_o1ONZuiuIucui8eUN-QPhBtE/preview"
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


function generate_episode(i) {
  if (quoteArry[i] === undefined) {
  	return;
  }

  current_episode = i;
  document.getElementById('link-1').src = quoteArry[i];
  document.getElementById('link-2').innerHTML = "Tokyo Ghoul √A  Episode " + (i + 1);
}
