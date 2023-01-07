let inputField = document.getElementById('inputField');
let addBtn = document.getElementById('addBtn');
let tasks = document.getElementById('tasks');


addBtn.addEventListener('click', () => {
    let para = document.createElement('p');
    para.innerHTML = inputField.value;
    para.classList.add('para-styling');
    tasks.appendChild(para);

    console.log(tasks);

    para.addEventListener('click', () => {
        para.style.textDecoration = 'line-through';
    })

    para.addEventListener('dblclick', () => {
        tasks.removeChild(para);
    })

})


{/* <p></p>
<p>fuddu</p>
<p class="para-styling">fuddu</p>
<div id="tasks"><p class="para-styling">fuddu</p></div>
.para-styling{
    textDecoration: line-through;
}

<div id="tasks"></div> */}