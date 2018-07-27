
$(document).ready(function(){  
    getAll();
    var shoe = $("#shoe");
    var tshirt = $("#tshirt");
    var adi = $("#adidas");
    var nik = $("#nike");
    var pum = $("#puma");
// --------------------------------------------------------------------------------------------------------------------
// To see any checking or unchecking event
// -------------------------------------------------------------------------------------------------------------------- 
    shoe.change(function(){
      var selectedProducts = $('input:checked').find();
      console.log(selectedProducts.prevObject);
      filterData(selectedProducts.prevObject);
    })
    tshirt.change(function(){
      var selectedProducts = $('input:checked').find();
      console.log(selectedProducts.prevObject);
      filterData(selectedProducts.prevObject);
    })
    adi.change(function(){
      var selectedProducts = $('input:checked').find();
      console.log(selectedProducts.prevObject);
      filterData(selectedProducts.prevObject);
    })
    nik.change(function(){
      var selectedProducts = $('input:checked').find();
      console.log(selectedProducts.prevObject);
      filterData(selectedProducts.prevObject);
    })
    pum.change(function(){
      var selectedProducts = $('input:checked').find();
      console.log(selectedProducts.prevObject);
      filterData(selectedProducts.prevObject);
    })
// --------------------------------------------------------------------------------------------------------------------
// To generate results based on a particular color (Shows all brands)
// --------------------------------------------------------------------------------------------------------------------   

    $(".color div").click(function(){

      var jsonUrl = "../json/products.json";
      $("#products").empty();
      var color = $(this)[0].style.backgroundColor;
      $.getJSON(jsonUrl, function(data) {

          for(var i = 0; i<data.length; i++){
            for(var j = 0; j<data[i].color.length; j++){
              if(data[i].color[j].color_name == color){
                var div_item = $("<div/>").addClass("product-item");
                var div_info = $("<div/>").addClass("div-info");
              
                var img = $("<img>").attr("src", data[i].color[j].image_url).css("width","250px").css("height","180px");
          
                div_item.append(img);
                
                var item_brand = $("<h2/>").text(data[i].brand).css("text-align","center");
                div_item.append(item_brand);
                div_item.append(div_info);
                var item_info = $("<h4/>").text(data[i].title).css("width","250px").css("text-align","center");
                div_item.append(item_info);
                var item_price = $("<p/>").text(data[i].price + "€").css("color","green").css("text-align","center");
                div_item.append(item_price);
              
                div_item.appendTo("#products").mouseenter(function(){
                  div_info.show("slow");
                }).mouseleave(function(){
                  div_info.hide();
                })
              }
            }
          }
          $(".header").empty().html('Tshirts and Shoe of Color '+color);   
      })  
    })


// ---------------------------------------------------------------------------------------------------
//  Function Definitions
// ---------------------------------------------------------------------------------------------------


//  To get all the data for all brands
// ------------------------------------
    function getAll(){
      $("#products").empty();
      var jsonUrl = "../json/products.json";
      $.getJSON(jsonUrl, function(data) {
          for(var i = 0; i<data.length; i++){
            render(data[i]);
          }
        $(".header").empty().html("Men Shoes and T-shirts");
      })
      
    }

//  To render all the items in the HTML
// ------------------------------------    
    function render(item) {
      var div_item = $("<div/>").addClass("product-item");
      var div_info = $("<div/>").addClass("div-info");
    
      var img = $("<img>").attr("src", item.color[0].image_url).css("width","250px").css("height","180px");
      
    
      var colordiv = $("<div/>").addClass("colordiv");
      for(var j=0; j<item.color.length; j++){
        var col = $("<div/>").addClass("item_color").css({"background-color":item.color[j].color_name});
        var colimg = $("<img>").addClass("item_image").attr("src", item.color[j].image_url).css("width","250px").css("height","180px").css("display","none");
        colordiv.append(colimg);
        col.appendTo(colordiv);
      }

      div_item.append(img);
      
      var item_brand = $("<h2/>").text(item.brand).css("text-align","center");
      div_item.append(item_brand);
      div_item.append(div_info);
      var item_info = $("<h4/>").addClass("item-title").text(item.title);
      div_item.append(item_info);
      var item_price = $("<p/>").text(item.price + "€").css("color","green").css("text-align","center");
      div_item.append(item_price);
    
      div_info.append(colordiv);
    
      div_item.appendTo("#products").mouseenter(function(){
        div_info.show("slow");
      }).mouseleave(function(){
        div_info.hide();
      })
    } 

// ------------------------------------------------------------------------------------------

    function filterData(item){

      var arraytype = [];
      var arraybrand = [];
      for(var i=0; i<item.length; i++){
        if(item[i].value == 'shoe' || item[i].value == 'tshirt'){
          arraytype.push(item[i].value);
        }
        if(item[i].value == 'adidas' || item[i].value == 'nike' || item[i].value == 'puma'){
          arraybrand.push(item[i].value);
        }
      }
      $("#products").empty();
      var jsonUrl = "../json/products.json";
      $.getJSON(jsonUrl, function(data) {
          if(arraytype.length !=0 && arraybrand.length!=0){
            for(var i = 0; i<data.length; i++){
              for(var j = 0; j<arraytype.length; j++){
                for(var k = 0; k<arraybrand.length; k++){
                  if(data[i].type == arraytype[j] && data[i].brand == arraybrand[k]){
                    render(data[i]);
                  }
                }
              }
            }  
          }
          if(arraytype.length == 0){
            for(var i = 0; i<data.length; i++){
              for(var k = 0; k<arraybrand.length; k++){
                if(data[i].brand == arraybrand[k]){
                  render(data[i]);
                }
              } 
            }  
          }
          if(arraybrand.length == 0){
            for(var i = 0; i<data.length; i++){
              for(var k = 0; k<arraytype.length; k++){
                if(data[i].type == arraytype[k]){
                  render(data[i]);
                }
              } 
            }  
          }
          if(arraybrand.length == 0 && arraytype.length == 0){
            getAll();
          }
          
      })  
    }
});
