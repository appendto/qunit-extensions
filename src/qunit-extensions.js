(function( QUnit, undefined ) {

window.wait = QUnit.wait = function( condition, then, timeout ) {
	var timer;
	
	if ( timeout ) {
		timer = setTimeout(function() {
			QUnit.ok( false, "Test timed out" );
			QUnit.start();
		}, timeout );
	}
	
	function waitForCondition() {
		if ( condition() ) {
			clearTimeout( timer );
			QUnit.start();
			then();
		} else {
			setTimeout( waitForCondition, 10 );
		}
	};
	
	setTimeout( waitForCondition, 10 );
	QUnit.stop();
};

})( QUnit );
