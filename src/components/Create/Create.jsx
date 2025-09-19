import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import './Create.css'

const Create = ({ todos, settodos }) => {
    const [imp, setImp] = useState('normal')
    const [title, setTitle] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!title.trim()) return
        const newTodo = { title: title.trim(), imp, id: nanoid() }
        settodos([...todos, newTodo])
        setTitle('')
       setImp('normal')
    }

    return (
        <section className="card create-card" aria-labelledby="createHeading">
            <header className="card__header">
                <h1 id="createHeading" className="card__title">Create Task</h1>
                <p className="card__subtitle">Add a new task.</p>
            </header>
            <form className="create-form" onSubmit={handleSubmit}>
                <div className="form-row">
                    <label htmlFor="title" className="form-label">Task Title</label>
                    <input
                        id="title"
                        className="input"
                        onChange={e => setTitle(e.target.value)}
                        value={title}
                        type="text"
                        placeholder="e.g. Finish homework" />
                </div>

                <fieldset className="form-row radios">
                    <legend className="form-label">Type</legend>
                    <label className="radio">
                        <input
                            name="imp"
                            value="normal"
                            onChange={e => setImp(e.target.value)}
                            checked={imp === 'normal'}
                            type="radio" />
                        <span>normal</span>
                    </label>
                    <label className="radio">
                        <input
                            name="imp"
                            value="important"
                            onChange={e => setImp(e.target.value)}
                            checked={imp === 'important'}
                            type="radio" />
                        <span>important</span>
                    </label>
                </fieldset>

                <div className="form-row actions">
                    <button className="btn primary" type="submit" disabled={!title.trim()}>Create</button>

                    <button
                        className="btn ghost"
                        type="button"
                        onClick={() => { setTitle('') }}
                        disabled={!title.trim()}>Reset</button>
                </div>
            </form>
        </section>
    )
}

export default Create
