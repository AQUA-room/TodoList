'use strict';

const textInput = document.getElementById('text-input');
const todoList = document.getElementById('todo-list');

textInput.addEventListener('keydown', e => {
    const text = textInput.value.trim();

    if (text === '' || e.key !== 'Enter') {
        return;
    }

    const li = document.createElement('li');
    const span = document.createElement('span');
    const delete_button = document.createElement('button');
    const complete_button = document.createElement('button');

    li.classList.add('list-item'); // クラス追加
    span.textContent = text;
    span.classList.add('todo-text');

    complete_button.textContent = '完了';
    complete_button.type = 'button';
    complete_button.classList.add('complete-button');
    complete_button.addEventListener('click', e => {
        e.preventDefault();
        span.classList.add("line_class");
        // todoList.previousElementSibling.setAttribute('text', 'line-through');
    });

    delete_button.textContent = '削除';
    delete_button.type = 'button';
    delete_button.classList.add('delete-button');
    delete_button.addEventListener('click', e => {
        todoList.removeChild(e.target.closest('li'));
    });

    li.appendChild(span);
    li.appendChild(complete_button);
    li.appendChild(delete_button);    li.appendChild(complete_button);

    todoList.appendChild(li);

    textInput.value = '';
});