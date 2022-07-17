function getData () {
    axios.get("https://api.vschool.io/bradleyabbitt/todo")
        .then(response => listData(response.data))
        .catch(error => console.log(error))
}


function listData(data){
    for(let i = 0; i < data.length; i++) {
        const todoTitle = document.createElement("li")
        todoTitle.textContent = data[i].title

        document.getElementById("to-do-list").appendChild(todoTitle)

        const completed = document.createElement("button")
        completed.textContent = "Mark as Complete"
        completed.id = "completed"

        const updatedCompletion = {
            completed: true
        }

        completed.addEventListener("click", () => {
            axios.put("https://api.vschool.io/bradleyabbitt/todo/" + data[i]._id, updatedCompletion)
            
            
        })

        todoTitle.appendChild(completed)
        

        const deleteTodo = document.createElement("button")

        deleteTodo.textContent = "x"
        deleteTodo.id = "delete-todo"

        deleteTodo.addEventListener("click", () => {
            axios.delete("https://api.vschool.io/bradleyabbitt/todo/" + data[i]._id)
        })

        todoTitle.appendChild(deleteTodo)

        const todoDescription = document.createElement("div")
        todoDescription.textContent = "Description: " + data[i].description 

        todoTitle.appendChild(todoDescription)

        const todoPrice = document.createElement("div")
        todoPrice.textContent = "Price: " + data[i].price 

        todoTitle.appendChild(todoPrice)

        const img = document.createElement("img")
        img.src = data[i].imgUrl
        todoTitle.append(img)

        if (data[i].imgUrl === "") {
            img.remove()
        }

        if (data[i].completed === true) {
            todoTitle.style.textDecoration = "line-through"
            completed.remove()
        }
    }
}

const todoForm = document.newTodo

todoForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const addedTodo = {
        title: todoForm.newTodoName.value,
        description: todoForm.description.value,
        price: todoForm.price.value,
        imgUrl: todoForm.imageUrl.value
    }

    axios.post("https://api.vschool.io/bradleyabbitt/todo", addedTodo)
        .then(response => listData(response.data))
        .catch(error => console.log(error))

})


getData()