var quoteArry = [
  "https://drive.google.com/file/d/1_XMd_Se3-BD378P4lCH0F2W7YBF4YdBh/preview",
  "https://drive.google.com/file/d/1k3sYoxwvUKuOEthKBXLEk8eL52AxGbmD/preview",
  "https://drive.google.com/file/d/1oBWbLw5Wr1yHBVFC0iVgrM3x60-hTxVX/preview",
  "https://drive.google.com/file/d/1nCzMHGWMdck9PHBBTm6Hoq05Gtjs836A/preview",
  "https://drive.google.com/file/d/1pGFQicGhqI6ab2kn82NiAungcGinaaqw/preview",
  "https://drive.google.com/file/d/1bRQpzrWWlptkPrHB2qpScUn7s369q_Qe/preview",
  "https://drive.google.com/file/d/1gFqwWyRzGv37w5wA0vZb7xe5oGAgHw8J/preview",
  "https://drive.google.com/file/d/1dIFXJj1NLzJ3D13urq9Uyu_NVX7Nub1X/preview",
  "https://drive.google.com/file/d/10gwqade-l4JrcBycX7h4W9imQDRs0nki/preview",
  "https://drive.google.com/file/d/1IrI7TqGJlyZBv6GSeLvyUf1BOY6hBpFv/preview",
  "https://drive.google.com/file/d/1xFf8wZaCkfPrOyfnoUaNuxZGWQItHDdR/preview",
  "https://drive.google.com/file/d/1lcL5KWHNUD9y2aDy_1t7f_EdEzhkfq52/preview",
  "https://drive.google.com/file/d/1St0ZxXcT6u4xDOKOUwVWCNxUUn_ukOyv/preview",
  "https://drive.google.com/file/d/1rs8tCzvC_5vR3QoFxkx6QJANKMY-v8rL/preview",
  "https://drive.google.com/file/d/13EjZY_OLPm2GjXJmk4NV7b00GTu04Vlw/preview",
  "https://drive.google.com/file/d/1iMB1-Ts7KKqfny1KKDVV8ob4qBscsoUl/preview",
  "https://drive.google.com/file/d/1wFXNeEpylI3yl84IENgw_Jvn1pJMxU66/preview",
  "https://drive.google.com/file/d/1l9kSHKhOC9-vIYH2diLY9h_Mfa6xFYnR/preview",
  "https://drive.google.com/file/d/15IY_h-ruXJGfvpYh4K2UmvSW2_6cMzHu/preview",
  "https://drive.google.com/file/d/1z8orsjkabFME3iuzIKXUyChuDxfnZUXe/preview",
  "https://drive.google.com/file/d/10sFd1ToFEWOFcE9kycHgTT9yg91tLhT3/preview",
  "https://drive.google.com/file/d/1iHVuUzufblcGJwVQFAwUhXdiYY6i8TEp/preview",
  "https://drive.google.com/file/d/1GsTGoplvOQmGR9IFWrUw0BgJ2m81qoyM/preview",
  "https://drive.google.com/file/d/1ZFvfFzPe84jrzXSmPzxRHvry0xYIORLx/preview",
  "https://drive.google.com/file/d/1XGolMxkRxGCQm5GhGN01UJM5My4g7wv6/preview",
  "https://drive.google.com/file/d/1UxNa2G8Die2618T2lOuxzBE3MmBq9AKt/preview",
  "https://drive.google.com/file/d/1ZQNoBWL7Er820uH80Gq4zqR6WAFPzIVl/preview",
  "https://drive.google.com/file/d/1eURT_sqb109Hx1Mssty7sfuNBnItcQ66/preview",
  "https://drive.google.com/file/d/1PYbly77ev0bskqxzfUPOPCSQxlhAQ3hT/preview",
  "https://drive.google.com/file/d/1zH6Mv7l-cyd-xvYU9W0qwNB5GMGCmwXt/preview",
  "https://drive.google.com/file/d/11VTf3ztgucVXmXtG0FX-fgyKo2ZM6zNd/preview",
  "https://drive.google.com/file/d/1tsb_zogUuyQ-Tbyk4AeaDi1btp8W2eGE/preview"
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
