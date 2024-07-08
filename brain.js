const taskInputDOM = document.querySelector('#do');
const taskButtonDOM = document.querySelector('#button-addon2')
const taskListDOM = document.querySelector('#taskList')
const alertDOM = document.querySelector("#alert")

const alertFunction = (title, message, className="warning") => `<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`

function addTask() {
    event.preventDefault();
    const taskText = taskInputDOM.value.trim();
    
    if (taskText !== '') {
        const li = document.createElement('li');
        li.classList.add('list-group-item')
        const checkboxId = `task-${Date.now()}`; // Generate a unique ID for each checkbox
        li.innerHTML = `
            <input class="form-check-input me-1" type="checkbox" value="" id="${checkboxId}">
            <label class="form-check-label" for="${checkboxId}">${taskText}</label>`;

        taskList.appendChild(li);

        // Add event listener to the checkbox
        const checkbox = li.querySelector('input[type="checkbox"]');
        checkbox.addEventListener('change', function() {
            const label = this.nextElementSibling;
            if (this.checked) {
                label.classList.add('completed');
            } else {
                label.classList.remove('completed');
            }
        });

        taskInputDOM.value = '';
    } else {alertDOM.innerHTML = alertFunction("Hata", "Boş bir yazı ekleyemezsiniz!", "danger")}
}

taskButtonDOM.addEventListener('click', addTask);

taskInputDOM.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask(event);
    }
});