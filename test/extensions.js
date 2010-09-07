module( "Extensions" );

(function() {
	var waitLifecycle = {
		teardown: function() {
			var div = document.getElementById( "dynamicElement" );
			if ( div ) {
				div.parentNode.removeChild( div );
			}
		}
	};

	function createDiv() {
		setTimeout(function() {
			var div = document.createElement( "div" );
			div.id = "dynamicElement";
			div.innerHTML = "amplify";
			document.body.appendChild( div );
		}, 500 );
	}
	
	function findDiv() {
		return document.getElementById( "dynamicElement" );
	}
	
	test( "wait without timeout", waitLifecycle, function() {
		createDiv();
		wait( findDiv, function() {
			equal( findDiv().innerHTML, "amplify" );
		});
	});

	test( "wait with timeout", waitLifecycle, function() {
		expect( 1 );
		createDiv();
		wait( findDiv, function() {
			equal( findDiv().innerHTML, "amplify" );
		}, 1000 );
	});
})();
