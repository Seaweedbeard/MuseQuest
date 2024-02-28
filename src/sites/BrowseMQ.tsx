import * as React from 'react';
import { Component } from 'react';
import { Alert, Button, Card, Form } from '../widgets';
import textStyles from "../cssModules/textStyles.module.css";

class BrowseMQ extends Component {

    render() {
        return (
            <>
                <Card title="Browse MuseQuests">
                    <h1 className={textStyles.center}>[ Browse ]</h1>
                    <Form.Input
                        label="Search"
                        placeholder="Search for MuseQuests (Empty Library)"
                        type="text"
                        value=""
                        onChange={() => {}}
                        disabled
                    />
                    <Button.Success onClick={() => {}}>
                        Search
                    </Button.Success>
                </Card>
            </>
        )
    }
}

export default BrowseMQ;