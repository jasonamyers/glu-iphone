function ApplicationTabGroup(phone_number) {
	//create module instance
	var self = Ti.UI.createTabGroup();
	
	//var tabs =  json;
	
	var tabs = new Array({
		title: 'Measurements',
		icon: '77-ekg',
		window: 'measurements'
	}
	//{
	//	title: 'Notifications',
	//	icon: '184-warning',
	//	window: 'notifications'
	//},
	///{
	///	title: '360 Resuults',
	//	icon: '01-refresh',
	//	window: '360-results'
	//}
	);
	
	for (var i = 0; i < tabs.length; i++) {
		var Window = require('ui/handheld/' + tabs[i].window);
		//var Window = require('ui/handheld/ApplicationWindow');
	
    	var win = new Window(L(phone_number));
    	
    	var tab = Ti.UI.createTab({
			title: L(tabs[i].title),
			icon: 'icons/' + tabs[i].icon + '.png',
			window: win
		});
		
		win.containingTab = tab;
		
		self.addTab(tab);
	}

	return self;
};

module.exports = ApplicationTabGroup;
