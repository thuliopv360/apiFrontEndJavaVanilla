import findAllPaletas from '../modules/findAllPaletas.js'
import showMessageAlert from '../modules/showMessageAlert.js'
import closeModal from '../modules/closeModal.js'
import submitPaleta from '../modules/submitPaleta.js';
import showModal from '../modules/showModal.js';
import findPaletaById from "../modules/findPaletaById.js";
import closeModalDelete from '../modules/closeModalDelete.js';


await findAllPaletas();
showMessageAlert();
document
    .querySelector("#close-modal-submit")
    .addEventListener("click", function() {
        closeModal();
    });

document
    .querySelector("#button-form-modal")
    .addEventListener("click", function() {
        submitPaleta();
    });

document.querySelector("#add-paleta").addEventListener("click", function() {
    showModal();
});

document.querySelector(".search-button").addEventListener("click", function() {
    findPaletaById();
});

document
    .querySelector("#close-modal-delete")
    .addEventListener("click", function() {
        closeModalDelete();
    });

document.querySelector(".btn-delete-no").addEventListener("click", function() {
    closeModalDelete();
});