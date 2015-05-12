var url = 'https://dl.dropboxusercontent.com/u/4697777/todo.json';

$.ajax({
    type: 'GET',
    url: url,
    contentType: "application/json",
    dataType: 'json',
    success: function (response) {
        console.log('success: ', response);
        buildList(response);
    },
    error: function (e) {
        console.log('error');
        console.log(e);

    }
});

function buildList (todos) {
    for (var todo in todos) {
        $('.todo-container').append("<li>"+todos[todo].title+"</li>");
    }
}