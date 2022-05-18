

import { useDispatch, useSelector } from 'react-redux'
import Link from "next/link"
import Router from "next/router"
import { getTodos } from "../../redux/slices/todo"
import { useEffect } from 'react'
import { deleteTodo, markAsDone, getTodo } from '../../redux/slices/todo'

export default function Todos() {

    const state = useSelector(state => state.todo)

    const dispatch = useDispatch()

    const api = "https://api-test-xnv3qozlva-uc.a.run.app/todos"



    useEffect(() => {
        fetch(`${api}`)
            .then(res => res.json())
            .then(data => dispatch(getTodos(data)))
    }, [])


    const onDelete = (id) => {

        fetch(`${api}/${id}`,
            {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                  },
            }).then(() => {
                dispatch(deleteTodo({id}))
            })

    }


    const onMarkAsDone = (id) => {

        fetch(`${api}/${id}`,
            {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json'
                    },
                body: JSON.stringify({
                    done: true
                })
            }).then(() => {
                dispatch(markAsDone({ id }))
            }
        )
    }

    const onEdit = async  (id) => {

        dispatch(getTodo({id}))

        Router.push(`/todos/edit/${id}`)
    }



    return (
        <div className="container">
            <div className="row">
                <div className="col-6 offset-3">
                    <Link href="/todos/create">
                        <button className="btn btn-primary my-3">create new Todo </button>
                    </Link>
                </div>
            </div>
            <div className="row">

                <div className="col-6 offset-3">
                    <ul className="list-group">
                        {state.todos.map(({ title, done, id }, x) => (
                            <li key={x} className="list-group-item d-flex justify-content-between align-items-start">
                                <span className={done ? 'text-decoration-line-through' : ''}>  {title}</span>
                                <p>

                                    <button className="btn btn-light" onClick={() => onDelete(id)}>delete</button>
                                   
                                    <button className="btn btn-light mx-1" onClick={() => onEdit(id)}>edit</button>
                                  
                                    <button className="btn btn-light" onClick={() => onMarkAsDone(id) } > mark as complate</button>
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    )
}

