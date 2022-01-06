var grd = $('#suffletrend');
var imgs = grd.children();

// Page Refresh to run script below
imgs.sort(function(){
  return (Math.round(Math.random()) - 0.5);
});
grd.remove('li');
for(var i=0; i < imgs.length; i++)grd.append(imgs[i]);
