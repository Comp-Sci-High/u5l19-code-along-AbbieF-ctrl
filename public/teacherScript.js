const form = document.querySelector("form")

form.addEventListener("submit", async (e) => {
    e.preventDefault()

    const bookData = new FormData(form)
    const req = Object.fromEntries(bookData)

    const response = await fetch("/add/teacher", {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(req)
    })
    const data = await response.json()
    console.log(data)

    window.location.href = "/"
})

// write the async function deleteTeacher
// make sure it redirects to / after

async function deleteTeacher() {
    await fetch('/delete/teacher/:' + _id, {method: 'DELETE'})
    window.location.href = '/'
}
