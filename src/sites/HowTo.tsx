import * as React from 'react';
import { Component } from 'react';
import { Alert, Button, Card, Form } from '../widgets';
import textStyles from "../cssModules/textStyles.module.css";

class HowTo extends Component {

    render() {
        return (
            <>
                <Card title="How to use MuseQuest">
                    <h1 className={textStyles.center}>[ How-To ]</h1>
                    <p>
                        As there is nothing to use yet, there is no need for a how to use page.
                    </p>
                </Card>
            </>
        )
    }
}

export default HowTo;