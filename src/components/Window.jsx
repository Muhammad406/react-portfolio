import { ali } from '../assets/data'
import './styles/window.css'


const Window = () => {
    return (
        <div className="container divider-minus">
            <div className="window">
                <div className="window-header">
                    <div className="dots">
                        <div className="window-dot-1"/>
                        <div className="window-dot-2"/>
                        <div className="window-dot-3"/>
                    </div>
                    <div className="window-title">
                        About Me
                    </div>
                    <div className="cmd"/>
                </div>
                <div className="window-body">
                    <div className="window-body-content">
                        <span>{">"}</span> user.background
                    </div>
                    <div className="window-body-info mt-5">
                        "{ali.background}"
                    </div>
                    <div className="window-body-content mt-25">
                        <span>{">"}</span> user.contactInfo
                    </div>
                    <div className="window-body-info mt-5">
                        ["<a href={`mailto:${ali.contacts.email}`}>
                            {ali.contacts.email}
                            </a>", "
                            <a href={ali.contacts.linkedin} target="_blank" rel="noreferrer">
                                LinkedIn
                                </a>", "
                            <a href={ali.contacts.github} target="_blank" rel="noreferrer">
                                GitHub
                                </a>"]
                    </div>
                    <div className="window-body-content mt-25">
                        <span>{">"}</span> user.CV
                    </div>
                    <div className="window-body-info mt-5">
                        "<a href={'/assets'+ali.resume} target="_blank" rel="noreferrer">
                            Resume_2024.pdf
                            </a>"
                    </div>
                    <div className="window-body-content mt-25">
                        <span>{">"}</span> user.interests
                    </div>
                    <div className="window-body-info mt-5">
                        [{ali.interests.map(interest => '"' + interest + '"').join(', ')}]
                    </div>
                    <div className="window-body-content mt-25">
                        <span>{">"}</span> user.education
                    </div>
                    <div className="window-body-info mt-5">
                        "{ali.education}"
                    </div>
                    <div className="window-body-content mt-25">
                        <span>{">"}</span> user.skills
                    </div>
                    <div className="window-body-info mt-5">
                        [{ali.skills.map(skill => '"' + skill + '"').join(', ')}]
                    </div>
                    <div className="window-body-content mt-25 flex">
                        <span>{">"}</span> <div className="blink text-cursor-light"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Window