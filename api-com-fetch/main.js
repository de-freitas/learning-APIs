const url = 'http://localhost:5500/api';

function getUsers() {
    fetch(url)
    .then(response => response.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(err => console.log(err));
}; 

function getUser() {
    fetch(`${url}/1`)
    .then(response => response.json())
    .then(data => {
        renderApiResult.textContent = JSON.stringify(data);
        userName.textContent = data.name;
        userCity.textContent = data.city;
        userAvatar.src = data.avatar;
    })
    .catch(err => console.log(err));
}

function addUser(newUser) {
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(err => console.error(err));
}

const newUser = {
    name: "Olivia Zars",
    avatar: "https://picsum.photos/200/300",
    city: "Rio do Sul"
}

function updateUser(updatedUser){
    fetch(`${url}/1`, {
        method: "PUT",
        body: JSON.stringify(updatedUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(err => console.log(err))
};

const updatedUser = {
    name: "Clovis Filho",
    avatar: "https://picsum.photos/200/300",
    city: "Recife"
};

function deleteUser(id) {
    fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(err => console.error(err))
}

// addUser(newUser);
// updateUser(updatedUser);
deleteUser(6);
getUser();
getUsers();