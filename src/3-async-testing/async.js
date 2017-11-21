export const getTweets = () =>
	fetch(
		'https://api.anwb.nl/v1/twitter?apikey=RZTq8Tg7GSznX7l3KtfeMlXenWIpsSlk&user=259787794'
	)
		.then(response => response.json())
		.then(json => json);

export const getLastHashTags = () =>
	getTweets().then(apiResponse => {
		const lastTweet = apiResponse.tweets[0];

		return lastTweet.hashtags;
	});
