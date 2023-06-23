import React from 'react';
import {useState} from 'react';
import './App.css';
import remove from './delete.svg';

function App() {
  const[task, setTask] = useState('');
  const [list, setList] = useState([]);
  const handleChange = event => {
    setTask(event.target.value);
  }
  const addTask = () => {
    if (task !== ""){
      setList([...list, task]);
      setTask("");
    }
  }
  const deleteTask = (text) => {
    const newList = list.filter((task) => {
      return task !== text;
    });
    setList(newList);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1> TO-DO LIST</h1>
      <button className = "remove" onClick = {() => {deleteTask(task);}}>
        <img src = {remove} alt = "delete"/>
      </button>
        <div className = "input">
          <input 
          type = "text"
          name = "task"
          value = {task}
          placeholder = "Create a new task"
          onChange={handleChange}/>
        </div>
      <button className = "add" onClick={addTask}> </button>
      {list.length > 0 ? (<div className='item-list'>
	{list.map((index, check, todo) => (
		<div className='item-container'>
			<div className='item-name'>
						<span key = {index}>{task}</span>
			</div>
			<div className='check'>
      <label for = "accept">
              <input id = "accept" type = "checkbox" name = "accept" value = "yes"/>
            </label>
			</div>
		</div>
	))}
</div>) :(
  <div className = "empty">
    <p> No tasks today! </p>
  </div>
)
}

      </header>
    </div>
  );
}

export default App;