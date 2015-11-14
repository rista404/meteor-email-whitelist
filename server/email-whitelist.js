
// Fetches the METEOR_SETTINGS environment variable data
var getMeteorSettings = function() {

	if (typeof process.env.METEOR_SETTINGS === 'undefined') {
		return [];
	} else {

		try {
			return JSON.parse(process.env.METEOR_SETTINGS);
		} catch (e) {
			return [];
		}
	}
}


// Gets the array of whitelisted email addresses
var getWhitelist = function() {

	var meteorSettings = getMeteorSettings();

	if( meteorSettings.lenght === 0 || typeof meteorSettings.invitedEmails === 'undefined' || meteorSettings.invitedEmails.constructor.toString().indexOf("Array") === -1)
		return [];

	return meteorSettings.invitedEmails;
}

// Checks if the array of whitelisted emails contains passed one
emailWhitelisted = function(email) {

	if(typeof email !== "string")
		throw new Meteor.Error(500, "Email address should be a string.");

	// Fetches the list
	var invitedEmails = getWhitelist();

	var isInvited = _.contains(invitedEmails, email);

	// If invitedEmails is empty, return true for all addresses
	if(invitedEmails.length === 0)
		return true;

	return isInvited;
}
