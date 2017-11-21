import { getLastHashTags } from './async';

/**
 * 3.0. Mocking an api call
 */
fetch.mockResponse(
	JSON.stringify({
		variables: {
			user: '259787794',
		},
		dateTime: '2017-11-20T20:15:52.010Z',
		tweets: [
			{
				user: {
					name: 'ANWBeuropa',
					screenName: 'ANWBeuropa',
				},
				timestamp: 1511204318000,
				text:
					'Door een technische storing is de Grote Sint Bernardtunnel tussen #Zwitserland en #Italie dicht Er zijn problemen m… https://t.co/QkzjywyvI4',
				id: '932684629311619072',
				hashtags: ['Zwitserland', 'Italie'],
			},
		],
	})
);

test('The getLastHashTags function should return an array containing the last hastags', async () => {
	// const hashTags = await getLastHashTags();
	// expect()
});
