const cardElGen = (obj) => {

  const container = document.createElement('div');
  const imgEl = document.createElement('img');
  const titleEl = document.createElement('h4');
  const idEl = document.createElement('span');
  const descriptionEl = document.createElement('p');

  container.className = 'todo-card';

  imgEl.src = obj.image;
  imgEl.className = 'todo-card__img';
  imgEl.alt = obj.title;

  titleEl.className = 'todo-card__title';
  titleEl.textContent = obj.title;

  idEl.className = 'todo-card__id';
  idEl.textContent = `# ${obj.id}`;

  descriptionEl.className = 'todo-card__description';
  descriptionEl.textContent = obj.previewDescription;

  container.append(imgEl, titleEl, idEl, descriptionEl);

  return container;
}


  const cardListGen = () => {
    const section = document.createElement('div');
    section.className = 'todo-list';

    return section;
  }

   
//array of images to generate a random one
const images = [
  "https://plus.unsplash.com/premium_photo-1714669889975-90386fbb03e4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1714662390433-443073660a26?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1626803775151-61d756612f97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1607206608117-31f7a8a0ee46?q=80&w=1927&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1715073943805-2a455de260ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1619413922783-13d5a4ed3e84?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1716584036745-5f5049e3e822?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1618508369765-6099b7207c06?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

  export {
    cardElGen,
    cardListGen, 
    images
  }