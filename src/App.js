import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder:true,
    },
    {
        id: 2,
        text: 'Metting at School',
        day: 'Feb 6th at 1:30pm',
        reminder:true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder:false,
    }
])

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !==id))
}



  return (
    <div className='Container'>
      <Header />
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete=
      {deleteTask}/>)
      :( 'No Tasks To Show'
      )}
    </div>
  )
}

export default App;
