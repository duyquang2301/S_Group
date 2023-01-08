const name = document.getElementById("name")
const email = document.getElementById("email")
const salary = document.getElementById("salary")
const city = document.getElementById("city")
const btnSubmit = document.getElementById("submit")
const render = document.getElementById("render")
const arr = []


btnSubmit.addEventListener('click', (e) =>{
    arr.push({
        name : name.value,
        email : email.value,
        salary : salary.value,
        city : city.value
    })
    render.innerHTML = ''
    arr.forEach(item => {
        render.innerHTML = render.innerHTML + 
        `<td>${item.name} </td>
        <td>${item.email} </td>
        <td>${item.salary} </td>
        <td>${item.city} </td>
        <td><button id=${item.email} onClick=DeleteElement(this)>Delete</button> </td>`
    })
    e.preventDefault()
})

let DeleteElement = (item ) => {
    console.log(item)
    arr = arr.filter( x => x.email != item.email)
    render.innerHTML = ''
    arr.forEach(item => {
        render.innerHTML = render.innerHTML + 
        `<td>${item.name} </td>
        <td>${item.email} </td>
        <td>${item.salary} </td>
        <td>${item.city} </td>
        <td><button id=${item.email} onClick=DeleteElement(this)>Delete</button> </td>`
    })
}



