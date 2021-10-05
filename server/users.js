const users = [];
// join user to specific chat room
joinUser = (id, username, room) => {
    const p_user = {id, username, room}

    users.push(p_user);
    console.log(users, "users")

    return p_user;
};

console.log("user out", users);

// gets a particular user id to return the current user

getCurrentUser = (id) => {
   return users.find((p_user) => p_user.id === id);
}

userDisconnect = (id) => {
    const index = users.findIndex((p_user) => p_user.id === id);
    if (index !== -1) {
        return users.splice(index, 1)[0]
    }
}
module.exports = {
    joinUser,
    getCurrentUser,
    userDisconnect
}