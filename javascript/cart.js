//  To display the cart details(No details upadated, just a dummy text)
// ------------------------------------    
$(function(){
    $('.cart img').mouseenter(function(){
        $('.cartmsg').show('slow');
    }).mouseleave(function(){
        $('.cartmsg').hide();
    })
})