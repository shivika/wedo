$(document).ready(function() {
	  
	  

  <!--//accordion-->
//$('.collapse').collapse()



//jQuery.validator.addMethod('answercheck', function (value, element) {
//        return this.optional(element) || /^\bcat\b$/.test(value);
//    }, "type the correct answer -_-");

// validate contact form

    $('#contact').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true
            }
            //answer: {
             //   required: true,
             //   answercheck: true
            //}
        },
        messages: {
            name: {
                required: "Your name is required",
                minlength: "your name must consist of at least 2 characters"
            },
            email: {
                required: "I'll need your email to reply to"
            },
            message: {
                required: "You'll need to type something in the message box.",
                minlength: "thats all? really?"
            }
            //answer: {
            //    required: "sorry, wrong answer!"
            //}
        },
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type:"POST",
                data: $(form).serialize(),
                url:"process.php",
                success: function() {
                    $('#contact :input').attr('disabled', 'disabled');
                    $('#contact').fadeTo( "slow", 0.15, function() {
                        $(this).find(':input').attr('disabled', 'disabled');
                        $(this).find('label').css('cursor','default');
                        $('#success').fadeIn();
                    });
                },
                error: function() {
                    $('#contact').fadeTo( "slow", 0.15, function() {
                        $('#error').fadeIn();
                    });
                }
            });
        }
		});
});
