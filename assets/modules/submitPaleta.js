import closeModal from './closeModal.js'
import showMessageAlert from './showMessageAlert.js'
import { baseUrl } from './env.js'


export default async function submitPaleta() {
    const id = document.querySelector("#id").value;
    const sabor = document.querySelector("#sabor").value;
    const preco = document.querySelector("#preco").value;
    const descricao = document.querySelector("#descricao").value;
    const foto = document.querySelector("#foto").value;

    const paleta = {
        id,
        sabor,
        preco,
        descricao,
        foto,
    };

    const modoEdicaoAtivado = id != "";

    const endpoint =
        baseUrl + (modoEdicaoAtivado ? `/update-paleta/${id}` : `/create-paleta`);

    const response = await fetch(endpoint, {
        method: modoEdicaoAtivado ? "put" : "post",
        headers: {
            "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify(paleta),
    });

    const novaPaleta = await response.json();

    if (novaPaleta.message != undefined) {
        localStorage.setItem("message", novaPaleta.message);
        localStorage.setItem("type", "danger");
        showMessageAlert();
        return;
    }
    if (modoEdicaoAtivado) {
        localStorage.setItem("message", "Paleta atualizada com sucesso");
        localStorage.setItem("type", "sucess");
    } else {
        localStorage.setItem("message", "Paleta criada com sucesso");
        localStorage.setItem("type", "sucess");
    }
    document.location.reload(true);

    closeModal();
}