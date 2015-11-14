Tinytest.add("Is email allowed if meteor settings file is empty", function (test) {

	process.env.METEOR_SETTINGS = '{}';

	test.isTrue(emailWhitelisted("example@mail.com"), 'Expected to allow every email');

});

Tinytest.add("Is email allowed if it is whitelisted", function (test) {

	process.env.METEOR_SETTINGS = '{"invitedEmails": ["example@mail.com"]}';

	test.isTrue(emailWhitelisted("example@mail.com"), 'Expected to allow the whitelisted email');

});

Tinytest.add("Is email allowed if it isn't whitelisted", function (test) {

	process.env.METEOR_SETTINGS = '{"invitedEmails": ["mail@example.com"]}';

	test.isFalse(emailWhitelisted("example@mail.com"), 'Expected not to allow the whitelisted email');

});


