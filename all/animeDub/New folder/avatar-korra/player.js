var quoteArry = [
  "https://drive.google.com/file/d/183RQJVEx5LKsjBYnhMR4te-yciqkSimn/preview",
  "https://drive.google.com/file/d/1hIjW1yQAdat25pe3qSxMZ5GWx-ghD8w_/preview",
  "https://drive.google.com/file/d/1IhXn4tpP0i2GwjZy0yFun936ZvnniTgW/preview",
  "https://drive.google.com/file/d/1jZba2FK6bpg1l-40A617HReL7KIpkXN2/preview",
  "https://drive.google.com/file/d/1lNd4ANLHOTnhwhMIx_2Akibfe7FfAxoK/preview",
  "https://drive.google.com/file/d/1mHsdMtco3bb1QLcbMLNIsPzFF_2E8XIM/preview",
  "https://drive.google.com/file/d/1ScS8Rb8ocq1HggbPRXLhk7wcAXNxyczu/preview",
  "https://drive.google.com/file/d/1Zny4WkIns7ERkbQX2NBXC5WT69HRGz55/preview",
  "https://drive.google.com/file/d/1qI6WVJy1iMdo5cCFY2-vUcGFvM2luViU/preview",
  "https://drive.google.com/file/d/1LT9dRNsNWjeUj5QktCOlaN1ptMGXthEL/preview",
  "https://drive.google.com/file/d/1CtnIAN2ue8tZMBTesKXgBQWcROhAOatu/preview",
  "https://drive.google.com/file/d/1EXhY_ZxIqXaYpMQEph71Z05b7Kg_2pQI/preview",
  "https://drive.google.com/file/d/1LkjLGkIIdfCRS89dwpww-ohTF7uvzkpI/preview",
  "https://drive.google.com/file/d/1vdwZi1xagxZ3qD6JgWmsqbMBLPeUyG-d/preview",
  "https://drive.google.com/file/d/1TVYUDDfrI2FwZ-kyuBJENyQcPyaj7fKT/preview",
  "https://drive.google.com/file/d/1xszBFaXUEU6LtXXCc8uQAaJI2jG92DP_/preview",
  "https://drive.google.com/file/d/1XbZ5DctzFJ0Vvl13_oj2mf5PycJOzXqP/preview",
  "https://drive.google.com/file/d/1sykP2rWL3uiumOO9fvNjj4ruPAZUL3O2/preview",
  "https://drive.google.com/file/d/1gAqXTkXxxcqjaOVSICJH1TSDPv0-XzZl/preview",
  "https://drive.google.com/file/d/1jnuQzfLYGJ_9tc8rktBtqDY8l33cYrAk/preview",
  "https://drive.google.com/file/d/1hzSPQaMLx-1B0Zau1ji_Efw-xXChXTz_/preview",
  "https://drive.google.com/file/d/1AKLu2mRM_AYOZU5sAM50GrGaJIF-jNnt/preview",
  "https://drive.google.com/file/d/1kG3srs7cNi8yywhC5VEepgSIZUBQbn7M/preview",
  "https://drive.google.com/file/d/1yuhhgPCPLFuvtkovqgHbJg2jqxOYmoJG/preview",
  "https://drive.google.com/file/d/1sKGgehR5Dapv-rhKGwxhKtFE7fE53h0_/preview",
  "https://drive.google.com/file/d/1FFMM70_GZsEBaz5mDXjQhtqvkR2MvPKo/preview",
  "https://drive.google.com/file/d/1wuqqnzLboMHunKBtzCR5u5naqE9V-oaT/preview",
  "https://drive.google.com/file/d/1JMB5E_nhBzge0taurkltfPSPVTBZRIt-/preview",
  "https://drive.google.com/file/d/10ZCq_ZTr3qg4vAUtotZACFwGWoB9thp6/preview",
  "https://drive.google.com/file/d/1qd2o2qsjEhmkgSowluNPM-4vL3plXHYE/preview",
  "https://drive.google.com/file/d/1oWjkP-2clTQ2wuY1YkOYedRskkgtKwzq/preview",
  "https://drive.google.com/file/d/1DQEiUV7itDOWK5UI45or98xZ7FzFfa0x/preview",
  "https://drive.google.com/file/d/1qE01oSRnvzGJU8xk7yhYen49Lv6Jq-Z1/preview",
  "https://drive.google.com/file/d/1c3U_HdhxN-bEuD0gGZp96WZ30fH0Trr8/preview",
  "https://drive.google.com/file/d/1almup_fH-Z-2DvEuAkLQQkQcFY3CLvJ6/preview",
  "https://drive.google.com/file/d/1DPD-dhw0SEl91nPyYJR-4AvBU69HkGKW/preview",
  "https://drive.google.com/file/d/1wVNSgfYbeWpDfViXUEywOYFThpthNC1J/preview",
  "https://drive.google.com/file/d/1NKYyZohmldokh6ODFAsBojOv6bSr4D-w/preview",
  "https://drive.google.com/file/d/1dNc7widmKzP4EnFvF7ASbfXuOtZCc75k/preview",
  "https://drive.google.com/file/d/17G3qbweWcTfCsi6zFH6aIJgrHDnaWleA/preview",
  "https://drive.google.com/file/d/1s8a-mLhQDHjrTDtj6oEdkYHGifG6S6zK/preview",
  "https://drive.google.com/file/d/1DepCldXLhDUSei_PB5TRixcQVmGWqFK6/preview",
  "https://drive.google.com/file/d/1iRqEIvspXDQXe0Snci5dav5gr-V78XvC/preview",
  "https://drive.google.com/file/d/1gntZiD7ZidDGR8CzakRsh9PPyM-GTUzS/preview",
  "https://drive.google.com/file/d/18y9yiIANFebWbJz1zO99mKywU9LSqt26/preview",
  "https://drive.google.com/file/d/16MKIM1vuSqrGrg5ua3qDs1V5kKlpHplB/preview",
  "https://drive.google.com/file/d/15wis5rDH-53PjcMfSx662UIsE8rEWK-f/preview",
  "https://drive.google.com/file/d/1TL2PtxEAYa1_meG_61b3A1svWzFb3URn/preview",
  "https://drive.google.com/file/d/1JiGZfFAqlC6Sea7ZfBYIUgUZKSK74U_g/preview",
  "https://drive.google.com/file/d/1wzAbW5noP2YXZ2qGDGMRq939GB5DC_SO/preview",
  "https://drive.google.com/file/d/1vqmA1y_UunbgUZZkEIsBkVILZZX9fjY2/preview",
  "https://drive.google.com/file/d/1g0ozb06NFRf0f7z1W5ouBV7JkbcSF6Mx/preview"
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

var btn33 = document.querySelector('.btn33');
btn33.addEventListener('click', function() { generate_episode(32); });

var btn34 = document.querySelector('.btn34');
btn34.addEventListener('click', function() { generate_episode(33); });

var btn35 = document.querySelector('.btn35');
btn35.addEventListener('click', function() { generate_episode(34); });

var btn36 = document.querySelector('.btn36');
btn36.addEventListener('click', function() { generate_episode(35); });

var btn37 = document.querySelector('.btn37');
btn37.addEventListener('click', function() { generate_episode(36); });

var btn38 = document.querySelector('.btn38');
btn38.addEventListener('click', function() { generate_episode(37); });

var btn39 = document.querySelector('.btn39');
btn39.addEventListener('click', function() { generate_episode(38); });

var btn40 = document.querySelector('.btn40');
btn40.addEventListener('click', function() { generate_episode(39); });

var btn41 = document.querySelector('.btn41');
btn41.addEventListener('click', function() { generate_episode(40); });

var btn42 = document.querySelector('.btn42');
btn42.addEventListener('click', function() { generate_episode(41); });

var btn43 = document.querySelector('.btn43');
btn43.addEventListener('click', function() { generate_episode(42); });

var btn44 = document.querySelector('.btn44');
btn44.addEventListener('click', function() { generate_episode(43); });

var btn45 = document.querySelector('.btn45');
btn45.addEventListener('click', function() { generate_episode(44); });

var btn46 = document.querySelector('.btn46');
btn46.addEventListener('click', function() { generate_episode(45); });

var btn47 = document.querySelector('.btn47');
btn47.addEventListener('click', function() { generate_episode(46); });

var btn48 = document.querySelector('.btn48');
btn48.addEventListener('click', function() { generate_episode(47); });

var btn49 = document.querySelector('.btn49');
btn49.addEventListener('click', function() { generate_episode(48); });

var btn50 = document.querySelector('.btn50');
btn50.addEventListener('click', function() { generate_episode(49); });

var btn51 = document.querySelector('.btn51');
btn51.addEventListener('click', function() { generate_episode(50); });

var btn52 = document.querySelector('.btn52');
btn52.addEventListener('click', function() { generate_episode(51); });


function generate_episode(i) {
  if (quoteArry[i] === undefined) {
  	return;
  }

  current_episode = i;
  document.getElementById('link-1').src = quoteArry[i];
  document.getElementById('link-2').innerHTML = "The Legend Of Korra Episode " + (i + 1);
}
