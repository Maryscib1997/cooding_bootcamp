<<<<<<< HEAD
export const getVinylList = async () => {
	try {
	  const res = await fetch("http://localhost:3000/vinyls");
	  return res.json();
	} catch (error) {
	  throw Error(error);
	}
  };
  
  export const getVinylDetail = async (id) => {
	try {
	  const res = await fetch(`http://localhost:3000/vinyls-detail/${id}`);
	  return res.json();
	} catch (error) {
	  throw Error(error);
	}
  };
  
  export const addVinyl = async (body) => {
	const id = crypto.randomUUID(); // Usando crypto standard per UUID
	const vinylNoDetail = { id, title: body.title, artist: body.artist, isbn: body.isbn, genre: body.genre };
  
	try {
	  await fetch("http://localhost:3000/vinyls", {
		method: "POST",
		headers: {
		  "Content-Type": "application/json"
		},
		body: JSON.stringify(vinylNoDetail)
	  });
  
	  const res = await fetch("http://localhost:3000/vinyls-detail", {
		method: "POST",
		headers: {
		  "Content-Type": "application/json"
		},
		body: JSON.stringify({ id, ...body, "cover": "https://blog-cdn.reedsy.com/directories/admin/attachments/large_guerin-cover-7156b8.jpg" })
	  });
	  return res.json();
	} catch (error) {
	  throw Error(error);
	}
  };
  
  export const editVinyl = (body) => {
	return new Promise((resolve) => {
	  setTimeout(() => {
		resolve({ ...body });
	  }, 3000);
	});
  };
  
  export const deleteVinyl = async (id) => {
	try {
	  await fetch(`http://localhost:3000/vinyls/${id}`, {
		method: "DELETE"
	  });
  
	  const res = await fetch(`http://localhost:3000/vinyls-detail/${id}`, {
		method: "DELETE"
	  });
  
	  return res.json();
	} catch (error) {
	  throw Error(error);
	}
  };
=======
export const getVinylList = async () => {
	try {
	  const res = await fetch("http://localhost:3000/vinyls");
	  return res.json();
	} catch (error) {
	  throw Error(error);
	}
  };
  
  export const getVinylDetail = async (id) => {
	try {
	  const res = await fetch(`http://localhost:3000/vinyls-detail/${id}`);
	  return res.json();
	} catch (error) {
	  throw Error(error);
	}
  };
  
  export const addVinyl = async (body) => {
	const id = crypto.randomUUID(); // Usando crypto standard per UUID
	const vinylNoDetail = { id, title: body.title, artist: body.artist, isbn: body.isbn, genre: body.genre };
  
	try {
	  await fetch("http://localhost:3000/vinyls", {
		method: "POST",
		headers: {
		  "Content-Type": "application/json"
		},
		body: JSON.stringify(vinylNoDetail)
	  });
  
	  const res = await fetch("http://localhost:3000/vinyls-detail", {
		method: "POST",
		headers: {
		  "Content-Type": "application/json"
		},
		body: JSON.stringify({ id, ...body, "cover": "https://blog-cdn.reedsy.com/directories/admin/attachments/large_guerin-cover-7156b8.jpg" })
	  });
	  return res.json();
	} catch (error) {
	  throw Error(error);
	}
  };
  
  export const editVinyl = (body) => {
	return new Promise((resolve) => {
	  setTimeout(() => {
		resolve({ ...body });
	  }, 3000);
	});
  };
  
  export const deleteVinyl = async (id) => {
	try {
	  await fetch(`http://localhost:3000/vinyls/${id}`, {
		method: "DELETE"
	  });
  
	  const res = await fetch(`http://localhost:3000/vinyls-detail/${id}`, {
		method: "DELETE"
	  });
  
	  return res.json();
	} catch (error) {
	  throw Error(error);
	}
  };
>>>>>>> f5516dda867c56536613e003d050e9e758f98dfc
  