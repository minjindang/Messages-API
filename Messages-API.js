<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script>
    $('#yourButtonId').click(function() {
	    $.ajax({
	        type: "POST",
	        url: "https://mandrillapp.com/api/1.0/messages/send.json",
	        data: {
	            'key': '7Xz9-4B15HF5U1aqI_U9hA',
	            'message': {
	                'from_email': 'willy741026@gmail.com',
	                'to': [
		                {
		                    'email': 'ray102467@gmail.com',
		                    'name': 'ray',
		                    'type': 'to'
		                }, 
		                {
		                    'email': 'sea392@yahoo.com.tw',
		                    'name': 'Ken',
		                    'type': 'to'
		                }, 
		                {
		                    'email': 'chentai008@yahoo.com',
		                    'name': 'John',
		                    'type': 'to'
		                }
	                ],
	                'autotext': 'true',
	                'subject': 'YOUR SUBJECT HERE!',
	                'html': 'YOUR EMAIL CONTENT HERE!YOU CAN USE HTML!'
	            }
	        }
	    }).done(function(response) {
	        console.log(response); // if you're into that sorta thing
	    });
	});
    </script>
</head>
<body>
    <button id='yourButtonId'>ABC</button>
</body>
</html>
