document.addEventListener("DOMContentLoaded", () => {
  // your code here
  //console.log(document.querySelector('form'));
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    //let taskDescription = e.target.new-task-description.value;
    taskHandler(e.target.new-task-description.value);
  })

  function taskHandler(toDo){
    let p = document.createElement('p');
    p.textContent = toDo;
    document.getElementById('tasks').appendChild(p);
  }

})

