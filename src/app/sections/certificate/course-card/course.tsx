import { CalendaryIcon } from "../../../components/icons/calendary"
import { InstitutionIcon } from "../../../components/icons/institution-icon"
import { OpenBookIcon } from "../../../components/icons/open-book"
import Link from 'next/link';

import './course.scss'

interface CourseCardProps {
    title: string,
    instructor: string,
    institution: string,
    duration: number,
    certificateLink: string
}

export function CourseCard({ title, instructor, institution, duration, certificateLink }: CourseCardProps) {

    

    return (
        <div className="course-card">
            <div className="course-content">
                <div className="title">
                    <h3>{title}</h3>
                </div>

                <div className="infos">
                    <div className="instructor">
                        <OpenBookIcon />
                        <div className="instructor-info">
                            <p>Instructor</p>
                            {instructor}
                        </div>
                    </div>

                    <div className="institution">
                        <InstitutionIcon />
                        <div className="institution-info">
                            <p>Institution</p>
                            {institution}
                        </div>
                    </div>
                </div>

                <div className="extra-info">
                    <div className="duration">
                        <p>DURATION</p>
                        <div className="duration-content">

                            <div className="duration-time">
                                {duration}
                            </div>

                            <div className="duration-icon">
                                <CalendaryIcon />
                                <p>Hours</p>
                            </div>
                        </div>
                    </div>

                    <div className="btns">
                        <a href={certificateLink} target="_blank"><button>Certificado</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}