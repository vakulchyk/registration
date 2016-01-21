$(document).ready(function(){
    // on focus show rules for pssws field    
    $('input[type=password]').focus(function(){
        $('#warning-pswd').show();
    }).blur(function(){
        $('#warning-pswd').hide();
    })

    // show password on hower
    $('#showpswd').hover(function () {
    $('#regPswd').attr('type', 'text');
    }, function () {
        $('#regPswd').attr('type', 'password');
    });
    
    // checking fields rules on submit button click 
    $('#regSubmit').click(function(){
        var errors = false;
        // checking first name
        var regName = $("#regName").val();
        if (regName.length < 1) {
            $("#f-name").addClass("has-error");
            $('#error-f-name').show();
            errors = true;
        }
        else {
            $("#f-name").removeClass("has-error");
            $('#error-f-name').hide();
        }
        // checking last name
        var regLName = $("#regLName").val();
        if (regLName.length < 1) {
            $("#l-name").addClass("has-error");
            $('#error-l-name').show();
            errors = true;
        }
        else {
            $("#l-name").removeClass("has-error");
            $('#error-l-name').hide();
        }
        // checking email
        var regEmail = $("#regEmail").val();
        if (regEmail.match(/@/)) {
            $("#email").removeClass("has-error");
            $('#error1-email').hide();
        }
        else {
            $("#email").addClass("has-error");
            $('#error1-email').show();
            errors = true;
        }
        
        // validate password
        $('#error-pswd').hide();
        $('#pswd').removeClass("has-error");
        var regPswd = $("#regPswd").val();
        // validate length
        if (regPswd.length < 8) {
            $('#pswd').show();
            $('#error-pswd').show();
            errors = true;
        } 
        //validate letter
        if ( regPswd.match(/[A-z]/) ) {
        } else {
            $('#pswd').addClass("has-error");
            $('#error-pswd').show();
            errors = true;
        }
        //validate capital letter
        if ( regPswd.match(/[A-Z]/) ) {
        } else {
            $('#pswd').addClass("has-error");
            errors = true;
            $('#error-pswd').show();
        }
        //validate number
        if ( regPswd.match(/\d/) ) {
        } else {
            $('#pswd').addClass("has-error");
            $('#error-pswd').show();
            errors = true;
        }
        // validate repeated char
        for (var i = 0; i < regPswd.length; i++) {
            if (regPswd.charAt(i) !== regPswd.charAt(i + 1)) {
            } else {
                $('#error-pswd').show();
                $('#pswd').addClass("has-error");
                errors = true;
            }
        }
        
        // checking org name
        var regOrgName = $("#regOrgName").val();
        if (regOrgName.length < 1) {
            $("#organization").addClass("has-error");
            $('#error-organization').show();
            errors = true;
        }
        else {
            $("#organization").removeClass("has-error");
            $('#error-organization').hide();
        }
        
        // checking entity type
        var regEntType = $("#regEntType").val();
        if ($("#regEntType").prop('selectedIndex') == 0) {
            $("#regEntType").addClass("has-error");
            $('#error-entity-type').show();
            errors = true;
        }
        else {
            $("#regEntType").removeClass("has-error");
            $('#error-entity-type').hide();
        }
        
        // checking terms
        var regTerms = $("#regTerms").is(':checked');
        console.log(regTerms);
        if ($("#regTerms").is(':checked')) {
            $('#error-terms').hide();  
        } else {
            $('#error-terms').show();
            errors = true;
        }
        
        // shecking saas terms
        var regSaasAgr = $("#regSaasAgr").is(':checked');
        console.log(regSaasAgr);
        if ($("#regSaasAgr").is(':checked')) {
            // $('#error-terms').hide();
        } else {
            $("#error-terms").show();
        }
        
        // if (errors !== true){
        //     $.post(
        //         "http://alderaan.thelazy.co/register", //server adress
        //         {
        //             "name": regLName,
        //             "last_name": regLName,
        //             "email": regEmail,
        //             "pass": regPswd,
        //             "organization": regOrgName,
        //             "entity_type": regEntType,
        //             "terms": regTerms,
        //             "saas_agreement": regSaasAgr                    
        //         },
        //         ifSuccess //обработать ответ - запустить функцию
        //     )
        
        //     function ifSuccess(data) { //data is reserved name
        //         alert(data);
        //     }            
        // }
    })    
})