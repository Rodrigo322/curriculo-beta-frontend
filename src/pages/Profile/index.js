import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api'
import { useState } from 'react';

import './style.css';

export default function Profile() {
    const [spots, setSpots] = useState([])


    useEffect(() => {
        async function loadSpots() {
            const user_id = localStorage.getItem('user');
            
            const response = await api.get('/profile', {
                headers: { user_id }
            });

            console.log(response.data)
            setSpots(response.data)
        }

        loadSpots();
    }, [])

    return (
        <>
            <ul className="spot-list">
                {spots.map(spot => (
                    <li key={spot._id}>
                        <header style={{ backgroundImage: `url(${spot.img_url})` }} />
                        <strong>{spot.empresa}</strong>
                        <span>{spot.salario ? `R$${spot.salario}/mes` : 'GRATUITO' }</span>
                    </li>
                ))}
            </ul>
            <Link to="/new">
                <button className="btn">Cadastrar nova vaga</button>
            </Link>
        </>
    )
}