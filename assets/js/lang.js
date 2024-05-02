const languageSelecttop = document.querySelector("select");

languageSelecttop.addEventListener("change", (event) => {
  setLanguage(event.target.value)
})

const setLanguage = (language) => {
  if(language == "de"){
    console.log(language);
  }
  if(language == "bn"){
    console.log(language);
  }else if (language == "en"){
    console.log(language)
  }
}