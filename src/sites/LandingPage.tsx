import * as React from 'react';
import { Button, Card } from '../widgets';
import { useNavigate } from 'react-router-dom';

function LandingPage() {    

    let navigate = useNavigate();
    const routeChange = (path: string) =>{ 
        navigate(path);
    }

    return (
        <>
            <Card title="Welcome to MuseQuest - A free learning tool for everyone">
                <p>
                    MuseQuest is a storytelling quiz platform that
                    aims to make both teaching and learning 
                    interactive and fun. 
                </p>
                <Button.Success onClick={() => routeChange("/create")}>
                    Get started creating MuseQuests
                </Button.Success>
                <br/>
                <Button.Success onClick={() => routeChange("/browse")}>
                    Or browse already created MuseQuests
                </Button.Success>
            </Card>
        </>
    )
}

export default LandingPage