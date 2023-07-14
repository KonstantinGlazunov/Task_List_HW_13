const task = document.getElementById('tackInput');
const addTaskButton = document.getElementById('addTask');
const taskListOl = document.getElementById('taskList');
addTaskButton.addEventListener('click', addTask);


function addTask() {
    const taskName = task.value.trim(); //убирает лишние пробелы в начале и в конце строки
    if (taskName) {
        const li = document.createElement('li');
        li.innerHTML = `<span>${taskName}</span>`;
        taskListOl.append(li);


        const doneButton = document.createElement('button');
        doneButton.innerHTML = 'Do it!';
        doneButton.style.margin = '5px'; // почему  не так:  style =' margin: 5px'   ??????????
        doneButton.style.backgroundColor = 'red';
        doneButton.style.borderRadius = '5px';
        doneButton.style.cursor = 'pointer';
        
        li.append(doneButton);
        
       // doneButton.onclick = taskDone;    //то же  рабочий вариант в чем разница???! 
        doneButton.addEventListener('click', taskDone);
        
        function taskDone() {
            li.style.textDecoration = 'line-through';  
            doneButton.style.backgroundColor = 'green';
            doneButton.innerHTML = 'Done';

        }

    }
}




