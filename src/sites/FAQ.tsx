import * as React from 'react';
import { Component } from 'react';
import { Alert, Button, Card, Form } from '../widgets';
import { Link } from 'react-router-dom';
import About from './About';
import textStyles from "../cssModules/textStyles.module.css";

class FAQ extends Component {

    render() {
        return (
            <>
                <Card title="Frequently Asked Questions">
                    <h1 className={textStyles.center}>[ FAQ ]</h1>
                    <Card title="What is the purpose of MuseQuest?">
                        Explained on <Link to="/About">this</Link> page.
                    </Card>
                    <br/>
                    <Card title="Who made this site?">
                        Check out the <Link to="/About">About</Link> page.
                    </Card>
                    <br/>
                    <Card title="Is this a class project?">
                        Nuh-uh. It's more like a hobby to me
                    </Card>
                </Card>
            </>
        )
    }
}

export default FAQ;