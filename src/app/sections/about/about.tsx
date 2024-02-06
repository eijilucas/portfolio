import { ChevronLeft } from '../../components/icons/chevron-left'
import { ChevronRight } from '../../components/icons/chevron-right'
import { Luffy } from '../../components/images/luffy'
import './about.scss'

export function About() {
    return (
        <div className="about" id='about'>
            <div className="about-content">

                <div className="about-title">
                    <ChevronRight />
                    <h2>Sobre mim</h2>
                    <ChevronLeft />
                </div>

                <div className="about-information">
                    <div className="about-text">
                        <p>Olá, me chamo Lucas e sou um entusiasta na tecnologia que resolveu trilhar o caminho da programação. Tenho experiência na construção de APIs e alguns microserviços utilizando Java e Spring, além da criação de sites responsivos utilizando React.</p>
                        <br />
                        <p>Atualmente sou formado em Análise e Desenvolvimento de Sistemas na Universidade de Mogi das Cruzes e tenho focado no desenvolvimento FullStack.</p>
                    </div>

                    <div className="about-img">
                        <Luffy />
                    </div>
                </div>
            </div>
        </div>
    )
}