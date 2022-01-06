var ASD_LIST_COUNT = $(".flex-anime-list li").length;
var PAGE_DATA_COUNT = 30;
var TOTAL_PAGE_COUNT = Math.ceil(ASD_LIST_COUNT / PAGE_DATA_COUNT);


var pageNumber = 1;

$(document).ready(function () {
    showPage(pageNumber);
    
    $('#lst-prev').click(function () {
       var tempagenmbr = pageNumber - 1;
       
       if (tempagenmbr > 0) {
         pageNumber = tempagenmbr;
       }
  
       showPage(pageNumber);
    });


// upper button previous
    $('#uprev').click(function () {
      var tempagenmbr = pageNumber - 1;
      
      if (tempagenmbr > 0) {
        pageNumber = tempagenmbr;
      }
 
      showPage(pageNumber);
   });
// End of upper button previous


// upper button mbl previous
$('#umblprev').click(function () {
  var tempagenmbr = pageNumber - 1;
  
  if (tempagenmbr > 0) {
    pageNumber = tempagenmbr;
  }

  showPage(pageNumber);
});
// End of upper button mbl previous



    $('#lst-next').click(function () {
       var tempagenmbr = pageNumber + 1;
       
       if (tempagenmbr <= TOTAL_PAGE_COUNT) {
         pageNumber = tempagenmbr;
       }

       showPage(pageNumber);
    });

// upper button next    
    $('#upnext').click(function () {
      var tempagenmbr = pageNumber + 1;
      
      if (tempagenmbr <= TOTAL_PAGE_COUNT) {
        pageNumber = tempagenmbr;
      }

      showPage(pageNumber);
   });
// End of upper button next

// upper button mbl next    
$('#upmblnext').click(function () {
  var tempagenmbr = pageNumber + 1;
  
  if (tempagenmbr <= TOTAL_PAGE_COUNT) {
    pageNumber = tempagenmbr;
  }

  showPage(pageNumber);
});
// End of upper button mbl next
    
    // $('#lst-goto').click(function () {
    //    pageNumber = +$("#lst-page").val();
       
    //    if (!pageNumber) {
    //      pageNumber = 1;
    //    }
       
    //    showPage(pageNumber);
    // });
});

function showPage(page) {
    if (page > 0 && page <= TOTAL_PAGE_COUNT) {
        var start = (PAGE_DATA_COUNT * page) - PAGE_DATA_COUNT; 
     
        var showListItems = $(".anime-list li").splice(start, PAGE_DATA_COUNT);

        //console.log(start, showListItems);
        
        $(".anime-list li").hide();
        $(showListItems).show();
    }
}

function sufflelist() {
    var grd = $('#animelist');
    var imgs = grd.children();

    // Page Refresh to run script below
    imgs.sort(function(){
      return (Math.round(Math.random()) - 0.5);
    });
    grd.remove('li');
    for(var i=0; i < imgs.length; i++)grd.append(imgs[i]);

}
