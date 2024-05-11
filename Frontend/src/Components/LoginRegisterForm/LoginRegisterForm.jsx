import React from 'react'
import "./loginregisterform.css"


const LoginRegisterForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        
        //ENVIAR LOS DATOS AL BACKEND
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>Nombre</label>
            <input type="text" placeholder='Escriba su nombre' name='name' value={name} onChange={(e) => setName(e.target.value)} />
            
            <label>Email</label>
            <input type="email" placeholder='Escriba su email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            
            <label>Contraseña</label>
            <input type="password" placeholder='Escriba su contraseña' name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            
            <button>Enviar</button>
        </form>
    )
}


export default LoginRegisterForm