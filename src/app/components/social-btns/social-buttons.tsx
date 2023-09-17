import { GitHub } from "../icons/github-icon";
import { Instagram } from "../icons/insta-icon";
import { Linkedin } from "../icons/linkedin-icon";
import { Twitter } from "../icons/twitter-icon";
import './social-buttons.scss'

export function SocialBtns(){
    return(
        <div className="social">
            <a href="https://www.instagram.com/eiji_lucas/" target="_blank">
                <Instagram/>
            </a>
            <a href="https://www.linkedin.com/in/eijilucas/" target="_blank">
                <Linkedin/>
            </a>
            <a href="https://github.com/eijilucas" target="_blank">
                <GitHub />
            </a>
            <a href="">
                <Twitter />
            </a>
        </div>
    )
}