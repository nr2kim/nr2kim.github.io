import * as React from 'react';
import './style.css';

export class FetchProjects extends React.Component <any, any> {
    public constructor(props) {
        super(props);
    }

    public onClickHeading(e: any) {
        e.preventDefault();
        for(let i = 0; i < e.target.children.length; i++) {
            if (e.target.children.item(i).id == "openClose") {
                if (e.target.children.item(i).innerHTML == " 🔼 ") {
                    e.target.children.item(i).innerHTML = " 🔽 ";
                } else {
                    e.target.children.item(i).innerHTML = " 🔼 ";
                }
            } else if (e.target.children.item(i).style.display === "") {
                e.target.children.item(i).style.display = "block";
            } else {
                e.target.children.item(i).style.display = "";
            }
        }
    }

    public render() {
        return (
            <div>
                <div className='section'>Kate's Side Projects</div>
                <div className='subSection' onClick={(e: any) => this.onClickHeading(e)}>
                    <div id="openClose"> 🔽 </div> Cloud management system
                    <div className='subSectionBody'>
                        Duration: From May, 2018 to Present
                        <br />&emsp;🔍 Creating a management system for cloud storages
                                     for easier access, handle, and search in one application.
                        <br />&emsp;🔍 Exposed in Java UI frameworks, such as swings and awt
                                     and open source APIs of Dropbox, GoogleDrive, and OneDrive.
                        <br />&emsp;🔍 Enhanced leadership and project management skills as directing the project.
                    </div>
                </div>
                <div className='subSection' onClick={(e: any) => this.onClickHeading(e)}>
                    <div id="openClose"> 🔽 </div> Connect-4 Online
                    <div className='subSectionBody'>
                        Duration: From June, 2018 to Present
                        <br />&emsp;🔍 Developing the web version of a board game, Connect-4, in a group of 2.
                        <br />&emsp;🔍 Experiencing the whole project workflow from start to the end,
                                     including server-side and UI-side.
                        <br />&emsp;🔍 Improving high-level designing, estimating, and planning skills.
                    </div>
                </div>
                <div className='subSection' onClick={(e: any) => this.onClickHeading(e)}>
                    <div id="openClose"> 🔽 </div> Digital Image Processing
                    <div className='subSectionBody'>
                        Duration: From January, 2018 to April, 2018
                        <br />&emsp;🔍 Implemented Kirsch edge detector algorithm in VHDL,
                                     which detects edges of an image by brightness of nearby pixels of each pixel.
                        <br />&emsp;🔍 Calculated the direction of edges
                                     using convolution table and derivative functions.
                        <br />&emsp;🔍 Improved collaboration and time management skills with tight deadlines.
                    </div>
                </div>
                <div className='subSection' onClick={(e: any) => this.onClickHeading(e)}>
                    <div id="openClose"> 🔽 </div> VHDL Parser
                    <div className='subSectionBody'>
                        Duration: From January, 2018 to April, 2018
                        <br />&emsp;🔍 Parsed VHDL code to F and W, simple intermediate languages using Java on Eclipse
                        <br />&emsp;🔍 Displayed parsing results with logic gates
                                     and SVG by setting nodes and edges for each formula
                        <br />&emsp;🔍 Learned about compiler concepts and improved object-oriented programming skills
                    </div>
                </div>
                <div className='subSection' onClick={(e: any) => this.onClickHeading(e)}>
                    <div id="openClose"> 🔽 </div> WebGL Website
                    <div className='subSectionBody'>
                        Duration: From January, 2018 to March, 2018
                        <br />&emsp;🔍 Created scenes and 3D rendering characters and animals using Three.js.
                        <br />&emsp;🔍 Learned React and Redux for faster render and better state management.
                    </div>
                </div>
            </div>
        );
    }
}
