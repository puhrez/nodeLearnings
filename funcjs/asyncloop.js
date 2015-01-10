function loadUsers (userIds, load, done) {
    return userIds.map(function (user) {
    	return load(user, done); 
    });
}

module.exports = loadUsers;
