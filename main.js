const getquestionHolder = document.querySelectorAll('.question-holder');


getquestionHolder.forEach(currentItem => {
  currentItem.addEventListener('click', (event) => {
    if(currentItem.classList.contains('active')){
      currentItem.classList.remove('active');
    }else {
      let getAlreadyAddedClassList = document.querySelectorAll('.active');
      getAlreadyAddedClassList.forEach(currentActiveClasses => {
        currentActiveClasses.classList.remove('active')
      })
      currentItem.classList.add('active')
    }
  })
})