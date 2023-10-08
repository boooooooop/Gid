const tasks = [
    { name: "Meditate", colorClass: "task-0" },
    { name: "Clean", colorClass: "task-1" },
    { name: "Exercise", colorClass: "task-2" },
    { name: "Cook food", colorClass: "task-3" },
];

function shuffle(array) {
    let currentIndex = array.length, randomIndex, tempValue;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        tempValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = tempValue;
    }

    return array;
}

const taskElements = document.querySelectorAll('.task');
let timer; // Timer to reset on each click
let cooldown = false; // Cooldown state initially set to false

function completeTask(event) {
    const taskElement = event.target;

    if (cooldown || taskElement.classList.contains('completed')) {
        return; // Prevent clicking during cooldown or for completed tasks
    }

    taskElement.classList.add('completed');
    clearTimeout(timer);
    timer = setTimeout(() => {
        generateNewTasks();
        cooldown = true; // Apply cooldown after new tasks are generated
        setTimeout(() => {
            cooldown = false; // Remove cooldown after about a second
        }, 1000);
    }, 1000);
}

function generateNewTasks() {
    const shuffledTasks = shuffle([...tasks]);

    taskElements.forEach((taskElement, index) => {
        taskElement.textContent = shuffledTasks[index].name;
        taskElement.classList.remove('completed');
        taskElement.className = `task ${shuffledTasks[index].colorClass}`;
    });
}

taskElements.forEach(taskElement => {
    taskElement.addEventListener('click', completeTask);
});

generateNewTasks();
