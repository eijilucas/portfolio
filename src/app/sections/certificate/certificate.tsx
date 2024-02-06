import { ChevronRight } from '@/app/components/icons/chevron-right'
import './certificate.scss'
import { ChevronLeft } from '@/app/components/icons/chevron-left'
import { CourseCard } from '@/app/sections/certificate/course-card/course'

const data = [
    {id: 1, title: 'Java Completo 2023 Programação Orientada a Objetos', instructor: 'Nelio Alves', institution: 'Udemy', duration: 54, certificateLink: 'https://www.udemy.com/certificate/UC-2a566039-e192-4080-97a9-3f609dabde80/'},
    {id: 2, title: 'Curso Web Moderno Completo Com JavaScript 2022', instructor: 'Leonardo Leitão', institution: 'Udemy', duration: 97, certificateLink: 'https://www.udemy.com/certificate/UC-4e444337-2257-4df4-8334-b8eab964a1d7/'}
]

export function Certificate(){
    return(
        <div className="certificate" id='certificate'>
            <div className="certificate-content">
                <div className="certificate-title">
                    <ChevronRight/>
                    <h2>Certificados</h2>
                    <ChevronLeft/>
                </div>

                <div className="certificate-card">
                    {data.map(certificate => <CourseCard key={certificate.id}
                    title={certificate.title}
                    instructor={certificate.instructor}
                    institution={certificate.institution}
                    duration={certificate.duration}
                    certificateLink={certificate.certificateLink}
                    />
                    )}
                </div>
            </div>
        </div>
    )
}