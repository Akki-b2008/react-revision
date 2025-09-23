import { useContext } from 'react'
import './Read.css'
import { todoContext } from '../../Wrapper'

const Read = () => {

   const [todos, setTodos] = useContext(todoContext)

    const deleteHandler = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    
    const renderTasks = () => {
        return todos.map(task => (
            <li key={task.id} className="task">
                <div className="task__main">
                    <span className="task__title">{task.title}</span>
                </div>

                <div className="task__meta">
                    <span className={"pill gender "}>{task.imp}</span>
                    <span onClick={() => deleteHandler(task.id)} className={"pill gender done"}>done</span>
                </div>
            </li>
        ))
    }

    return (
        <section className="card read-card" aria-labelledby="tasksHeading">
            <header className="card__header">
                <h1 id="tasksHeading" className="card__title">Tasks</h1>
                <p className="card__subtitle">Overview of what you've added.</p>
            </header>

            {todos.length === 0 && (
                <div className="empty">
                    <p>No tasks yet. Add your first one above 👆</p>
                </div>
            )}

            {todos.length > 0 && (
                <ol className="task-list">
                    {renderTasks()}
                </ol>
            )}
        </section>
    )
}

export default Read
