JP.product = function(){
  var options = {};
  function init(){
    options.bigProduct = byBehaviour('big-product');
    byBehaviour('small-product').on('click', change);
  }

  function change(){
    var $this = $(this);
    var src = $this.attr('src');

    $this.attr('src', options.bigProduct.attr('src'));
    options.bigProduct.attr('src', src);
    return false;
  }

  return {
    init: init
  }
}();