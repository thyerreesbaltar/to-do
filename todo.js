var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');


var todos=JSON.parse(localStorage.getItem('list_todos')) || [];


function renderTodos(){
    
    listElement.innerHTML = '';
    
    for(todo of todos){
        
        
        
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        
        width = 25
        height = 25
        
        var img = new Image(width,height);
        img.src = 'trash.svg'
        
        
        var linkElement = document.createElement('a');
        
        linkElement.setAttribute('href', '#')
        
        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');
        
        
        
        linkElement.appendChild(img)
        
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement)
        
        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo(){
    var todoText = inputElement.value;
    
    todos.push(todoText);//Push é a função utilizada para adcionar um novo elemento no final do array
    
    inputElement.value = '';
    renderTodos();
    saveToStorag();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos){
    
    todos.splice(pos,1);//metodo splice remove  uma quantidade de itens do array baseado na quantidade de itens que a gente passar
    renderTodos();
    saveToStorag();
}

function saveToStorag(){
    localStorage.setItem('list_todos',JSON.stringify(todos));
}