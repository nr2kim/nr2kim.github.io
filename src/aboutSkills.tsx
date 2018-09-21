import * as React from 'react';
import './style.css';

export class AboutSkills extends React.Component <any, any> {
    public constructor(props) {
        super(props);
    }

    public render() {
        return (
            <div>
                <div className='sectionHeading'>Kate's Brain</div>
                <div className='subSectionHeading'> 🍦 Soft Skills 🍦</div>
                <div className='subSectionBody'>
                    👪 great teamwork skills - has been working in many agile teams
                    <br />💬 good communication skills - even training to talk to a cat
                    <br />🌱 learn quickly
                    <br />🔥 enthusiastic
                    <br />📦 Think outside of box
                </div>
            </div>
        );
    }
}
