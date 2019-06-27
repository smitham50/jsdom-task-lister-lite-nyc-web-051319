document.addEventListener("DOMContentLoaded", () => {

  const formTag = document.querySelector("#create-task-form")
  const taskList = document.querySelector("#tasks")

  formTag.addEventListener('submit', function(e) {

    e.preventDefault()

    const userInput = document.querySelector("#new-task-description").value
    const taskItem = document.createElement("li")

    const listItem = taskList.appendChild(taskItem)


    listItem.innerText = userInput


    const deleteButton = document.createElement("button")

    deleteButton.innerText = "X"

    taskItem.appendChild(deleteButton)

    taskItem.addEventListener('click', function(e) {
      e.target.parentElement.remove()
    })

    const dropdown = document.querySelector("#dropdown")

    if (dropdown.value === "Red") {
      listItem.style.color = "red"
    }
    if (dropdown.value === "Yellow") {
      listItem.style.color = "yellow"
    }
    if (dropdown.value === "Green") {
      listItem.style.color = "green"
    }

    formTag.reset()

  })
});
