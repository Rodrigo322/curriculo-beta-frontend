import React from 'react';
import { Link } from 'react-router-dom';

export default function Index() {

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-md navbar-light fixed-top transparente">
                    <div className="container">
                        <Link href=" index.html" className="navbar-brand">
                        </Link>
                        <button data-target="#menu" className="navbar-toggler" data-toggle="collapse">
                            <i className="fas fa-bars  text-white"></i>
                        </button>

                        <div className="collapse navbar-collapse" id="menu">

                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link href="" className="nav-link">Inscreva-se</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="#"
                                        className="nav-link">Cadastrar Curriculo</Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="" className="nav-link">Empresas e comercios</Link>
                                </li>

                                <li className="divisor">
                                    <Link href="" className="nav-link">
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link href="" className="nav-link">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="" className="nav-link">Minha Carreira</Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </nav>
            </header>


            <section id="home" className="d-flex">
                <div className="container align-self-center">
                    <div className="row">
                        <div className="col-md-12 capa">
                            <div id="spot" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">

                                    <div className="carousel-item active">
                                        <h1>Encontre o Emprego Perfeito</h1>
                                        <Link href="" className="btn  btn-lg btn-custom btn-purple">Entregar Curriculo</Link>
                                        <Link href="" className="btn t btn-lg btn-custom btn-white">Vagas em Aberto</Link>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="servico">
                <div class="container">
                    <div class="row">

                        <div class="col-md-6">
                            <div class="row albuns">
                                <div class="col-md-6">
                                    
                                </div>
                            </div>
                        </div>


                        <div class="col-md-6">
                            <h2>Por que Utilizar o Curriculo Online Beta</h2>

                            <h3>As chances para encontrar o emprego ideal</h3>

                            <p> 200 empresas a procura de funcionarios
                            Mais de 1000 vagas para todos os tipos de cargos
                            e habilidades
                            </p>

                            <h3>Segurança e Retorno</h3>

                            <p>O Curriculo Online Beta tem musica para um caralho Alado pqp meu chefe
                            tem todo tipo de som para todos os gostos.
                            </p>

                            <h3>Invista na sua carreira</h3>

                            <p>o investimento,curriculo
                            chegara a mais empresas...
                                <a href="planosCurriculos.html">Saiba Mais</a>
                            </p>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}