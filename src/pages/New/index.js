import React, { useState, useMemo } from 'react';
import camera from '../../assets/camera.svg'
import api from '../../services/api'

import './style.css'

export default function New({ history }) {
    const [empresa, setEmpresa] = useState('');
    const [cargos, setCargos] = useState('');
    const [salario, setSalario] = useState('');
    const [img, setImg] = useState('');

    const preview = useMemo(() => {
        return img ? URL.createObjectURL(img) : null;
    }, [img])


    async function handleSubmit(event) {
        event.preventDefault()
        const data = new FormData();
        const user_id = localStorage.getItem('user')

        data.append('img', img);
        data.append('salario', salario);
        data.append('cargos', cargos);
        data.append('empresa', empresa);


        await api.post('/spot', data, {
            headers: { user_id }
        });

        history.push('/profile');
    }

    return (

        <form onSubmit={handleSubmit}>
            <label
                id="img"
                style={{ backgroundImage: `url(${preview})` }}
                className={img ? 'has-img' : ''}
            >
                <input type="file" onChange={event => setImg(event.target.files[0])} />
                <img src={camera} alt="Select img" />
            </label>

            <label htmlFor="empresa">EMRPRESA *</label>
            <input
                id="empresa"
                placeholder="Sua empresa incrivel"
                value={empresa}
                onChange={event => setEmpresa(event.target.value)}
            />

            <label htmlFor="cargos">CARGOS * <span>(separados por virgula)</span></label>
            <input
                id="cargos"
                placeholder="Quais cargos esta ofertando"
                value={cargos}
                onChange={event => setCargos(event.target.value)}
            />

            <label htmlFor="salario">SALARIO MENSAL * <span>(em branco para teste ou estagio)</span></label>
            <input
                id="salario"
                placeholder="Valor para o salario mensal"
                value={salario}
                onChange={event => setSalario(event.target.value)}
            />
            <button type="submit" className="btn">Cadastrar</button>
        </form>

    )
}