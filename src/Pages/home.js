import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadUsers, deleteUser } from '../Redux/actions'
import { useHistory } from 'react-router-dom'

const Home = (props) => {

    let dispatch = useDispatch()

    const { dataObj } = useSelector(state => state.data)


    useEffect(() => {
         dispatch(loadUsers())
      }, [])

   

    
    console.log(dataObj)

    const goToLogin = (e) => {
        e.preventDefault();
        console.log(props, 'in props')
        console.log('login inside login function ')
        props.history.push('/login');
    }


    return (
        <>


            <button type="button" onClick={(e) => goToLogin(e)}>Login Button </button>

        </>

    )
}

export default Home