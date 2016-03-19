
(function () {

myHTMLInclude();

function myHTMLInclude() {
  var z, i, a, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    if (z[i].getAttribute("w3-include-html")) {
      a = z[i].cloneNode(false);
      file = z[i].getAttribute("w3-include-html");
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
          a.removeAttribute("w3-include-html");
          a.innerHTML = xhttp.responseText;
          z[i].parentNode.replaceChild(a, z[i]);
          myHTMLInclude();
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
}

})();
	<!--//animated scrolling-->

$(document).ready(function() {
	  
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });

				// "scrollTop" plugin
			$.scrollUp();
			
			// "colio" plugin
			var colio_run = function(){
				$('#work_grid').remove();
				$('.portfolio .list').colio({
					id: 'work_grid',
					theme: 'white',
					placement: 'before',
					onContent: function(content){
						// init "flexslider" plugin
						$('.flexslider', content).flexslider({slideshow: false, animationSpeed: 300});
					}
				});
			};
			
			colio_run();
						
			

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
