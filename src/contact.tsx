import * as React from 'react';
import Typing from 'react-typing-animation';
// tslint:disable-next-line:no-import-side-effect
import './style.css';

export class Contact extends React.Component <any, any> {
    public constructor(props) {
        super(props);
    }

    public render() {
        return (
            <Typing speed={5}>
                    ✉️&emsp;nr2kim@edu.uwaterloo.ca
                    <br />📞&emsp;(647) 447 - 2273
                    <br />Github&emsp;https://github.com/nr2kim
                    <br />
            </Typing>
        );
    }
}