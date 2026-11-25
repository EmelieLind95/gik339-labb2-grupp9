/* Uppgift 4 */
const checkboxElement = document.getElementById("divStyle");

const textfieldElement = document.getElementsByClassName("textfield");

const buttonElement = document.getElementById("regretButton");

const divElement = document.getElementById("emptyDiv");

/* Uppgift 5 */
function handleInput(e) {
  console.log(e.target);

  let textFieldId = e.target.id;
  if (textFieldId === "content") {
    let textFieldInput = e.target.value;
    divElement.innerHTML = textFieldInput;
  }
}

/*--- Uppgift 6 --- 
Koppla eventlyssnare till textfälten, 
checkboxen och knappen*/
checkboxElement.addEventListener("change", () => {
  const colorInput = document.getElementById("color");
  divElement.style.backgroundColor = colorInput.value;
});

//loopar igenom varje textfält
for (const textElement of textfieldElement) {
  textElement.addEventListener("input", handleInput);
  
}

//tar bort divElement när man klickar på knappen.
buttonElement.addEventListener("click", () => {
  divElement.remove();
});
