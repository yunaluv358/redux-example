const userService = {
    login, join
}
function handleResponse(response) {
    return response.text()
        .then(text =>{
            const data = text && JSON.parse(text)
            if(!response.ok){
                if(response.status === 401){
                    window.location.reload()
                }
                const error = (data && data.message) ||
                    response.statusText
                return Promise.reject(error)
            }
            return data
        })
}
function login(userid, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({userid,password})
    }
    return fetch(`/users/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            sessionStorage.setItem('user', JSON.stringify(user))
            return user
        })
}
function join(userid, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({userid,password})
    }
    return fetch(`/users/join`, requestOptions)
        .then(handleResponse)
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user))
            return user
        })
}
export default userService