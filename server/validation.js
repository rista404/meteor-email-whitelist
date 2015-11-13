Accounts.validateNewUser(function (user) {

	// Gets the user's email
	var email = user.emails[0].address;

	// Returns a boolean representing email status
	if( emailWhitelisted(email) )
		return true;
	else
		throw new Meteor.Error(401, "You're not invited to join, sorry.");

});