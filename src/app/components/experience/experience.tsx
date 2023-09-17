import { SectionTitle } from "../sectionTitle/sectionTitle";
import Image from 'next/image'
import './experience.scss'
import { ReactLogo } from "../logos/react-logo";
import { TsLogo } from "../logos/typescript-logo";
import { JsLogo } from "../logos/js-logo";
import { JavaLogo } from "../logos/java-logo";

export function Experience() {
    return (
        <div className="experience">
            <SectionTitle text="Experience" />
            <p>Lorem ipsum dolor sit amet. Vel placeat omnis est quod provident quo aliquam autem qui ullam eaque id praesentium libero. Non laborum autem et ducimus Quis ut vitae voluptatem 33 adipisci enim et minima harum.</p>
            <div className="experience-time">
                <div className="program-languages">
                    <ReactLogo />
                    <div className="experience-unit">
                        <div className="experience-measure measure-1">
                            <span>1 year</span>
                        </div>
                    </div>
                </div>
                <div className="program-languages">
                    <TsLogo />
                    <div className="experience-unit">
                        <div className="experience-measure measure-1">
                            <span>1 year</span>
                        </div>
                    </div>
                </div>
                <div className="program-languages">
                    <JsLogo />
                    <div className="experience-unit">
                        <div className="experience-measure measure-2">
                            <span>2 years</span>
                        </div>
                    </div>
                </div>
                <div className="program-languages">
                    <JavaLogo />
                    <div className="experience-unit">
                        <div className="experience-measure measure-2">
                            <span>2 years</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}