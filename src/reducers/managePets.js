export let state;


export function managePets(state = {pets: []}, action){
  switch (action.type) {
    case 'ADD_PET':
      return {...state, pets: [...state.pets, action.pet]}
    case 'REMOVE_PET':
      let newObj = {...state, pets: [...state.pets]}
      for(var i = 0; i < newObj.pets.length; i++) {
        if(newObj.pets[i].id === action.id) {
          newObj.pets.splice(i, 1);
        }
      }
      return newObj
    default:
      return state
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function mapPets(list) {
  state.pets.map(pet => {
    let newPet = document.createElement('li')
    newPet.innerText = pet.name
    list.appendChild(newPet)
  })
}

export function render(){
  let container = document.getElementById('container');
  let petsList = state.pets.map((pet) => {
    return `<li>${pet.name}</li>`;
  }).join(' ');
  container.innerHTML = `<ul>${petsList}</ul>`;
}
