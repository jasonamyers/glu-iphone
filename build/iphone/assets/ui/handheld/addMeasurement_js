function ApplicationWindow(phone_number) {
	var self = Ti.UI.createWindow({
		title:'Add Measurement',
		backgroundColor:'#ADC6C4',
		barColor: '#466165',
		modal: true
	});
	
	// create close btn
	var closeBtn = Ti.UI.createButton({
		title: "Close",
	});
	
	closeBtn.addEventListener('click', function() {
		self.close();
	});
	
	self.setLeftNavButton(closeBtn);
	
	
	
	//Create Label
	var label = Ti.UI.createLabel({
		color: '#900',
		font: { fontSize:22 },
		shadowColor: '#aaa',
		shadowOffset: {x:1, y:1},
		text: 'Measurement',
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
		top: 30,
		width: 'auto', height: 'auto'
	});
	
	self.add(label);

	// Create Email Text Field
	var measurementTextField = Ti.UI.createTextField({
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		color: '#336699',
		top: 75, left: 35,
		font:{fontSize:25},
		maxLength:10,
		keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
		width: 250, height: 60
	});

	self.add(measurementTextField);
	
	/*
	var image = Ti.UI.createImageView({
	image:'/images/logo_normal.png',
	top: 210,
	left: 25
	});
	self.add(image);
	*/
	// Create Login Button
	
	var saveBtn = Ti.UI.createButton({
		title: 'Save'
	});
	
	saveBtn.addEventListener('click', function() {
		
		
		// Send off the measurement to the server
		 // Get the data from the Server for meausrements
    	var url = "http://www.glutracker.com/add/json";

		var client = Ti.Network.createHTTPClient({
		// function called when the response data is available
		onload : function(e) {
			
			Ti.App.fireEvent('refresh_entries', {phone:phone_number});
			
			var response = JSON.parse(this.responseText);
			Ti.API.info('API response from /add/json: ' + response);
			
			self.close();
		},
		// function called when an error occurs, including a timeout
		onerror : function(e) {
			Ti.API.debug(e.error);
			alert('An error occured. Possibly a timeout.');
		},
		timeout : 5000  // in milliseconds
	});
 	
	// Prepare the connection.
	client.open("POST", url);
	client.setRequestHeader("Content-Type", "application/json");
	
	// Send the request.
	client.send(JSON.stringify({'phone':phone_number, 'entry':measurementTextField.getValue()}));
	
		
	});
	
	self.setRightNavButton(saveBtn);
	
	return self;
};

module.exports = ApplicationWindow;
