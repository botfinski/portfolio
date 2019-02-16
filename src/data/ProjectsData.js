const projects = [
	{
		id: 0, 
		title: 'Black',
		category: 'colour',
		url: 'black',
		image: 'black.jpg',
		content: {
			description: `Black is the darkest color, the result of the absence or complete absorption of visible light. It is an achromatic color, literally a color without hue, like white and gray. It is often used symbolically or figuratively to represent darkness, while white represents light.`,
			structure: [
				['image1_small.jpg', 'image1_small.jpg', 'image1_small.jpg'],
				['image2_medium.jpg', 'image2_medium.jpg'],
				['image3_large.jpg']
			]
		}
	}, 
	{
		id: 1, 
		title: 'Cow',
		category: 'nice cows',
		url: 'cow',
		image: 'cow_mini.jpg',
		content: {
			description: `Cattle—colloquially cows—are the most common type of large domesticated ungulates. They are a prominent modern member of the subfamily Bovinae, are the most widespread species of the genus Bos, and are most commonly classified collectively as Bos taurus`,
			structure: [
				['cow_medium.jpg', 'cow_medium.jpg']
			]
		}
	}, 
	{
		id: 2, 
		title: 'F-16',
		category: 'Fighting Falcon',
		url: 'f16',
		image: 'f16_mini.jpg',
		content: {
			description: `The General Dynamics F-16 Fighting Falcon is a single-engine supersonic multirole fighter aircraft originally developed by General Dynamics (now Lockheed Martin) for the United States Air Force (USAF). Designed as an air superiority day fighter, it evolved into a successful all-weather multirole aircraft. Over 4,500 aircraft have been built since production was approved in 1976. Although no longer being purchased by the U.S. Air Force, improved versions are being built for export customers. In 1993, General Dynamics sold its aircraft manufacturing business to the Lockheed Corporation, which in turn became part of Lockheed Martin after a 1995 merger with Martin Marietta.`,
			structure: [
				['f16_small.jpg', 'f16_small.jpg', 'f16_small.jpg']
			]
		}
	},
	{
		id: 3, 
		title: 'Lime',
		category: 'tasty fruit',
		url: 'lime',
		image: 'lime.jpg',
		content: {
			description: `Lime, also called lime green, lime-green, or bitter lime, is a color that is a shade of green, so named because it is a representation of the color of the citrus fruit called limes. It is the color that is in between the web color chartreuse and yellow on the color wheel.`,
			structure: [
				['lime_small.jpg', 'lime_small.jpg', 'lime_small.jpg']
			]
		}
	},
	{
		id: 4, 
		title: 'Mig-29',
		category: 'Fulcrum',
		url: 'mig29',
		image: 'mig29_mini.jpg',
		content: {
			description: `The Mikoyan MiG-29 (Russian: Микоян МиГ-29; NATO reporting name: Fulcrum) is a twin-engine jet fighter aircraft designed in the Soviet Union. Developed by the Mikoyan design bureau as an air superiority fighter during the 1970s, the MiG-29, along with the larger Sukhoi Su-27, was developed to counter new U.S. fighters such as the McDonnell Douglas F-15 Eagle and the General Dynamics F-16 Fighting Falcon. The MiG-29 entered service with the Soviet Air Forces in 1982`,
			structure: [
				['mig29_medium.jpg', 'mig29_medium.jpg']			
			]
		}
	},
	{
		id: 5, 
		title: 'Red',
		category: 'spicy',
		url: 'red',
		image: 'red.jpg',
		content: {
			description: `Red is the color at the end of the visible spectrum of light, next to orange and opposite violet. It has a dominant wavelength of approximately 625–740 nanometres. It is a primary color in the RGB color model and the CMYK color model, and is the complementary color of cyan. Reds range from the brilliant yellow-tinged scarlet and vermillion to bluish-red crimson, and vary in shade from the pale red pink to the dark red burgundy.`,
			structure: [
				['red_medium.jpg', 'red_medium.jpg']
			]
		}
	}, 
	{
		id: 6, 
		title: 'Corvette ZR1',
		category: 'fast car',
		url: 'corvette',
		image: 'corvette_mini.jpg',
		content: {
			description: `ZR1 has returned to the throne to push the Corvette legacy to its highest point ever. It’s a supercar that’s at once luxurious and overwhelmingly capable, delivering the icon’s fastest, most powerful, most advanced performance in a production Corvette to date. Drivers, hail the new King.`,
			structure: [
				['corvette_small.jpg', 'corvette_small.jpg', 'corvette_small.jpg']
			]
		}
	},
	{
		id: 7, 
		title: 'Rooster',
		category: 'chicken',
		url: 'rooster',
		image: 'rooster_mini.jpg',
		content: {
			description: `A rooster, also known as a cockerel or cock, is an adult male gallinaceous bird, usually a male chicken (Gallus gallus domesticus).
			Mature male chickens less than one year old are called cockerels. The term "rooster" originates in the United States, and the term is widely used throughout North America, as well as Australia and New Zealand. The older terms "cock" or "cockerel", the latter denoting a young cock, are used in the United Kingdom and Ireland.`,
			structure: [
				['rooster_small.jpg', 'rooster_small.jpg', 'rooster_small.jpg'],
				['rooster_medium.jpg','rooster_medium.jpg']
			]
		}
	},
	{
		id: 8, 
		title: 'Money',
		category: 'valuable',
		url: 'money',
		image: 'money_mini.jpg',
		content: {
			description: `Money is any item or verifiable record that is generally accepted as payment for goods and services and repayment of debts, such as taxes, in a particular country or socio-economic context. The main functions of money are distinguished as: a medium of exchange, a unit of account, a store of value and sometimes, a standard of deferred payment. Any item or verifiable record that fulfills these functions can be considered as money.`,
			structure: [
				['money_medium.jpg','money_medium.jpg'],
				['money_small.jpg', 'money_small.jpg', 'money_small.jpg']
			]
		}
	},
	{
		id: 9, 
		title: 'Bugs',
		category: 'insect',
		url: 'bug',
		image: 'bug_mini.jpg',
		content: {
			description: `Insects or Insecta (from Latin insectum) are hexapod invertebrates and the largest group within the arthropod phylum. Definitions and circumscriptions vary; usually, insects comprise a class within the Arthropoda. As used here, the term Insecta is synonymous with Ectognatha. Insects have a chitinous exoskeleton, a three-part body (head, thorax and abdomen), three pairs of jointed legs, compound eyes and one pair of antennae. Insects are the most diverse group of animals; they include more than a million described species and represent more than half of all known living organisms. The total number of extant species is estimated at between six and ten million; potentially over 90% of the animal life forms on Earth are insects. Insects may be found in nearly all environments, although only a small number of species reside in the oceans, which are dominated by another arthropod group, crustaceans`,
			structure: [
				['bug_medium.jpg','bug_medium.jpg']
			]
		}
	},
	{
		id: 10, 
		title: 'Bread',
		category: 'tasty pastry',
		url: 'bread',
		image: 'bread_mini.jpg',
		content: {
			description: `Bread is a staple food prepared from a dough of flour and water, usually by baking. Throughout recorded history it has been a prominent food in large parts of the world and is one of the oldest man-made foods, having been of significant importance since the dawn of agriculture.

			Bread may be leavened by processes such as reliance on naturally occurring sourdough microbes, chemicals, industrially produced yeast, or high-pressure aeration. Commercial bread commonly contains additives to improve flavor, texture, color, shelf life, nutrition, and ease of manufacturing.`,
			structure: [
				['bread_small.jpg','bread_small.jpg','bread_small.jpg'],
				['bread_large.jpg']
			]
		}
	}
	
]

export default projects

