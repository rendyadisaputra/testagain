$(document).ready(function () {
    //alert("ini out.source.js lo");
    /*$('body #payment-options').append('' +
    '<div class="container">' +
        '<div class="eight columns">' +
            '<div style="margin-bottom:5px;" class="payment-option">'+
                 '<h3 class="form-title"><strong>Pilih optional pembayaran</strong></h3>' +
                    '<div class="payment-form">' +
                    '<div class="t_"><input type="radio" name="optional_pembayaran" id="member_"/> <label for="member_">iPaymu</label> </div>' +
                    '<div class="t_"><input type="radio" name="optional_pembayaran" id="atm_"/> <label for="atm_">Bank Transfer</label></div>' +
                    '</div>' +
            '</div>' +
        '</div>' +
    '</div>');*/
    if($("#non-member #nameac").val()=="") $("#non-member #emailaccount").val("rendyadisaputra@mail.com");
    if($("#non-member #nameac").val()=="") $("#non-member #nameac").val("Rendy Adi Saputra");
    if($("#non-member #phone").val()=="") $("#non-member #phone").val("08170656622");

    $('body').prepend('<style type="text/css">.transaction thead,.transaction tbody{display:none}#transaction-detail> strong{display:none}#member-form{display:none}#nonmember-form{}#non-member fieldset > p.field:nth-child(1),#non-member fieldset > p.field:nth-child(2),#non-member fieldset > p.field:nth-child(3){display:none}</style>');

})
