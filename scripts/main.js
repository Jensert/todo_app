const debugMode = false;

const heading = document.querySelector("h1");
const todoInput = document.querySelector("input");
const todoCardHolder = document.querySelector("div.todoCardHolder")
const doneCardHolder = document.querySelector("div.doneCardHolder")
heading.textContent = "Todo " + new Date().toDateString();

todoInput.addEventListener("keydown", (event) => {
    (event.key === "Enter") ? addTodoCard(todoInput.value) : null;
})

class TodoCard {
    constructor(text) {
        this.boundDestruct = this.destruct.bind(this)

        this.div = document.createElement("div")
        this.div.className = "todoCard"

        // Add text area to item div
        this.textArea = document.createElement("textarea")
        this.textArea.className = "todoCardDetails"
        this.textArea.textContent = text;
        this.div.appendChild(this.textArea);

        // Add 'Done' button
        this.doneButton = document.createElement("button")
        this.doneButton.textContent = "Mark as done"
        this.doneButton.className = "todoCardDoneButton"
        this.doneButton.addEventListener("click", () => {
            this.toggleDone()
        })
        this.div.appendChild(this.doneButton)

        // Add 'remove' button
        this.removeButton = document.createElement("button")
        this.removeButton.textContent = "X"
        this.removeButton.className = "todoCardRemoveButton"
        this.removeButton.addEventListener("click", this.boundDestruct)
        this.div.appendChild(this.removeButton)
    }

    destruct() {
        this.div.remove();
    }

    toggleDone() {
        // when toggle done the 'remove' button should change as well
        if (this.textArea.className === "todoCardDetails") {
            this.textArea.className = "todoCardDetailsDone";
            this.doneButton.textContent = "Unmark as Done"
            this.removeButton.hidden = true
            doneCardHolder.appendChild(this.div)


        } else {
            this.textArea.className = "todoCardDetails";
            this.doneButton.textContent = "Mark as Done"
            this.removeButton.hidden = false
            todoCardHolder.appendChild(this.div)
        }
    }
}

function addTodoCard(text) {
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
    addTodoCard(debugItem.textContent);
}
