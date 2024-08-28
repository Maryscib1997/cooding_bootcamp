export const getVinylList =  async () => {
	try {
		const res = await fetch("http://localhost:3000/books");
		return res.json()
	} catch (error) {
		throw Error(error)
	}
};

export const getVinylDetail = sync (id) => {
	try {
		const res = await fetch(`http://localhost:3000/books-detail/${id}`);
		return res.json()
	} catch (error) {
		throw Error(error)
	}
};

export const addVinyl = = async (body) => {

	const id = self.crypto.randomUUID();
	const bookNoDetail = { id, title: body.title, author: body.author, isbn: body.isbn, genre: body.genre }

	try {

		await fetch("http://localhost:3000/books", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(bookNoDetail)
		})


		const res = await fetch("http://localhost:3000/books-detail", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ id, ...body, "cover": "https://blog-cdn.reedsy.com/directories/admin/attachments/large_guerin-cover-7156b8.jpg", })
		})
		return res.json()
	} catch (error) {
		throw Error(error)
	}
}

export const deleteVinyl = async (id) => {
	try {

		await fetch(`http://localhost:3000/vinyl/${id}`, {
			method: "DELETE"
		});

		const res = await fetch(`http://localhost:3000/vinyl-detail/${id}`, {
			method: "DELETE"
		});

		return res.json()
	} catch (error) {
		throw Error(error)
	}
}