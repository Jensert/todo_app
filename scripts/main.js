const debugMode = true;

const heading = document.querySelector("h1");
const todoInput = document.querySelector("input");
const todoCardHolder = document.querySelector("div.todoCardHolder")
heading.textContent = "Todo " + new Date().toDateString();

todoInput.addEventListener("keydown", (event) => {
    (event.key === "Enter") ? addNewTodo(todoInput.value) : null;
})

console.log(todoCardHolder);

function toggleTodoCardDone(todoCard) {
    if (todoCard.textArea.className === "todoCardDetails") {
        todoCard.textArea.className = "todoCardDetailsDone";
    } else {
        todoCard.textArea.className = "todoCardDetails";
    }
}

class TodoCard {
    constructor(text) {
        this.div = document.createElement("div")
        this.div.textContent = text
        this.div.className = "todoCard"

        // Add text area to item div
        this.textArea = document.createElement("textarea")
        this.textArea.className = "todoCardDetails"
        this.div.appendChild(this.textArea);

        // Add 'Done' button
        this.doneButton = document.createElement("button")
        this.doneButton.textContent = "Mark as done"
        this.doneButton.addEventListener("click", () => {
            toggleTodoCardDone(this)
        })
        this.div.appendChild(this.doneButton)

        // Add 'remove' button
        this.removeButton = document.createElement("button")
        this.removeButton.textContent = "Remove"
        this.removeButton.addEventListener("click", () => {
            this.destruct()
        })
        this.div.appendChild(this.removeButton)
    }

    destruct() {
        this.div.remove();
    }
}

function addNewTodo(text) {
    if (!text) {
        console.log("Input is empty");
        return;
    }
    console.log("Adding '" + text + "' to the list");

    const card = new TodoCard(text)

    // Add item to the list
    todoCardHolder.appendChild(card.div);

    // Clear the input
    todoInput.value = ""
}

if (debugMode) {
    let debugItem = document.createElement("li");
    debugItem.textContent = "debugItem";
    addNewTodo(debugItem.textContent);
}
