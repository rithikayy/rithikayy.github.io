const welcome_msg = ['Hello!', 'Welcome!', 'Hi! :)', 'Howdy!', "How's it going?", "What's up?"];
function selectRandom(arr) {
    rand_msg = arr[Math.floor(Math.random() * arr.length)];
    return rand_msg
}