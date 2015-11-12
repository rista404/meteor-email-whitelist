Accounts.validateNewUser(function (user) {

	// Gets the list of invited emails
	var invitedEmails = Meteor.settings.private.invitedEmails;

	// Gets the user's email
	var emailAddress = user.emails[0].address;

	// Returns a boolean representing email status
	var isInvited = _.contains(invitedEmails, emailAddress);

	if( isInvited )
		return true;
	else
		throw new Meteor.Error(401, "You're not invited to join, sorry.");

}