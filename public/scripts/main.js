import modal from "./modal.js";
// const modal = require('./modal.js');
const Modal = modal();
const modalTitle = document.querySelector('.modal h2');
const modalDescription = document.querySelector('.modal p');
const modalButton = document.querySelector('.modal button');
// check onclick
const checkButtons = document.querySelectorAll(".actions a.check");
checkButtons.forEach((button) => {
  // adicionar uma escuta
  // quando marcar como lido

  button.addEventListener("click", handleClick
    // modalTitle.innerHTML = "Marcar como lida";
    // modalDescription.innerHTML = "Tem certeza que deseja marcar como lido?";
    // modalButton.innerHTML ="Sim, marcar";
  );
});
// cancel onclick
const cancelButton = document.querySelector(".button.cancel");
cancelButton.addEventListener("click", (e) => {
  Modal.close();
});
// delete button
const deleteButton = document.querySelectorAll('.actions .delete');
deleteButton.forEach((button) => {
  button.addEventListener("click", (e)=> handleClick(e,  false));
});

function handleClick(e, check = true) {
  e.preventDefault();
  const slug = check ? "check" : "delete";
  const roomId = document.querySelector('#room-id').dataset.id
  const questionId = e.target.dataset.id
  const form = document.querySelector('.modal form')
  form.setAttribute('action',`/question/${roomId}/${questionId}/${slug}`)
  const text = check ? "Marcar como lida" : "Excluir"
  const escolha = check ? "Sim, marcar" : "Sim, excluir"
  modalTitle.innerHTML = `${text} esta pergunta`
  
  modalDescription.innerHTML  = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta`
  modalButton.innerHTML = `${escolha}`
  check ? modalButton.classList.remove('red') : modalButton.classList.add('red');
//  abrir modal
  Modal.open();

}
