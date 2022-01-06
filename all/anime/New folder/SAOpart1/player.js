var quoteArry = [
  "https://drive.google.com/file/d/1GQMMoUwkhduOj3aCgL85Djj-QaUXU43v/preview",
  "https://drive.google.com/file/d/1tZ9grQj20LjG77Dr08g2QW-KBU7YaaWo/preview",
  "https://drive.google.com/file/d/1lsk9h3qxY--nMVpuG8UA_QyKDoYsjv4w/preview",
  "https://drive.google.com/file/d/1mN8ytFo7FOdxCoKsL8wUFVhxJ6W3doNA/preview",
  "https://drive.google.com/file/d/1rLzmChjWJCrI1snT0ADdNd3gOI_kxUuT/preview",
  "https://drive.google.com/file/d/1Ej1fLTDCj30qqBOkLqEyr3VCU9XMVPfF/preview",
  "https://drive.google.com/file/d/1FggzptYdtmXXAMeGJUc2IuYr6pU5GHUn/preview",
  "https://drive.google.com/file/d/1-lBv8DEbFDHRLAYh3TyKw9xxCCYHCca3/preview",
  "https://drive.google.com/file/d/1BfntRSnR1czDuFr14kRQ6oniKYiGf7Q_/preview",
  "https://drive.google.com/file/d/1Tpr7glGAItgnGNtyg7E2_u68mDvWaw63/preview",
  "https://drive.google.com/file/d/1Cof91bl4Vl-0SPy0FrPE_JU9jqxLnDRx/preview",
  "https://drive.google.com/file/d/1wXR_vkOvP17ybEkEwufDQlDU6o-L47NZ/preview",
  "https://drive.google.com/file/d/1aIwyhaJ-Cu8E6I-uf4k6Ca7Dr9o3VMGI/preview",
  "https://drive.google.com/file/d/1evSs0fIV5ny1XHGGDvAijjFTM6AzU2Tn/preview",
  "https://drive.google.com/file/d/1Ygno8Fech2nmUjO8OBjCsRzklKc1dx2R/preview",
  "https://drive.google.com/file/d/14yYTyG1wn4RJ3fFB-7RvyRrSH07DMdA-/preview",
  "https://drive.google.com/file/d/18xmKKnBNEFxZLgtIxepF0EKlancPYiZD/preview",
  "https://drive.google.com/file/d/1ognEFd6oJ-uEniU3UnO8HVAgwnrmJqxn/preview",
  "https://drive.google.com/file/d/1AdoKiNerAMOaQY_16zXQZibvP5Zn_ymO/preview",
  "https://drive.google.com/file/d/1xwBiv4o3G_wVDDL2wbdZ40h2MRVQQEu1/preview",
  "https://drive.google.com/file/d/1sj5ChRRRhMrRJIkgHeCYaOcxn9YiHvET/preview",
  "https://drive.google.com/file/d/10Y4IX7XainEv0fECJHK1qRDPniZ9NyAg/preview",
  "https://drive.google.com/file/d/1ktlsiLlyglSBobIyyx6P1laqTiSGejs5/preview",
  "https://drive.google.com/file/d/10H5uhhpCe4_pWz8HnLx4IRPYBVM7FRVa/preview",
  "https://drive.google.com/file/d/18kH4U950DrySYKqQaf9VWwcqj4m6BWwv/preview"
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
  document.getElementById('link-2').innerHTML = "Sword Art Online  Episode " + (i + 1);
}
