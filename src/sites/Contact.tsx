import * as React from 'react';
import { Component } from 'react';
import { Alert, Button, Card, Form } from '../widgets';

class Contact extends Component {

    render() {
        return (
            <>
                <Card title="Contact me">
                    <p>
                        If you have any questions or suggestions, please contact me at 
                        <br/> 
                        <a href="mailto:ruben.bjorkoy@gmail.com">ruben.bjorkoy@gmail.com</a>
                        <br/>
                        Or via telephone at
                        <br/>
                        <a href="tel:+4798101049">+47 981 01 49</a>
                    </p>
                </Card>
            </>
        )
    }
}

export default Contact;