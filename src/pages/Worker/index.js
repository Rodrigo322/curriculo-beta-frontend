import React, { useState } from 'react';

export default function Curriculum() {
    const [email, setEmail] = useState('');
    const [cargos, setCargos] = useState('');


    async function handleSubmit(event) {
        event.preventDefault();

        console.log(email, cargos)

    }

    return (
        <>
            <p>Tenha acesso a mais de <strong>1000</strong> vagas de empregos disponiveis</p>
            <form onSubmit={handleSubmit} >
                <label htmlFor="email">EMAIL *</label>
                <input
                    id="email"
                    placeholder="Seu email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
                <label htmlFor="cargos">CARGOS *</label>
                <input
                    id="cargos"
                    placeholder="Digite os cargos do seu intersse"
                    value={cargos}
                    onChange={event => setCargos(event.target.value)}
                />

                <button type="submit" className="btn">Buscar vagas disponiveis</button>
            </form>
        </>
    )
}