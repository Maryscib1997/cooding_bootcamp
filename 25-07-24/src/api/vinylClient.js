export const getVinylList = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(() => {
				return [
					{
						id: "1",
						ean13: "0-8783-3579-X",
						title: "Materia (Terra)",
						genre: "pop",
						author: "Marco Mengoni",
					},
					{
						id: "2",
						ean13: "0-8783-3579-Y",
						title: "Casta Diva",
						genre: "lirico",
						author: "Maria Callas",
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
					ean13: "0-8783-3579-X",
					title: "Materia (Terra)",
					genre: "pop",
					author: "Marco Mengoni",
					cover: "https://blog-cdn.reedsy.com/directories/admin/attachments/large_guerin-cover-7156b8.jpg",
					description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				}
			});
		}, 500);
	});
};

export const addVinyl = (body) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(
				{
					...body, id: self.crypto.randomUUID(),
				}
			)
		}, 3000)
	})
}

export const editVinyl = (body) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(
				{
					...body,
				}
			)
		}, 3000)
	})
}
