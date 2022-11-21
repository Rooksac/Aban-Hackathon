// import React, {useState} from 'react'
// import {useNavigate} from 'react-router-dom'

// export default function AdminLogin() {
//     const navigate = useNavigate()
//     const initialState = {name: '', password: ''}
//     const [loginInfo, setLoginInfo] = useState(initialState)
//     const [admin, setAdmin] = useState(false)
    
//     function handleChange(e){
//         let {name, value} = e.target
//         setLoginInfo({...loginInfo, [name]:value})
//     }

//     function handleSubmit(e){
//         e.preventDefault()
//         fetch('/login', {
//             method: 'POST', 
//             headers: {
//                 'Content-Type': 'application/json',
//         },
//             body: JSON.stringify(loginInfo),
//         })
//         .then((res)=> {
//             if(res.ok){
//                 navigate('/newentryform')
//             }
//             else{
//                 alert('error')
//             }
//     })
// }
//   return (
//     <div>
//         <form>
//             <input type='text' name='name' value={loginInfo.name} onChange = {handleChange} />
//             <input type='text' name='password' value={loginInfo.password} onChange = {handleChange} />
//             <button type='submit'>Log in</button>
//         </form>
//     </div>
//   )
// }
