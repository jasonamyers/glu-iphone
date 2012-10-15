function ApplicationWindow() {
	var self = Ti.UI.createWindow({
		backgroundColor:'#ADC6C4',
		barColor: '#466165'
	});
	
	
	//Create Login Label
	var label = Ti.UI.createLabel({
		color: '#900',
		font: { fontSize:22 },
		shadowColor: '#aaa',
		shadowOffset: {x:1, y:1},
		text: 'Phone Number',
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
		top: 30,
		width: 'auto', height: 'auto'
	});
	
	self.add(label);

	// Create Email Text Field
	var emailTextField = Ti.UI.createTextField({
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		color: '#336699',
		top: 75, left: 35,
		font:{fontSize:25},
		maxLength:10,
		keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
		width: 250, height: 60
	});

	self.add(emailTextField);

/*
	var image = Ti.UI.createImageView({
	image:'/images/logo_normal.png',
	top: 210,
	left: 25
	});
	self.add(image);
	*/
	// Create Login Button
	var loginButton = Ti.UI.createButton({
		height:46,
		width:200,
		title: 'Login',
		top:160,
		backgroundImage:'/images/button_bg.png',
		/*backgroundGradient: {
        type: 'linear',
        startPoint: { x: '0%', y: '50%' },
        endPoint: { x: '100%', y: '50%' },
        colors: [ { color: '#6EAA14', offset: 0.0}, { color: '#548A00', offset: 1.0 } ],
		},*/
    
	});
	self.add(loginButton);
	
	
	loginButton.addEventListener('click', function() {
		
		var phone_number = '+1' + emailTextField.getValue();
		
		// Add validation to the phone number, string length
		//Ti.API.info('Phone value: ' + emailTextField.getValue());
		
		// Save the phone number to the local database.
		var db = Ti.Database.open('gluTracker');
		db.execute('INSERT INTO settings (key, value) VALUES (?, ?)', 'phone_number', phone_number);
		db.close();
		
		var gluTabMenu = require('ui/common/ApplicationTabGroup');
		new gluTabMenu(phone_number).open();
		
	});
	
	return self;
};

module.exports = ApplicationWindow;
