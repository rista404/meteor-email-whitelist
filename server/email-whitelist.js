var getWhitelist = function() {
	return Meteor.settings.private.invitedEmails;
}


emailWhitelisted = function(email) {
	if(! typeof email === "string")
		throw new Meteor.Error(500, "Email address should be a string.");

	var invitedEmails = getWhitelist();

	var isInvited = _.contains(invitedEmails, email);

	return isInvited;
}