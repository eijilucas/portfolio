
import { useState } from 'react';
import './header.scss'
import { useEffect  } from 'react'

export function Header() {

    return (
        <div className="header">

            <div className="header-logo">
                <span><h1>L.E DEV</h1></span>
            </div>

            <div className="header-list" >
                <ul className='list'>
                    <li >
                        <a href="#start" className='list-item'>Início</a>
                    </li>
                    <li>
                        <a href="#about" className='list-item'>Sobre mim</a>
                    </li>
                    <li>
                        <a href="#projects" className='list-item'>Projetos</a>
                    </li>
                    <li >
                        <a href="#certificate" className='list-item'>Certificados</a>
                    </li>
                    <li>
                        <a href="#contact" className='list-item'>Contato</a>
                    </li>
                </ul>
            </div>
            
        </div>
    )
}