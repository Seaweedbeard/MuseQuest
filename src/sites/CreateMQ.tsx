import * as React from 'react';
import { Component } from 'react';
import { Alert, Button, Card, Form } from '../widgets';

class CreateMQ extends Component {
    quiz: any = {
        title: "",
        description: "",
        author: "",
        media: "",
        questions: [
            {
                question: "",
                answers: [
                    {
                        answer: "",
                        correct: false
                    }
                ]
            }
        ]
    }

    handleNext() {
        if(this.quiz.title === "" || this.quiz.description === "" || this.quiz.author === "") {
            alert("Please fill out all non-optional fields.");
            return;
        }
        console.log(this.quiz);
    }

    render() {
        return (
            <>
                <Card title="Create a new MuseQuest">
                    <Form.Input
                        label="Title"
                        placeholder="Create a captivating title"
                        type="text"
                        value={this.quiz.title}
                        onChange={(event) => this.quiz.title = event.target.value}
                    />
                    <Form.Textarea
                        label="Description"
                        placeholder="Extend your title with an interesting description"
                        value={this.quiz.description}
                        onChange={(event) => this.quiz.description = event.target.value}
                    />
                    <Form.Input
                        label="Author"
                        placeholder="Enter author name (Your name or your group's name)"
                        type="text"
                        value={this.quiz.author}
                        onChange={(event) => this.quiz.author = event.target.value}
                    />
                    <Form.Input
                        label="Image"
                        placeholder="Enter image url or video url (Optional)"
                        type="text"
                        value=""
                        onChange={(event) => this.quiz.media = event.target.value}
                    />
                    <Button.Success onClick={() => this.handleNext()}>
                        Create MuseQuest
                    </Button.Success>
                </Card>
            </>
        )
    }
}

export default CreateMQ;