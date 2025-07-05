const getQuestionHolder = document.querySelectorAll(".question-holder");
const image1 = './assets/images/icon-plus.svg'
const image2 = './assets/images/icon-minus.svg'




getQuestionHolder.forEach((currentItem) => {
  currentItem.addEventListener("click", (event) => {
    if (currentItem.classList.contains("active")) {
      currentItem.classList.remove("active");
      
    } else {
      let getAlreadyAddedActiveClasses = document.querySelectorAll(".active");

      getAlreadyAddedActiveClasses.forEach((currentActiveItem) => {
        currentActiveItem.classList.remove("active");
        
      });
      currentItem.classList.add("active");
      
      
    }
  });
});


console.log(getWrapper);
