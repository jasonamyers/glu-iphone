function ApplicationWindow(phone_number) {
	var self = Ti.UI.createWindow({
		title:'Measurements',
		backgroundColor:'#ADC6C4',
		barColor: '#466165'
	});
	
	
	
	// create the add measuresment button
	var addBtn = Ti.UI.createButton({
		title: "Add",
	});
	
	addBtn.addEventListener('click', function() {
		
		var addMeasurementWin = require('ui/handheld/addMeasurement');
		new addMeasurementWin(phone_number).open();
		
	});
	
	self.setRightNavButton(addBtn);
	
	// Create webview for Raphael JS chart
	/*var webview = Titanium.UI.createWebView({url:'http://www.google.com', bottom: 100});
    self.add(webview);*/
	
	loadEntries(phone_number);
	
	Ti.App.addEventListener('refresh_entries', function(data) 
	{ 
		loadEntries(data.phone);
	});
	
	function loadEntries(phone_number){
		// Get the data from the Server for meausrements
    	var url = "http://www.glutracker.com/entries/json";
	   	 //url = 'http://requestb.in/olnanaol';
		var client = Ti.Network.createHTTPClient({
		// function called when the response data is available
		onload : function(e) {
			var response = JSON.parse(this.responseText);
			var results = response.results;
			
			
			var measurements = Ti.UI.createTableViewSection({ headerTitle: 'Date - Time               Measurement' });
			
			for (var i = 0; i < results.length; i++) {
				Ti.API.info(results[i]);
				
				measurements.add(Ti.UI.createTableViewRow({
					title: String(results[i].time) + '               ' + String(results[i].measurement),
					backgroundColor: '#FFF'
				}));
			}
			
			
			var gluDataTable = Ti.UI.createTableView({
	 			backgroundColor:'#ADC6C4',
			});

			self.add(gluDataTable);
			self.open();
			
			gluDataTable.setData([ measurements ]);
		},
		// function called when an error occurs, including a timeout
		onerror : function(e) {
			Ti.API.debug(e.error);
			alert('An error occured. Possibly a timeout.');
		},
		timeout : 5000  // in milliseconds
 	});
 	
	// Prepare the connection.
	
	client.setRequestHeader("Content-Type", "application/json; charset=utf-8");
	client.open("POST", url);
	client.setRequestHeader("Content-Type", "application/json; charset=utf-8");
	
	// Send the request.
	Ti.API.info('number for sql: ' + phone_number);

	client.send(JSON.stringify({'phone':phone_number}));
	}
	
	
	return self;
};

module.exports = ApplicationWindow;
