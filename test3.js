$(document).ready(function () {
    alert("ini out.source.js lo");
    $('body #payment-options').append('<div class="container">' +
    '<div class="eight columns">' +
    '<h3 class="form-title">Pilih optional pembayaran</h3>' +
    '<div class="payment-form">' +
    '<div class="t_"><input type="radio" name="member_" id="member_"/> <label for="member_">iPaymu</label> </div>' +
    '<div class="t_"><input type="radio" name="atm_" id="atm_"/> <label for="atm_">Bank Transfer</label></div>' +
    '</div>' +
    '</div>' +
    '</div>');
    $('body').prepend('<style type="text/css">.transaction thead,.transaction tbody{display:none}#transaction-detail> strong{display:none}#member-form{display:none}#nonmember-form{display:none}</style>');

})
