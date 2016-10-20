$(function(){
  $(document).on('click','nav.index2 li a',function() {
    var _index = $("nav.index2 li").index($(this).parent())-1;
    $('nav.index2 li a').removeClass('js-active');
    $(this).addClass('js-active');
    $('.container.index2 article').removeClass('js-active');
    $('.container.index2 article').eq(_index).addClass('js-active')
  });
  $(document).on('click','nav.index2 .open',function() {
    $('nav.index2').toggleClass('js-active');
  });
  $(document).on('click','nav.index2 a',function() {
    $('nav.index2').toggleClass('js-active');
  });
  var menu = GetURLParameter('menu');
  $('nav.index2 li').eq(menu).children('a').click();
  $('nav.index2').removeClass('js-active');
});

// iOS fix fixed
  var u = navigator.userAgent, app = navigator.appVersion;
  var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

  if (isIOS) {
    $('nav.index2').addClass('js-fix-fixed');
  }

function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
        {
            return sParameterName[1];
        }
    }
}​
