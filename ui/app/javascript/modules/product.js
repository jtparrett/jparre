JP.product = function(){
  var options = {};
  function init(){
    options.bigProduct = byBehaviour('big-product');
    byBehaviour('small-product').on('click', change);

    new Shopify.OptionSelectors('product-select', { 
      product: {{ product | json }}, 
      onVariantSelected: selectCallback, 
      enableHistoryState: true 
    });
  }

  function change(){
    var $this = $(this);
    var src = $this.attr('src');

    $this.attr('src', options.bigProduct.attr('src'));
    options.bigProduct.attr('src', src);
    return false;
  }

  function selectCallback(variant, selector){
    if(!variant){
      return false;
    }
    
    if(variant.available){
      $('#add').removeClass('button--disabled').prop('disabled', false).val({{ add_to_cart | json }});    
    } else {
      $('#add').addClass('button--disabled').prop('disabled', true).val({{ sold_out | json }});
    }
    
    $('#product-price').html(Shopify.formatMoney(variant.price, "{{ shop.money_format }}"));
  }

  return {
    init: init
  }
}();