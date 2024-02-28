import * as React from 'react';
import { Component } from 'react';
import { Alert, Button, Card, Form } from '../widgets';
import listStyles from "../cssModules/listStyles.module.css";
import divStyles from "../cssModules/divStyles.module.css";
import textStyles from "../cssModules/textStyles.module.css";

class About extends Component {

    render() {
        return (
            <>
                <Card title="About MuseQuest">
                    <h1 className={textStyles.center}>[ About ]</h1>
                    <Card title="The Project">
                        <ul className={listStyles.List}>
                            <li>MuseQuest is a platform for creating and sharing treasure hunts, quizzes and other interactive experiences.</li>
                            <li>The platform is designed to be user-friendly and accessible for all ages.</li>
                        </ul>
                    </Card>
                    <br/>
                    <Card title="The People">
                        <p>
                            <ul className={listStyles.List}>
                                <li>
                                    <div className={divStyles.left}>
                                        <a href="mailto:ruben.bjorkoy@gmail.com">Ruben Vega Bjørkøy</a>
                                    </div>
                                    <div className={divStyles.right}>
                                        Founder, Master, Developer, Unofficial and Unlicensed Musician
                                    </div>
                                </li>
                                {/* <li><a href="mailto:halvor@njastad.no">Halvor Njåstad</a></li> I have been expecting you*/}
                            </ul>
                        </p>
                    </Card>
                </Card>
            </>
        )
    }
}

export default About;