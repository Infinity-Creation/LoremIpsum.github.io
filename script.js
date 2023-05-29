const generateButton = document.getElementById("generate-button");
const numberOfParagraphs = document.getElementById("number-of-paragraphs");
const output = document.getElementById("output");

generateButton.addEventListener("click", () => {
  const count = numberOfParagraphs.value;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `https://baconipsum.com/api/?type=meat-and-filler&paras=${count}`);
  xhr.send();
  xhr.onload = function () {
    if (xhr.status === 200) {
      let result = "";
      const paragraphs = JSON.parse(xhr.responseText);
      for (let i = 0; i < paragraphs.length; i++) {
        result += "<p>" + paragraphs[i] + "</p>";
      }
      output.innerHTML = result;
    } else if (xhr.status !== 200) {
      console.log(`Error: ${xhr.status}`);
    }
  };
});
// Get the Lorem Ipsum text element by its ID
function copy(copyId) {
    let inputElement = document.createElement("input");
    inputElement.type = "text";
    let copytext = document.getElementById(copyId).innerHTML;
    inputElement.value = copytext;
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand('copy');
    document.body.removeChild(inputElement);
    document.getElementById("alert").style.display = "block";
    setTimeout(function(){
        document.getElementById("alert").style.display = "none";
    }, 1000);

}