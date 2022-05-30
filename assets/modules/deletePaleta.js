import closeModalDelete from './closeModalDelete.js'
import { baseUrl } from './env.js'

export default async function deletePaleta(id) {
    const response = await fetch(`${baseUrl}/delete-paleta/${id}`, {
        method: "delete",
        headers: {
            "Content-Type": "application/json",
        },
        mode: "cors",
    });
    const result = await response.json();
    localStorage.setItem("message", result.message);
    localStorage.setItem("type", "sucess");
    document.location.reload(true);
    closeModalDelete();
}