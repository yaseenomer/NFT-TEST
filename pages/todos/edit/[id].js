
import { useState, useEffect  } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { getTodo, updateTodo } from "../../../redux/slices/todo"



export function getServerSideProps(context) {
    return {
        props: {
            id: context.params.id
        }
    }
}


export default function Edit({id}) {

    const state = useSelector(state => state.todo)

    const [title, setTitle] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTodo({id}))
    }, [])

    
    const onChangeTitle = (e) => setTitle(e.target.value)

    const onUpdate = () => {
        const api = "https://api-test-xnv3qozlva-uc.a.run.app/todos"


        fetch(`${api}/${id}`,
            {
                method: "PATCH",
                headers: {
                    
                    'Content-Type': 'application/json'
                    },
                body: JSON.stringify({
                    title,
                    done: false
                })
            }).then(() => {
                dispatch(updateTodo({title, id}))
                Router.push('/todos')
            }
        )
    }

  return (
    <div className="container">
    <div className="row">
        <div className="col-4 offset-4 mt-4">
            <input type="text" className="form-control" onChange={onChangeTitle} defaultValue={state?.todo?.title} />
        </div>

        <div className="col-4 offset-4">


            <button className="btn btn-primary my-3"
            onClick={() => onUpdate()}
            >Update</button>
            <Link href="/todos">
                <button className="btn btn-light my-3">cancel</button>
            </Link>
        </div>
    </div>
</div>
  )
}
