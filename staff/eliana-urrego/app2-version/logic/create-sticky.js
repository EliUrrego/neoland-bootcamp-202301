/**
 * Creates a new sticky in the database
 * 
 * @param {string} user The user the sticky belongs to
 * @param {string} text The text of the sticky
 * @param {string} visibility The visibility of the sticky
 */
function createSticky(email, text, visibility) {
    for (var i = 0; i < users.length; i++) {
        var userInDb = users[i];

        if (userInDb.email === email) {
            // var newSticky = {
            //     user: email,
            //     text,
            //     visibility,
            // };

            var sticky = {
                id: createStickyId(),
                user: email,
                text,
                visibility,
            }

            stickies.push(sticky)

            return
        }
    }
    throw new Error('user with email ' + email + ' not found');
}
