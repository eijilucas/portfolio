import { Github } from '../../components/icons/github'
import { Linkedin } from '../../components/icons/linkedin'
import { Avatar } from '../../components/images/avatar'
import './start.scss'


export function Start() {
    return (
        <div className="start" id='start'>
            <div className="start-content">
                <div className="start-items">
                    <div className="start-information">

                        <div className="start-img">
                            <Avatar />
                        </div>

                        <div className="text">
                            <h1>Lucas Eiji</h1>
                            <span className='line typing-animation'>Desenvolvedor Web</span>

                            <div className="links">
                                <a href="https://www.linkedin.com/in/eijilucas/" target='_blank'><Linkedin/></a>
                                <a href="https://github.com/eijilucas" target='_blank'><Github/></a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}