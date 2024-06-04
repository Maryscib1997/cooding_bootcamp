const cardElGen = (obj) => {

  const container = document.createElement('div');
  const imgEl = document.createElement('img');
  const titleEl = document.createElement('h4');
  const idEl = document.createElement('span');
  const typeEl = document.createElement('span')
  const descriptionEl = document.createElement('p');

  container.className = 'todo-card';

  imgEl.src = obj.image;
  imgEl.className = 'todo-card__img';
  imgEl.alt = obj.title;

  titleEl.className = 'todo-card__title';
  titleEl.textContent = obj.title;

  idEl.className = 'todo-card__id';
  idEl.textContent = `# ${obj.id}`;

  typeEl.className = 'todo-card__type';
  typeEl.textContent = obj.type;

  descriptionEl.className = 'todo-card__description';
  descriptionEl.textContent = obj.previewDescription;

  container.append(imgEl, titleEl, idEl, typeEl, descriptionEl);

  return container;
}


  const cardListGen = () => {
    const section = document.createElement('div');
    section.className = 'todo-list';

    return section;
  }

const btnGen = (id) => {
  const button = document.createElement('button');
  button.textContent = id;
  button.id = id.toLowerCase();

  return button
}
  export {
    cardElGen,
    cardListGen,
    btnGen
  }