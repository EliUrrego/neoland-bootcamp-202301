//case 0
stickies.length = 0
    
var sticky = {
    id: createStickyId(),
    user: "pepito@grillo.com",
    text: "hola mundo!",
    visibility: "private",
}
stickies.push(sticky)

var sticky = {
    id: createStickyId(),
    user: "wendy@Darling.com",
    text: "hello world!",
    visibility: "public",
}

stickies.push(sticky)


var sticky = {
    id: createStickyId(),
    user: 'peter@pan.com',
    text: 'hello world',
    visibility: 'private',
}

stickies.push(sticky)

var sticky = {
    id: createStickyId(),
    user: "peter@pan.com",
    text: "hello world",
    visibility: "public",
}

stickies.push(sticky)
try{
    var result = retrieveMyStickies('pepito@grillo.com')
}catch(error){
verify(error.message === 'wrong email')
verify(result.length=4)
}