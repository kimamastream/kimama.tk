document.getElementById("import-anime-header").innerHTML =
`
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" integrity="sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk=" crossorigin="anonymous" />
<link rel="shortcut icon" type="image/x-icon" href="https://drive.google.com/uc?id=1d0S10L5eNVz71lAH-rqzQ1lqarLotb_Z">
  <link rel="stylesheet" href="../../../css_files/playerstyle.css">



<!-- light bulb /////////////////////////////////////////////////////////////////-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
  $("button").click(function(){
    $("#lgt1").fadeToggle("slow");
    $("#lgt2").fadeToggle("slow");
    $("#lgt3").fadeToggle("slow");
    $("#lgt4").fadeToggle("slow");
    $("#lgt5").fadeToggle("slow");
    $("#lgt6").fadeToggle("slow");
  });
});
</script>
<!-- light bulb /////////////////////////////////////////////////////////////////-->


</head>
<body>
  <!-- nav-bar  -->
  <section id="nav-bar" class="container">
    <header class="nav-bar">
      <div class="brand"><a href="../../../index.html"><img src="../../../tools/images/KIMAMASTREAM.png" height="86.5px; "></a></div>
      <div class="nav-list">
        <div class="hamburger">
          <div class="bar"></div>
        </div>
        <div >

        </div>

        <ul class="pages">
          <li><a onclick="goBack()">back</a></li>
          <li><a href="../../../list_pages/anime/page1.html">List</a></li>
          <li><a href="../../../search-func/anime/search-func.html">Search</a></li>
        </ul>
      </div>
    </header>
  </section>
`