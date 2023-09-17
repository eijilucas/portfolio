import { SectionTitle } from '../sectionTitle/sectionTitle'
import './information.scss'

export function Info() {
    return (
        <div className="information">
            <SectionTitle text='Languages'/>
            <div className="languages-info">
                <span>EN - Intermediate</span>
                <span>PT-BR - Native/Fluent</span>
            </div>
            <SectionTitle text='Education'/>
            <div className="educational-info">
                <span>🎓</span>
                <span>Analysis and Systems Development - Universidade de Mogi das Cruzes</span>
            </div>
        </div>
    )
}