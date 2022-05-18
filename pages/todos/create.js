

import Link from 'next/link'
import Router from 'next/router'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from "../../redux/slices/todo"

export default function Create() {

    const [title, setTitle] = useState('')

    const dispatch = useDispatch()

    const api = "https://api-test-xnv3qozlva-uc.a.run.app/todos"

    const addNewTodo = () => {
        fetch(`${api}`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({title})
        }).then(() => {

            dispatch(addTodo({ title, done: false }))
            Router.push('/todos')

        })

       
    }

    const onChangeTitle = (e) => setTitle(e.target.value)

    return (
        <div className="container">
            <div className="row">
                <div className="col-4 offset-4">
                    <input type="text" className="form-control" onChange={onChangeTitle} />
                </div>

                <div className="col-4 offset-4">


                    <button className="btn btn-primary my-3"
                        onClick={e => addNewTodo()}
                    >Save</button>
                    <Link href="/todos">
                        <button className="btn btn-light my-3">cancel</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
