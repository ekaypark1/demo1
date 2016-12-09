//
// NAMESPACE (namespace)
//
// Self Executing Anonymous Function:
// -Enables use of private and public properties/methods
// -Also protects jQuery $ and undefined from conflicts
//
(function( NAMESPACE, $, undefined ) {

	// -----------------------------------------
	// PUBLIC
	//
	// Properties
	//
	NAMESPACE.property = '';


	// -----------------------------------------
	// PRIVATE
	//
	// Properties
	//
	var privateProperty  = '';


	// -----------------------------------------
	// PRIVATE
	//
	// Methods
	//








	//
	// getUrlParam
	//
	// Utility function to snag a query string value when passed the parameter
	//
	function getUrlParam(name) {
		var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
		if (!results) {
			return 0;
		}
		return results[1] || 0;
	}


	// -----------------------------------------
	// PUBLIC
	//
	// Methods
	//


	//
	// init
	//
	NAMESPACE.init = function() {

		// Put document ready code here!
		// console.log('Document Ready!');
//
//
//        $(".hamburger-menu").click(function() {
//            $('#sideMenu').animate({
//                "left": "0"}, 'slow');
//        });
//
//        $("#closeMenu").click(function() {
//            $('#sideMenu').animate({
//                "left": "-1500"}, 'slow');
//        });
//        

        $('#sideMenu').hide();
        
        $('.hamburger-menu').click(function(){
            $('#sideMenu').slideDown( "slow", function(){
                
            });
        });
        
        $('#closeMenu').click(function(){
            $('#sideMenu').slideUp( "slow", function(){
                
            });
        })
        
        $(window).scroll(function(){
            if ( $(window).scrollTop() >= 220 ) {
                $('.menu-bar').animate({'opacity':'1'}, 800);
            } else {
                $('.menu-bar').attr('style', '');
            }
        });


        $('#exploreBtn').click(function(){
        	$('body').scrollTo('#target');
        });


	};



	// var name = "ek";
	// var c = confirm('Are you sure?' );
	// if(c) {
	// 	alert('You are sure');
	// }	else {
	// 	alert('You are not sure');
	// };



	// var name = prompt('Please enter your name');
	//  if(name !== '') {									//if name input is empty.
	//  	alert('Hello ' + name);
	//  } else {
	//  	alert('Sorry, you do not have access');
	//  }









	// -----------------------------------------
	// DOCUMENT READY
	//
	$(document).ready(function() { NAMESPACE.init(); });

	$(function(){
			const config = {
		    apiKey: "AIzaSyC4G1LXMv09ICSfJUr59juyBuQChG62kIU",
		    authDomain: "demo1-1c1bb.firebaseapp.com",
		    databaseURL: "https://demo1-1c1bb.firebaseio.com",
		    storageBucket: "demo1-1c1bb.appspot.com",
		    messagingSenderId: "337606471179"
		  };
		  firebase.initializeApp(config);			
		  	$('.js-form').on('submit', event => {
		  		event.preventDefault();
		  		const email = $('#jsEmail').val();
		  		const password = $('#jsPassword').val();
		  		const message = $('#jsMessage').val();
		  		console.log(email, password, message);
					firebase.auth().signInWithEmailAndPassword(email, password)
						.then(user => {
							firebase.database().ref('messages').push({
								message,
							});
						})
						.catch(error => {
							console.log(error);
						});



		  	});

	});


}(window.NAMESPACE = window.NAMESPACE || {}, jQuery));
