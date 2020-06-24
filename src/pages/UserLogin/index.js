import React from 'react';

export default function UserLogin() {

    return (
        <>
            <p>Tenha acesso a mais de <strong>1000</strong> vagas de empregos disponiveis</p>
            <p>Entre com suas informaçoes de login.</p>
            <form >
                <label htmlFor="email">EMAIL *</label>
                <input
                    id="email"
                    placeholder="Seu email"
                />
                <label htmlFor="email">SENHA *</label>
                <input
                    id="senha"
                    placeholder="Seu senha"
                />

                <button type="submit" className="btn">Entrar</button>
            </form>
        </>
    )
}