// Real Time Comments

// 1. Make a connection to the hub
const connection = new signalR.HubConnection('http://wastapp.azurewebsites.net/comments'); //Same link as in Startup class
var date = new Date();
var limit = 0;
// 2. Prepare Send function when the connection is stablished.
connection.on("SendComment", (user, comment) => {
    var encodedUser = user;
    var encodedComment = comment;
    const listItem = document.createElement('li');

    listItem.className = "list-group-item";
    listItem.innerHTML = '<span class="comment-date">' + date.toLocaleDateString() + '</span>' + '. ' + '<span class="comment-user">' + encodedUser + '</span>' + ': ' + '<span class="comment-msg">' + encodedComment + '</span>';

    document.getElementById('comment-list').appendChild(listItem);
    if (limit < 1) {
        $('#view-comments-section-over').remove();
        $('#view-comments-section-id').show();
        limit = limit + 1;
    }
});

// 3. Trigger SendComment
document.getElementById('send-comment-button').addEventListener('click', event => {
    const comment = document.getElementById('comment-text').value;
    const user = document.getElementById('user-text').value;
    document.getElementById('comment-text').value = "";
    document.getElementById('user-text').value = "";
    connection.send("Send", user, comment).catch(err => showErr(err));
    event.preventDefault();
});

// 4. Prepare function to capture errors
function showErr(msg) {
    const listItem = document.createElement('li');
    listItem.className = "list-group-item";
    listItem.setAttribute("style", "color: red");
    listItem.innerText = msg.toString();
    document.getElementById('comment-list').appendChild(listItem);
}

// 5. Start connection with error catching
connection.start().catch(err => showErr(err));