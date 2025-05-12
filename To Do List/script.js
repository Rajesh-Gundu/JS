const addButton = document.querySelector('#add');
const input = document.querySelector('#todo-field');
const date = document.querySelector('#date-field');
const toDoList = document.querySelector('#todo-list');

addButton.addEventListener('click', () => {
    let task = input.value;
    let time = date.value;
    let para1 = document.createElement('p');
    para1.innerText = task;
    let para2 = document.createElement('p');
    para2.innerText = time;
    let b = document.createElement('button');
    b.innerText = 'Delete';
    b.classList.add('delete-button');
    b.addEventListener('click', () => {
        para1.remove();
        para2.remove();
        b.remove();
    });
    toDoList.append(para1);
    toDoList.append(para2);
    toDoList.append(b);
    input.value = '';
    date.value = '';
});
