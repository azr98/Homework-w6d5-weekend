document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript has loaded');

  formElement = document.querySelector('#new-item-form')

  const handleFormSubmit = function(event) {
    event.preventDefault()
    const name = event.target.name.value
    const type = event.target.type.value
    const lore = event.target.lore.value

    const new_name = document.createElement('li')
    const new_type = document.createElement('li')
    const new_lore = document.createElement('li')
    br = document.createElement('br')

    new_name.textContent = name
    new_type.textContent = type
    new_lore.textContent = lore

    const championList = document.querySelector('#champion-list')
    championList.appendChild(new_name)
    championList.appendChild(new_type)
    championList.appendChild(new_lore)
    championList.appendChild(br)
    formElement.reset()
  }

  formElement.addEventListener('submit', handleFormSubmit)

  const buttonElement = document.querySelector('#delete-button')

  const handleDeleteButton = function() {
    const readingList = document.querySelector('#reading-list')
    readingList.textContent = " "
  }

  buttonElement.addEventListener('click', handleDeleteButton)

});
