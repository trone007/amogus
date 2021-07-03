<template>
	<div>
		<div id="map" style="width: 600px; height: 400px">
		</div>
	</div>
</template>


<script>

export default {
	data() {
		return {
			map: null,
			connection: null,
			persons: [],
		}
	},
	mounted()
	{
		const mapScript = document.createElement('script')
		mapScript.setAttribute('src', 'https://api-maps.yandex.ru/2.1/?apikey=bfd21a41-ba64-49a3-a2bd-b7d139932aa5&lang=ru_RU')
		document.head.appendChild(mapScript)
		mapScript.onload = () => ymaps.ready(this.initMap);

		this.connection = new WebSocket("ws://localhost:3001");
		//
		// socket.addEventListener("open", function ()
		// {
		// 	console.log("CONNECTED");
		// 	console.log("open");
		// });


	},

	methods: {
		initMap()
		{
			this.map = new ymaps.Map("map", {
				center: [54.660901, 20.932067],
				zoom: 19,
				behaviors: [],
				controls: [],
				type: 'yandex#hybrid',
			});


			const location = ymaps.geolocation.get();
			location.then(
				result =>
				{
					console.log(result.geoObjects.position);
					this.map.setCenter(result.geoObjects.position, 19);

					const me = new ymaps.Placemark(result.geoObjects.position, {}, {
						iconLayout: 'default#image',
						iconImageHref: '/test/img/me.png',
						iconImageSize: [30, 30],
						iconImageOffset: [-15, -15]
					});
					const fov = new ymaps.Circle([result.geoObjects.position, 20]);
					this.map.geoObjects.add(me);
					this.map.geoObjects.add(fov);

					const message = {
						userId: 1,
						login: 'login',
						position: result.geoObjects.position,
					};
					this.connection.send(JSON.stringify(message));

					this.connection.addEventListener("message", function (e)
					{
						const message = e.data;
						console.log(message);
					});
				},
				err =>
				{
					console.log('Ошибка: ' + err)
				}
			);
		},

		addPerson(data)
		{
			this.persons.push(data);
			const pers = new ymaps.Placemark(data.position, {}, {
				iconLayout: 'default#image',
				iconImageHref: '/test/img/me.png',
				iconImageSize: [30, 30],
				iconImageOffset: [-35, -55]
			});
			this.map.geoObjects.add(pers);
		}
	}
}

</script>