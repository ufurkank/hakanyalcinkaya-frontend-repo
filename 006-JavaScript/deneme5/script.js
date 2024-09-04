const users = [
    {name: "Ali", isActive: true},
    {name: "Veli", isActive: true},
    {name: "Kırkdokuz", isActive: false},
    {name: "Elli", isActive: false}
]

const activeUsers = users.filter( user => user.isActive)

console.log(activeUsers)