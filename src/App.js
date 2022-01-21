import React, { useState } from 'react';
import TodoList from './componetns/TodoLis';
import { DIRECTION } from "./constants";

const initialState = {
  Winnie: ['to make coffee'],
  Brad: [],
  Bob: [],
  Thomas: [],
}



const App = () => {

  const [toDos, setTodos] = useState(initialState);

  const addTask = (name) => {

    const task = window.prompt('What to do next');
    setTodos(prev => {
      return {
        ...prev,
        [name]: [...prev[name], task]
      }
    })

  }

  const giveTasktoSomeone = name => (task, direction) => {

    setTodos(prev => {
      const names = Object.keys(prev);
      const currentIndex = names.findIndex((item) => {
        return item === name
      })

      const nextIndex = direction === DIRECTION.NEXT ? currentIndex + 1 : currentIndex - 1;

      if (nextIndex >= names.length || nextIndex < 0) {
        return prev;
      }

      const nextName = names[nextIndex];
      let indexOfTask = prev[name].findIndex(item => item === task);

      const nextTasksArray = [...prev[nextName]];
      indexOfTask = indexOfTask < nextTasksArray.length ? indexOfTask : nextTasksArray.length;

      nextTasksArray.splice(indexOfTask, 0, [task])


      const nextState = {
        ...prev,
        [nextName]: nextTasksArray,
        [name]: prev[name].filter(item => item !== task)
      }

      return nextState
    })


  }




  return (
    <div className='container pt-4 d-flex justify-content-between'>
      {
        Object.keys(toDos).map(item => <TodoList name={item}
          toDos={toDos[item]}
          addTask={addTask}
          giveTasktoSomeone={giveTasktoSomeone}
        />)
      }

    </div>
  )
}

export default App;