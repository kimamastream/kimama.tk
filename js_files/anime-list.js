var ASD_LIST_COUNT = $(".anime-list li").length;
var PAGE_DATA_COUNT = 20;
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
    
    $('#lst-next').click(function () {
       var tempagenmbr = pageNumber + 1;
       
       if (tempagenmbr <= TOTAL_PAGE_COUNT) {
         pageNumber = tempagenmbr;
       }

       showPage(pageNumber);
    });
    
    $('#lst-goto').click(function () {
       pageNumber = +$("#lst-page").val();
       
       if (!pageNumber) {
         pageNumber = 1;
       }
       
       showPage(pageNumber);
    });
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
