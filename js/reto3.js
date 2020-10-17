const inputContainer = document.getElementById('input-container');
inputContainer.addEventListener('click', bnAgregar_Click);

const tareaContainer = document.getElementById('tarea-container');
tareaContainer.addEventListener('click', accionTarea);

function bnAgregar_Click (e) {
    e.preventDefault();
    //Delegate event
    if (e.target.name === 'bnAgregar') {
        const tbTarea = document.getElementsByName('tbTarea')[0];
        if (tbTarea.value !== undefined && tbTarea.value.trim() !== "") {
            agregarTarea(tbTarea.value.trim().toUpperCase());
            tbTarea.value = "";
        }
        else {
            alert('Olvido ingresar la tarea');
        }
    }
}

function agregarTarea(tarea) {
    // crea un nuevo div 
    // y añade contenido 
    let divCurso = document.createElement("div"); 
    divCurso.className = 'list-item';
    divCurso.innerHTML = `<span>${tarea}</span>
    <input type="checkbox" class="form-control">
    <button class='form-control btn'>Marcar como completo</button>
    <button class='form-control btn'>Eliminar</button>`;

    // añade el elemento creado y su contenido al DOM 
    //let cursoContainer = document.getElementById('tarea-container'); 
    //let cursoList = cursoContainer.querySelector(".car-list");
    tareaContainer.appendChild(divCurso);
}

function accionTarea (e) {
    e.preventDefault();
    //Delegate event
    if (e.target.textContent === 'Eliminar') {
        let tarea = e.target.parentElement;
        let container = tarea.parentElement;
        container.removeChild(curso);
    }
    else if (e.target.textContent === "Marcar como completo")
    {
        let checkbox = e.target.previousSibling.previousSibling;
        checkbox.checked = true;
        e.target.textContent = "Marcar como pendiente";
        let div = checkbox.previousSibling.previousSibling;
        pintarTarea(div, true);
    }
    else if (e.target.textContent === "Marcar como pendiente")
    {
        let checkbox = e.target.previousSibling.previousSibling;
        checkbox.checked = false;
        e.target.textContent = "Marcar como completo";
        let div = checkbox.previousSibling.previousSibling;
        pintarTarea(div, false);
    }
}

function pintarTarea (element, completo) {
    element.style.backgroundColor = (completo ? "green" : "white");
    element.style.color = (completo ? "white" : "black");
}
