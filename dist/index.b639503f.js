function isEmail(a){return/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(a)}$("#submit-btn").click((function(){let a="",l="";""==$("#name").val()&&(l+="<li>Name</li>"),""==$("#email").val()&&(l+="<li>Email Address</li>"),""==$("#phone").val()&&(l+="<li>Phone Number</li>"),""==$("#password").val()&&(l+="<li>Password</li>"),""==$("#password-confirm").val()&&(l+="<li>Password Confirmation</li>"),""!=l&&(a+="<p>The following field(s) are missing: </p>"+l),0==isEmail($("#email").val())&&(a+="<p>Please enter a valid email address</p>"),0==$.isNumeric($("#phone").val())&&(a+="<p>Please enter a valid phone number</p>"),$("#password").val()!=$("#password-confirm").val()&&(a+="<p>Please check the passwords match</p>"),""!=a&&$("#error-message").html(a)}));
//# sourceMappingURL=index.b639503f.js.map