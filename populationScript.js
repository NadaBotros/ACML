const Spot = require('./models/Spots')

exports.populate = async () => {
	//P1
	const lng = [
		29.98529,
		29.985293,
		29.985295,
		29.985296,
		29.985295,
		29.985295,
		29.985295,
		29.985284,
		29.985286,
		29.985286,
		29.985277,
		29.985282,
		29.985293,
		29.985287,
		29.985281,
		29.985282,
		29.985385,
		29.985433,
		29.985434,
		29.985435,
		29.985431,
		29.98543,
		29.985433,
		29.985428,
		29.985435,
		29.985358,
		29.985358,
		29.985354,
		29.985358
	]
	const lat = [
		31.440967,
		31.441018,
		31.441072,
		31.441117,
		31.441186,
		31.441186,
		31.441186,
		31.441329,
		31.441383,
		31.441435,
		31.441486,
		31.441536,
		31.441588,
		31.441642,
		31.441689,
		31.441746,
		31.441317,
		31.441386,
		31.441434,
		31.441486,
		31.44154,
		31.441593,
		31.441644,
		31.441697,
		31.441748,
		31.441405,
		31.441523,
		31.441627,
		31.441694
	]
	let spot = {}
	let proms = []
	for (let i = 0; i < lat.length; i++) {
		spot = {
			longitude: lng[i],
			latitude: lat[i],
			occupied: false,
			parkingLot: 1,
			name: 'Spot ' + i
		}
		proms.push(Spot.create(spot))
	}
	await Promise.all(proms)

	//P8
	const lng1 = [
		29.985423,
		29.985426,
		29.985423,
		29.98542,
		29.985418,
		29.985422,
		29.985422,
		29.985419,
		29.985418,
		29.985417,
		29.985412,
		29.985414,
		29.985415,
		29.985418,
		29.985415,
		29.985417,
		29.985282,
		29.985282,
		29.985278,
		29.985278,
		29.985275,
		29.985275,
		29.985273,
		29.985271,
		29.98527,
		29.98527,
		29.985271,
		29.98527,
		29.985272,
		29.985272,
		29.985266,
		29.985271,
		29.98527,
		29.985347,
		29.985344,
		29.985346,
		29.985344,
		29.985346,
		29.985343
	]
	const lat1 = [
		31.44196,
		31.442015,
		31.442069,
		31.442119,
		31.442169,
		31.442223,
		31.442276,
		31.442331,
		31.4424,
		31.442455,
		31.44251,
		31.442558,
		31.442624,
		31.442683,
		31.442742,
		31.442795,
		31.441965,
		31.442015,
		31.442067,
		31.442115,
		31.442194,
		31.442243,
		31.442294,
		31.44235,
		31.442404,
		31.442453,
		31.442503,
		31.442555,
		31.442612,
		31.442661,
		31.442713,
		31.442762,
		31.442819,
		31.442157,
		31.442275,
		31.442404,
		31.442531,
		31.442641,
		31.44276
	]
	let proms1 = []
	for (let i = 0; i < lat1.length; i++) {
		spot = {
			longitude: lng1[i],
			latitude: lat1[i],
			occupied: false,
			parkingLot: 8,
			name: 'Spot ' + i
		}
		proms.push(Spot.create(spot))
	}
	await Promise.all(proms1)

	//P7
	const lng2 = [
		29.9852,
		29.985198,
		29.985198,
		29.985192,
		29.985187,
		29.985192,
		29.985193,
		29.985197,
		29.985195,
		29.985192,
		29.985191,
		29.985187,
		29.985187,
		29.985192,
		29.985189,
		29.985189,
		29.985189,
		29.985056,
		29.985055,
		29.985054,
		29.985053,
		29.985047,
		29.985048,
		29.985048,
		29.985046,
		29.985046,
		29.985044,
		29.985048,
		29.985045,
		29.985047,
		29.985044,
		29.985042,
		29.985044,
		29.985045,
		29.985122,
		29.98512,
		29.985117,
		29.985119,
		29.985116,
		29.985119,
		29.985114
	]
	const lat2 = [
		31.44196,
		31.442017,
		31.442063,
		31.442117,
		31.442168,
		31.442221,
		31.442271,
		31.442323,
		31.442374,
		31.442428,
		31.442479,
		31.442532,
		31.442581,
		31.442634,
		31.442689,
		31.442738,
		31.44279,
		31.441956,
		31.442016,
		31.442063,
		31.442113,
		31.442165,
		31.442217,
		31.442268,
		31.442319,
		31.44237,
		31.442424,
		31.442473,
		31.442526,
		31.442579,
		31.44263,
		31.442685,
		31.442734,
		31.442787,
		31.442049,
		31.442158,
		31.442268,
		31.44239,
		31.442501,
		31.442608,
		31.442714
	]
	let proms2 = []
	for (let i = 0; i < lat2.length; i++) {
		spot = {
			longitude: lng2[i],
			latitude: lat2[i],
			occupied: false,
			parkingLot: 7,
			name: 'Spot ' + i
		}
		proms.push(Spot.create(spot))
	}
	await Promise.all(proms2)

	const lng3 = [
		29.98498,
		29.984979,
		29.984978,
		29.984973,
		29.984972,
		29.98497,
		29.98497,
		29.984965,
		29.984966,
		29.984971,
		29.984968,
		29.984968,
		29.98497,
		29.984965,
		29.984969,
		29.984961,
		29.984967,
		29.984837,
		29.984831,
		29.984829,
		29.984829,
		29.984826,
		29.984828,
		29.984829,
		29.984827,
		29.984824,
		29.984824,
		29.984824,
		29.984821,
		29.984824,
		29.984826,
		29.984826,
		29.984823,
		29.984909,
		29.984903,
		29.984899,
		29.9849,
		29.984904,
		29.984903,
		29.9849
	]
	const lat3 = [
		31.44196,
		31.44201,
		31.44206,
		31.442113,
		31.442164,
		31.442219,
		31.442263,
		31.442318,
		31.442368,
		31.442425,
		31.442477,
		31.44253,
		31.442583,
		31.442633,
		31.442685,
		31.442733,
		31.442786,
		31.44196,
		31.442055,
		31.442107,
		31.442157,
		31.442213,
		31.442265,
		31.44231,
		31.442368,
		31.442421,
		31.442474,
		31.442527,
		31.442573,
		31.442627,
		31.442675,
		31.44273,
		31.442782,
		31.442023,
		31.44214,
		31.44226,
		31.442376,
		31.442479,
		31.442592,
		31.442708
	]
	let proms3 = []
	for (let i = 0; i < lat3.length; i++) {
		spot = {
			longitude: lng3[i],
			latitude: lat3[i],
			occupied: false,
			parkingLot: 6,
			name: 'Spot ' + i
		}
		proms.push(Spot.create(spot))
	}
	await Promise.all(proms3)

	//P5
	const lng4 = [
		29.98476,
		29.984755,
		29.984752,
		29.984755,
		29.984747,
		29.984748,
		29.984748,
		29.984749,
		29.984747,
		29.984608,
		29.984608,
		29.984605,
		29.984607,
		29.984605,
		29.984609,
		29.984602,
		29.984602,
		29.984601,
		29.984681,
		29.984679,
		29.984675,
		29.984675
	]
	const lat4 = [
		31.441956,
		31.442006,
		31.442061,
		31.442117,
		31.442164,
		31.442213,
		31.442266,
		31.442317,
		31.442368,
		31.441953,
		31.442004,
		31.442058,
		31.442107,
		31.44216,
		31.442215,
		31.442264,
		31.442319,
		31.442364,
		31.442042,
		31.442153,
		31.442276,
		31.442348
	]
	let proms4 = []
	for (let i = 0; i < lat4.length; i++) {
		spot = {
			longitude: lng4[i],
			latitude: lat4[i],
			occupied: false,
			parkingLot: 5,
			name: 'Spot ' + i
		}
		proms.push(Spot.create(spot))
	}
	await Promise.all(proms4)
}
