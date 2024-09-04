// Task Class

class Task{
    constructor(title,description, category,dueDate,){
        this.title = title;
        this.description = description;
        this.category = category;
        this.dueDate= dueDate;
        this.completed = false;
    }
    markCompleted(){
        this.completed = true;
    }

    markInComplete(){
        this.completed = false;

    }
    updateTask(newTitle,newDescription,newCategory,newDueDate){
        this.title = newTitle;
        this.description = newDescription;
        this.category = newCategory;
        this.dueDate = newDueDate;


    }

    displayTask(){
        return `${this.title} [${this.category}] - Due: ${this.dueDate} - status: ${this.category? 'completed!' : 'Incompleted'}`;
    }

    }

// TaskManager Class

class TaskManager{
constructor(){
this.tasks  = [];
}
addTask(title,description ,category, dueDate){
 const task = new Task(title,description,category,dueDate);
 this.tasks.push(task);
}

deleteTask(index){
    this.tasks.splice(index,1);


}

updateTask(title,description,dueDate){
    this.tasks[index].updateTask()
}

completeTask(index){
     this.tasks[index].markComplete();
}

inCompleteTask(index){
    this.tasks[index].markInComplete();
}

displayAllTask(){
    if(this.tasks.length === 0){
        console.log("no task is found!");
        return;
    } else{
        this.tasks.forEach((task,index)=>{
        console.log(`${index + 1}): ${task.displayTask()}`);
    })
}


    }
}

    // UI - USER INTERFACE

    const taskManager = new TaskManager();
    function mainMenu(){
        console.log("\n Task Tracking System");
        console.log("1. Add Task");
        console.log("2. view All Task");
        console.log("3. Update Task");
        console.log("4. Mark Task as Completed");
        console.log("5. Delete Task"); 
        console.log("6. Exit");

        const choice = prompt("choose an option!");
        switch(choice){
            case '1':
            addTask();
            break;

            case '2':
            taskManager.displayAllTask()
            
            break;

            case '3':
            updateTask();
            break;
            case '4':
            completeTask();
            break;
            case '5':
            deleteTask();
            break;
            case '6':
            console.log("Exiting...");
            return;

            default :
            console.log("Invalid Option");
        }

        mainMenu();
    }


    function addTask(){
        const title = prompt("task Title:");
        const description = prompt("task description:");
        const category = prompt("task category:");
        const dueDate = prompt("task dueDate:");
        taskManager.addTask(title,description,category,dueDate);
        console.log("Task Added");
    }

    function updateTask(){
        const index = prompt("Enter the Task ID to Update")- 1;
        const title = prompt("New Task Title:");
        const description = prompt(" New task description:");
        const category = prompt(" New task category:");
        const dueDate = prompt(" New task dueDate:");
        taskManager.updateTask(title,description,category,dueDate);
        console.log("Task Updated");

    }

    function completeTask(){
        const index = prompt("Enter the Task ID to Update")- 1;
        taskManager.completeTask(title,description,category,dueDate);
        console.log("Task Completed!");

    }

    function deleteTask(){
        const index = prompt("Enter the Task ID to delete")- 1;
        taskManager.deleteTask(index);
        console.log("Task deleted!");


    }

    mainMenu();
