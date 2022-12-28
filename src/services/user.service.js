import { contactService } from "./contact.service"



export const userService = {
    getUser: getLoggedInUser,
    login
}

function getLoggedInUser() {
    return new Promise((resolve, reject) => {
        const userId = localStorage.getItem('loggedInUser')
        const contact = contactService.getById(userId)
        contact ? resolve(contact) : reject(`Contact not found!`)
    })
}


function login(user) {
    localStorage.setItem('loggedInUser', user._id)
    return Promise.resolve(user)
}
// ; (() => {
//     let loggedInUser = localStorage.getItem('loggedInUser') || null
//     if (!loggedInUser) {
//         const demoUser = "5a56640269f443a5d64b32ca"
//         localStorage.setItem('loggedInUser', demoUser)
//         loggedInUser = demoUser
//     }
// })();

