$(document).ready(function(){
    $('button').click(function(){
        var regEmail = $("#loginEmail").val();
        console.log(regEmail);
        var regPswd = $("#loginPswd").val();
        console.log(regPswd);
        var loginPswd = $("#loginRemember").is(":checked");
        console.log(loginPswd);
        // $.post(
        //     "forms.php", //correct server adress
        //     {
        //         "email": regEmail,
        //         "pass": regPswd,
        //         "rememberMe": loginPswd
        //     },
        //     ifSuccess //обработать ответ - запустить функцию
        // )
    });
    
    function ifSuccess(data) { //need wrong email, wrong password server message
        alert(data);
    }
})