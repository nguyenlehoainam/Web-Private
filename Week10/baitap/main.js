const nameInput = document.querySelector("#name");
const scoreInput = document.querySelector("#score");
const btnAdd = document.querySelector("#btn-add");
const listUl = document.querySelector("#student-list");

btnAdd.addEventListener("click", function () {
  const name = nameInput.value;
  const score = scoreInput.value;

  if (name === "" || score === "") {
    alert("Vui lòng nhập đầy đủ tên và điểm!");
    return;
  }

  const newLi = document.createElement("li");

  newLi.textContent = `${name} - ${score} điểm`;

  if (Number(score) >= 5) {
    newLi.style.color = "green";
    newLi.style.fontWeight = "bold";
  } else {
    newLi.style.color = "red";
  }

  newLi.addEventListener("click", function () {
    listUl.removeChild(newLi);
  });
  listUl.appendChild(newLi);

  nameInput.value = "";
  scoreInput.value = "";
});
