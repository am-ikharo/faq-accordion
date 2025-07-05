const getWrapper = document.querySelectorAll('.question-holder');


getWrapper.forEach(currentItem => {
  currentItem.addEventListener('click', (event) => {
    if(currentItem.classList.contains('active')) {
      currentItem.classList.remove('active')
    } else {
      let getAlreadyAddedClasses = document.querySelectorAll('.active')

      getAlreadyAddedClasses.forEach(currentActiveItem => {
        currentActiveItem.classList.remove('active')
      })
      currentItem.classList.add('active')
    }
  })
})