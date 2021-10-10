function filterFunction() {
  let isInputAvail = false;
  var input, filter, ul, li, a, i;
  input = document.getElementById("sea-myInput");
  filter = input.value.toLowerCase();
  if (filter.length > 0) {
      document.getElementById("sea-myDropdown").classList.add("sea-show");
  } else {
      document.getElementById("sea-myDropdown").classList.remove("sea-show");
  }
  div = document.getElementById("sea-myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
      txtValue = a[i].innerText;
      if (txtValue.toLowerCase().indexOf(filter) > -1) {
          isInputAvail = true;
          a[i].style.display = "block";
      } else {
          a[i].style.display = "none";
      }
  }
  if (!isInputAvail) {
      document.getElementById("sea-noMatches").classList.add('sea-show');
  } else {
      document.getElementById("sea-noMatches").classList.remove('sea-show');
  }
}