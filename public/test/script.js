;(function ()
{
	ymaps.ready(init);

	function init()
	{
		// Создание карты.
		const myMap = new ymaps.Map("map", {
			center: [55.76, 37.64],
			zoom: 19,
			behaviors: []
		});


		const location = ymaps.geolocation.get({
			mapStateAutoApply: true
		});
		location.then(
			function (result)
			{
				myMap.geoObjects.add(result.geoObjects)
				myMap.setCenter(result.geoObjects.position, 6);
			},
			function (err)
			{
				console.log('Ошибка: ' + err)
			}
		);
	}

})()