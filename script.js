const person =[
    {
        user: "admin",
        password : "admin"
    },
    {
        user: "user",
        password: "user"
    }
]
function getinfo() {
    const name = document.getElementById("name").value
    const password = document.getElementById("password").value

    for (i = 0; i < person.length; i++) {
        if (name == person[i].user && password == person[i].password) {
            if (name == "admin" && password == "admin") {
                window.open('admin/adminpage.html')
                return false
            }
            else if (name == "user" && password == "user") {
                window.open('user/userpage.html')
                return false
            }
        }
    }

    alert("Please try again!...")
}