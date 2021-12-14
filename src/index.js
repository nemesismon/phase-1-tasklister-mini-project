document.addEventListener("DOMContentLoaded", () => {
  // your code here
  //console.log(document.querySelector('form'));
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    //let taskDescription = e.target.new-task-description.value;
    
    console.log(e);
    taskHandler(e.target[0].value);
  })

  function taskHandler(toDo){
    let p = document.createElement('p');
    let btn = document.createElement('button');
    btn.addEventListener('click', (e) => {
      e.target.parentNode.remove();
    })
    p.textContent = `${toDo}   `;
    btn.textContent = 'x';
    p.appendChild(btn);
    document.getElementById('tasks').appendChild(p);
  }
})

