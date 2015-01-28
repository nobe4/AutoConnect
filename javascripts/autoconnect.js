$(function(){
	var baseScript = 'javascript:$("#logonForm_standard_auth_form input").each(function(e,a){a.value = (e==0)?"&login":"&password";});$("#logonForm_connect_button").click();';

	function updateLink(){
		var login = $("input#login-input").val();
		var password = $("input#password-input").val();

		var script = baseScript.replace("&login",login).replace("&password",password);
		console.log(script);
		$("#bookmarklet-link").attr("href",script);
	}
	$("input").on('keyup',function(e){
		updateLink();
	});
});
