function check(form)/*function to check userid & password*/
{
	/*the following code checkes whether the entered userid and password are matching*/
	if(form.email.value == "ayush@a.com" && form.pswrd.value == "bbb")
	{
		window.open("login_success.html")/*opens the target page while Id & password matches*/
	}
	else
	{
		alert("Error Password or Username")/*displays error message*/
	}
}

var inputValidationConf = {
	    'signin-email': {
	        regex: '\\w+([-+.\']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*',
	        errMsg: {
	            empty: 'Please enter an email address',
	            invalid: 'Please enter a valid email address'
	        }
	    }}

$(document).ready(function(){
	if(!val) {
        errorTextTarget
            .text(inputValidationConf[targetId].errMsg.empty)
            .show();
        return false;
    }
    $("input").focus(function(){
        $(this).css("background-color", "#cccccc");
    });
    $("input").blur(function(){
        $(this).css("background-color", "#ffffff");
    });
});
