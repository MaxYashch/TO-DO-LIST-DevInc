// selectors
const todoInputTitle = document.querySelector('#inputTitle');
const todoInputText = document.querySelector('#inputText');
const todoButton = document.querySelector('.js-addButton');
const todoList = document.querySelector('#currentTasks');
const todoListCompleted = document.querySelector('.completedTasks');
const todoPriorityBtns = document.querySelectorAll('.form-check-label');

todoButton.addEventListener('click', addTodo);

// add priority record to note
let priorityText;
todoPriorityBtns.forEach(element => element.addEventListener('click', () => priorityText = element.getAttribute('for') + ' priority'
))

function addTodo(e) {
    e.preventDefault();

    // create todo general li
    const todoLi = document.createElement('li');
    todoLi.classList.add('list-group-item', 'd-flex', 'w-100', 'mb-2');

    // create todo general Note div
    const todoDivNote = document.createElement('div');
    todoDivNote.classList.add('w-100', 'mr-2');
    todoLi.appendChild(todoDivNote);
    // create todo div Title
    const todoDivTitle = document.createElement('div');
    todoDivTitle.classList.add('d-flex', 'w-100', 'justify-content-between');
    todoDivNote.appendChild(todoDivTitle);
    // create todo h5 Title
    const todoH5Title = document.createElement('h5');
    todoH5Title.innerText = todoInputTitle.value;
    todoH5Title.classList.add('mb-1');
    todoDivTitle.appendChild(todoH5Title);

    // create todo div priority - time
    const todoDivPriorityTime = document.createElement('div');
    todoDivTitle.appendChild(todoDivPriorityTime);
    // create todo small priority
    const todoSmallPriority = document.createElement('small');
    todoSmallPriority.classList.add('mr-2');
    todoSmallPriority.innerText = priorityText;
    todoDivPriorityTime.appendChild(todoSmallPriority);

    // create todo small time
    const todoSmallTime = document.createElement('small');
    todoSmallTime.innerText = setTime();
    todoDivPriorityTime.appendChild(todoSmallTime);

    // create todo p Text
    const todoPText = document.createElement('p');
    todoPText.innerText = todoInputText.value;
    todoPText.classList.add('mb-1', 'w-100');
    todoDivNote.appendChild(todoPText);



    // create todo general div Buttons block
    const todoDivButtons = document.createElement('div');
    todoDivButtons.classList.add('dropdown', 'm-2', 'dropleft');
    todoLi.appendChild(todoDivButtons);
    // create general 3 button
    const todo3ButtonsCont = document.createElement('button');
    todo3ButtonsCont.classList.add('btn', 'btn-secondary', 'h-100');
    todo3ButtonsCont.setAttribute("type", "button");
    todo3ButtonsCont.setAttribute("id", "dropdownMenuItem1");
    todo3ButtonsCont.setAttribute("data-toggle", "dropdown");
    todo3ButtonsCont.setAttribute("aria-haspopup", "true");
    todo3ButtonsCont.setAttribute("aria-expanded", "false");
    todoDivButtons.appendChild(todo3ButtonsCont);
    // create ellipsis buttton
    const iellipse = document.createElement('i');
    iellipse.classList.add('fas', 'fa-ellipsis-v');
    iellipse.setAttribute('aria-hidden', 'true');
    todo3ButtonsCont.appendChild(iellipse);
    // create todo div dropdown
    const todoDivDropdown = document.createElement('div');
    todoDivDropdown.classList.add('dropdown-menu', 'p-2', 'flex-column');
    todoDivDropdown.setAttribute('aria-labelledby', 'dropdownMenuItem1');
    todoDivDropdown.setAttribute('x-placement', 'left-start');
    todoDivDropdown.setAttribute('style', 'position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(-162px, 0px, 0px);');

    todoDivButtons.appendChild(todoDivDropdown);
    // create todo dropdown button complete
    const todoButtonComplete = document.createElement('button');
    todoButtonComplete.innerText = 'Complete';
    todoButtonComplete.classList.add('btn', 'btn-success', 'w-100');
    todoDivDropdown.appendChild(todoButtonComplete);
    // create todo dropdown button complete
    const todoButtonEdit = document.createElement('button');
    todoButtonEdit.innerText = 'Edit';
    todoButtonEdit.classList.add('btn', 'btn-info', 'w-100', 'my-2');
    todoDivDropdown.appendChild(todoButtonEdit);
    // create todo dropdown button complete
    const todoButtonDelete = document.createElement('button');
    todoButtonDelete.innerText = 'Delete';
    todoButtonDelete.classList.add('btn', 'btn-danger', 'w-100');
    todoDivDropdown.appendChild(todoButtonDelete);






    // append to list
    todoList.appendChild(todoLi);
    // clear todo input value
    todoInputTitle.value = '';
    todoInputText.value = '';

    // add context popup comlete-edit-delete menu
    // todo3ButtonsCont.addEventListener('click')

}



// add date and time to note
function setTime() {
    let today = new Date();
    let date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = `${time} ${date}`;
    return dateTime;
}




// todoList.addEventListener('click', deleteCheck);
// filterOption.addEventListener('click', filterTodo);




function deleteCheck(e) {
    const item = e.target;

    // check mark
    if (item.classList[ 0 ] === 'btn-success') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }

    // edit todo
    if (item.classList[ 0 ] === 'btn-info') {
        const todo = item.parentElement;
        todo.classList.toggle('edit');
    }

    // delete todo
    if (item.classList[ 0 ] === 'btn-danger') {
        const todo = item.parentElement;
        // animation
        todo.classList.add('fall');
        removeLocalTodos(todo);
        todo.addEventListener('transitionend', function () {
            todo.remove();
        })
    }
}








