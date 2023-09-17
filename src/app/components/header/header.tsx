import Image from 'next/image'

import './header.scss'

export function Header() {
    return (
        <div className="header"> 
            <div>
                <h1>Hi, I'm Lucas!</h1>
                <h2>Full Stack Developer</h2>
            </div>
            <Image
                src="/me-img.jpg"
                alt="me"
                width={325}
                height={310}
                priority
            />
        </div>
    )
}