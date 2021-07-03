;(function ()
{
	ymaps.ready(init);

	function init()
	{
		const myMap = new ymaps.Map("map", {
			center: [54.660901, 20.932067],
			zoom: 19,
			// behaviors: [],
			controls: [],
			type: 'yandex#hybrid',
		});


		const location = ymaps.geolocation.get({
			// mapStateAutoApply: true
		});
		location.then(
			result => {
				myMap.setCenter(result.geoObjects.position, 19);



				const me = new ymaps.Placemark(result.geoObjects.position, {}, {
					iconLayout: 'default#image',
					iconImageHref: '/test/img/me.png',
					iconImageSize: [30, 30],
					iconImageOffset: [-15,-15]
				});
				const fov = new ymaps.Circle([result.geoObjects.position, 20]);
				myMap.geoObjects.add(me);
				myMap.geoObjects.add(fov);


				const coor1 = [
					result.geoObjects.position[0] + 0.0001,
					result.geoObjects.position[1] + 0.0001
				];
				const pers1 = new ymaps.Placemark(coor1, {}, {
					iconLayout: 'default#image',
					iconImageHref: '/test/img/1.png',
					iconImageSize: [45, 45],
				});
				myMap.geoObjects.add(pers1);

				const coor2 = [
					result.geoObjects.position[0] - 0.0002,
					result.geoObjects.position[1] - 0.0005
				];
				const pers2 = new ymaps.Placemark(coor2, {}, {
					iconLayout: 'default#image',
					iconImageHref: '/test/img/2.png',
					iconImageSize: [45, 45],
				});
				myMap.geoObjects.add(pers2);


			},
			err => {
				console.log('Ошибка: ' + err)
			}
		);
	}

})()