export const getVinylList = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(() => {
				return [
					{
						id: "1",
						EAN13: "0196588678417",
						title: "Paperino alla scoperta del mondo",
						genre: "fantascienza",
						author: "Pippo e pluto",
					},
					{
						id: "2",
						EAN13: "0196588678419",
						title: "Paperino e l'oro del Ruanda",
						genre: "avventura",
						author: "Pippo da solo",
					},
				];
			});
		}, 1000);
	});
};


export const getVinylDetail = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			/* reject({ message: "Errore bruttissimo" }) */
			resolve(() => {
				return {
					id: "1",
					EAN13: "0196588678417",
					title: "Paperino alla scoperta del mondo",
					genre: "fantascienza",
					author: "Pippo e pluto",
					cover: "https://blog-cdn.reedsy.com/directories/admin/attachments/large_guerin-cover-7156b8.jpg",
					description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				}
			});
		}, 500);
	});
};
