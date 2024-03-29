import * as React from 'react';
import { Component } from 'react';
import { Alert, Button, Card, Form } from '../widgets';

interface QuizQuestion {
    question: string;
    answers: Array<{
        answer: string;
        correct: boolean;
    }>;
}

interface Quiz {
    title: string;
    description: string;
    author: string;
    media: string;
    questions: QuizQuestion[];
}

interface CreateMQState {
    quiz: Quiz;
}

class CreateMQ extends Component<{}, CreateMQState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            quiz: {
                title: "",
                description: "",
                author: "",
                media: "",
                questions: [
                    {
                        question: "",
                        answers: [{ answer: "", correct: false }]
                    }
                ]
            }
        };
    }

    handleNext = () => {
        const { title, description, author } = this.state.quiz;
        if(title === "" || description === "" || author === "") {
            alert("Please fill out all non-optional fields.");
            return;
        }

        console.log(this.state.quiz);
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: keyof Quiz) => {
        this.setState({
            quiz: {
                ...this.state.quiz,
                [field]: event.currentTarget.value
            }
        });
    }

    render() {
        const { title, description, author, media } = this.state.quiz;
        return (
            <>
                <Card title="Create a new MuseQuest">
                    <Form.Input
                        label="Title"
                        placeholder="Create a captivating title"
                        type="text"
                        value={title}
                        onChange={(event) => this.handleChange(event, 'title')}
                    />
                    <Form.Textarea
                        label="Description"
                        placeholder="Extend your title with an interesting description"
                        value={description}
                        onChange={(event) => this.handleChange(event, 'description')}
                    />
                    <Form.Input
                        label="Author"
                        placeholder="Enter author name (Your name or your group's name)"
                        type="text"
                        value={author}
                        onChange={(event) => this.handleChange(event, 'author')}
                    />
                    <Form.Input
                        label="Image"
                        placeholder="Enter image url or video url (Optional)"
                        type="text"
                        value={media}
                        onChange={(event) => this.handleChange(event, 'media')}
                    />
                    <Button.Success onClick={this.handleNext}>
                        Create MuseQuest
                    </Button.Success>
                </Card>
            </>
        )
    }
}

export default CreateMQ;