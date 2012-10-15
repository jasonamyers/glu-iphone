//bootstrap and check dependencies
if (Ti.version < 1.8 ) {
	alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');
}

// This is a single context application with mutliple windows in a stack
(function() {
	
	
	//determine platform and form factor and render approproate components
	var osname = Ti.Platform.osname,
		version = Ti.Platform.version,
		height = Ti.Platform.displayCaps.platformHeight,
		width = Ti.Platform.displayCaps.platformWidth;
	
	//considering tablet to have one dimension over 900px - this is imperfect, so you should feel free to decide
	//yourself what you consider a tablet form factor for android
	
	/*
	var url = "http://sendtheslaytons.com/app-test/tabs.json";
	var client = Ti.Network.createHTTPClient({
		// function called when the response data is available
		onload : function(e) {
			//Ti.API.info("Received text: " + this.responseText);
			//alert('success');
			var jsonTabs = this.responseText;
			var ApplicationTabGroup = require('ui/common/ApplicationTabGroup');
			new ApplicationTabGroup(jsonTabs).open();
		},
		// function called when an error occurs, including a timeout
		onerror : function(e) {
			Ti.API.debug(e.error);
			alert('Startup Error. Please make sure you are connected to a network.');
		},
		timeout : 5000  // in milliseconds
 	});
	// Prepare the connection.
	client.open("GET", url);
	// Send the request.
	client.send();
	*/
	
	// Check to see if we have the email saved
	var db = Ti.Database.open('gluTracker');
	db.execute('CREATE TABLE IF NOT EXISTS settings (key TEXT, value TEXT)');
	
	//db.execute('DELETE FROM settings');
	
	var rows = db.execute('SELECT key, value FROM settings WHERE key = ?', 'phone_number');
	
	if(rows.rowCount > 0){
		// We found a phone number in the settings. Let's skip login
		var gluTabMenu = require('ui/common/ApplicationTabGroup');
		new gluTabMenu(rows.fieldByName('value')).open();
	}
	else{
		// No phone number found. Let's go login.
		var loginWindow = require('ui/handheld/login');
		new loginWindow().open();
	}

	rows.close();
	db.close();
	
	
	
})();
