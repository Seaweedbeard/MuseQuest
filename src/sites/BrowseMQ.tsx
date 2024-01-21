import * as React from 'react';
import { Component } from 'react';
import { Alert, Button, Card, Form } from '../widgets';

class BrowseMQ extends Component {

    render() {
        return (
            <>
                <Card title="Browse MuseQuests">
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