function log(message) {
    console.log(message);
};

class Todolist {
    constructor(date, time, task, location, isDone){
        this.date = date;
        this.time = time;
        this.task = task;
        this.location = location;
        this.isDone = isDone;
    }

    setDate(date) {
        this.date = date;
    }

    setTime(time) {
        this.time = time;
    }

    setTask(task) {
        this.task = task;
    }

    setLocation(location) {
        this.location = location;
    }

    setIsDone(isDone) {
        this.isDone = isDone;
    }
}

class Domhandler {
    updateHtml(Todolist) {
        let content = document.querySelector(".content");
        let postIt = document.createElement("div");
        postIt.classList.add("post-it");

        let date = document.createElement("h1");
        date.classList.add("date");
        date.textContent = Todolist.date;

        let time = document.createElement("h1");
        time.classList.add("time");
        time.textContent = Todolist.time;

        let task = document.createElement("h1");
        task.classList.add("task");
        task.textContent = Todolist.task;

        let location = document.createElement("h1");
        location.classList.add("location");
        location.textContent = Todolist.location;

        let isDone = document.createElement("input");
        isDone.type = "checkbox";
        isDone.classList.add("completed");
        
        
        postIt.appendChild(date);
        postIt.appendChild(time);
        postIt.appendChild(task);
        postIt.appendChild(location);
        postIt.appendChild(isDone);
        content.appendChild(postIt);
    }
}
