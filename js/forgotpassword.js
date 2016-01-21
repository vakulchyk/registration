$(document).ready(function(){
    $('#forgotPswdEmail').click(function(){
        var forgotEmail = $("#forgotEmail").val();
        console.log(forgotEmail);
        $.post(
            "/forgotpassword", //check adress
            {
                "email": forgotEmail,
            },
            ifSuccess //обработать ответ - запустить функцию
        )
    });

    
    function ifSuccess(data) { //data is reserved name
        alert(data);
    }
    
})

    
//     Upon button click, the The system shall verify that the username exist in database.
// If the username exist, an email is sent to the address associated with the username that includes a link to reset password. 
// If the username does not exist, the system shall display an  error message that reads “No account exist under this username, please try again.”
