$(function(){
	var baseScript = 'javascript:document.getElementById("&login-selector").value="&login";';
	baseScript += 'document.getElementById("&password-selector").value="&password";';
	baseScript += 'document.getElementById("&submit-selector").click();';
	var selectors = {
		portal : {
			login:"",
			password:"",
			submit : ""
		},
		extranet : {
			login:"textfield-1035-inputEl",
			password:"textfield-1036-inputEl",
			submit : ""
		}
	}

	function updateLink(){
		var login = $("input#login-input").val();
		var password = $("input#password-input").val();

		console.log($("#site-select").val());
		var selector = selectors[$("#site-select").val()];
		console.log(selector);

		var script = baseScript .replace("&password-selector",selector.password)
								.replace("&password",password)
								.replace("&login-selector",selector.login)
								.replace("&login",login)
								.replace("&submit-selector",selector.submit);
		console.log(script);
		$("#bookmarklet-link").attr("href",script);
	}
	$("input").on('keyup',function(e){ updateLink(); });
	$("#site-select").change(function(e){ updateLink(); });
});
