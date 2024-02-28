import * as React from 'react';
//import useState from 'react';
import { Component } from 'react';
import { Alert, Button, Card, Form } from '../widgets';
import AddQuestion from '../components/addQuestion';
import textStyles from "../cssModules/textStyles.module.css";

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
    showAddQuestion: boolean;
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
                questions: []
            },
            showAddQuestion: false
        };
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: keyof Quiz) => {
        this.setState({
            quiz: {
                ...this.state.quiz,
                [field]: event.currentTarget.value
            }
        });
    }

    handleNext = () => {
        const { title, description, author } = this.state.quiz;
        if(title === "" && description === "" && author === "") {
            alert("Please fill out all non-optional fields.");
            return;
        }

        //display AddQuestion component below the CreateMQ component when the user clicks the button
        this.setState({
            showAddQuestion: true
        });
    }

    addQuestionToQuiz = (newQuestion: any) => {
        this.setState(() => ({
            quiz: {
                ...this.state.quiz,
                questions: [...this.state.quiz.questions, newQuestion]
            },
        }), () => {
            console.log(this.state.quiz);
        });
    }

    render() {
        const { title, description, author, media } = this.state.quiz;
        return (
            <>
                <Card title="Create a new MuseQuest">
                    <h1 className={textStyles.center}>[ Create ]</h1>
                    Title:
                    <Form.Input
                        label="Title"
                        placeholder="Create a captivating title"
                        type="text"
                        value={title}
                        onChange={(event) => this.handleChange(event, 'title')}
                    />
                    <br/>
                    Description:
                    <Form.Textarea
                        label="Description"
                        placeholder="Extend your title with an interesting description"
                        value={description}
                        onChange={(event) => this.handleChange(event, 'description')}
                    />
                    <br/>
                    Author:
                    <Form.Input
                        label="Author"
                        placeholder="Enter author name (Your name or your group's name)"
                        type="text"
                        value={author}
                        onChange={(event) => this.handleChange(event, 'author')}
                    />
                    <br/>
                    Image:
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
                {this.state.showAddQuestion && 
                //pass amount of questions to AddQuestion component
                    <AddQuestion 
                        addQuestion={this.addQuestionToQuiz}
                        questionCount={Number(this.state.quiz.questions.length)}
                    />
                }
            </>
        )
    }
}

export default CreateMQ;