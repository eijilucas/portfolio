import Link from 'next/link'
import './card.scss'

import Image from 'next/image'

interface CardProps {
    id?: number,
    image: string,
    title: string,
    description: string,
    link : string
}

export function Card({ image, title, description, link }: CardProps) {
    return (
        <div className="card">
            <div className="card-content">
                <div className="card-image">
                    <Image src={image} alt="" width={350} height={275} />
                </div>

                <div className="card-title">
                    <h2>{title}</h2>
                </div>
                <div className="card-information">
                    <div className="card-description">
                        <p>{description}</p>
                    </div>
                </div>
                <div className="card-button">
                    <a href={link} target='_blank'><button type='submit'>Repositório</button></a>
                </div>
            </div>
        </div>
    )
}