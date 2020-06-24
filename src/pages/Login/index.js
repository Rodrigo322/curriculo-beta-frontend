import React, { useState } from 'react';
import api from '../../services/api'
import { Link } from 'react-router-dom';


export default function Login({ history }) {
    const [email, setEmail] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();

        const response = await api.post('/user', { email });

        const { _id } = response.data.user;

        localStorage.setItem('user', _id)

        history.push('/profile')
    }
    return (
        <>
            <p>
                Ofereça vaga de empregos e econtre grandes <strong>talentos</strong> para sua empresa.
            </p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="email">E-mail *</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Seu melhor email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
                <button type="submit" className="btn" >Entrar</button>
            </form>
            <Link to="/userlogin">
                <button className="btn">Nao sou empresa</button>
            </Link>
        </>
    )
}