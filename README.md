# Email Whitelist

Restrict registration to a list of email addresses

```sh
meteor add rista404:email-whitelist
```

# Instructions

Just add private `invitedEmails` array inside your settings.json file.

Example:

```js
{
	"private": {
		"invitedEmails": [
			"email1@example.com",
			"woohoo@unicorn.com"
		]
	}
}
```

In case you don't have a settings.json file, add one in the project's root and start meteor like this:

```
meteor --settings settings.json
```

# Notice

This package is currently in a working state, but without tests and aditional functionality.



