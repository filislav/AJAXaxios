console.log("script");

const resultBlock = document.querySelector('#result');
const clickMeButton = document.querySelector('.click-me');
const pageNumber = document.querySelector('#page-number');
const elNumber = document.querySelector('#elNumb');
const getTasksButton = document.querySelector('.get-tasks');
let ids = [];
const taskNumber = document.querySelector('#task-number');
const taskText = document.querySelector('#task-text');
const updateButton = document.querySelector('.update');
const deleteButton = document.querySelector('.delete');

getTasksButton.addEventListener("click",()=>{
    const promise = getTasks();
    promise.then(onTasksRecieve);
})
clickMeButton.addEventListener("click",()=>{
    const promise = getImages(pageNumber.value,elNumber.value);
    promise.then(onDataRecieved);
});
updateButton.addEventListener("click",()=>{
    updateTask(ids[taskNumber.value],taskText.value);
    getTasks().then(onTasksRecieve);
})
deleteButton.addEventListener("click",()=>{
    deleteTask(ids[taskNumber.value]);
    getTasks().then(onTasksRecieve);
})
function onTasksRecieve(data){
    console.log(data);
    const result = document.querySelector('#tasks');
    result.innerHTML='';
    ids=[];
    data.forEach(el=>{
        ids.push(el.id);
        const li = document.createElement('li');
        li.innerHTML = `${el.title}`;              
        result.appendChild(li);

    });
    console.log(ids);
}

createTask(" ").then((data)=>{
    console.log(data);
});
function onDataRecieved(data){
    data.forEach(el => {
        const img = document.createElement('img');
        img.src = el.thumbnail;
        document.querySelector('#result').appendChild(img);
    });
}


