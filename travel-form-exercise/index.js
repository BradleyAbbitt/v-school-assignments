const form = document.getElementById("travelForm")

form.addEventListener("submit", function(event) {
    event.preventDefault()

    const diet = []

    for(let i = 0; i < form.dietOptions.length; i++)
        if (form.dietOptions[i].checked) {
            diet.push(form.dietOptions[i].value)
        }

    alert("Name: " + form.firstName.value + " " + form.lastName.value + "; Age: " + form.age.value + "; Gender: " + form.gender.value + "; Travel Location: " + form.location.value + "; Diet Options (If Applicable): " + diet)
})
