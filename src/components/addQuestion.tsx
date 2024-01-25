import * as React from 'react';
import { Component } from 'react';
import { Alert, Button, Card, Form } from '../widgets';
import textInput from '../components/answerTypes/text';
import numberInput from '../components/answerTypes/number';

interface QuizQuestion {
    question: string;
    imageurl?: string; // can be added into the question with <> tags
    videourl?: string;
    audiourl?: string;
    answertype: string;
    answers: Array<{
        answer: string;
        correct: boolean;
    }>;
}

interface AddQuestionProps {
    addQuestion: (question: QuizQuestion) => void;
    questionCount: number;
}

interface AddQuestionState {
    question: string;
    type: string;
    answers: Array<{
        answer: string;
        correct: boolean;
    }>;
    answerTypes: string[];
}

interface typeMap {
    [key: string]: any;
}

class AddQuestion extends Component<AddQuestionProps, AddQuestionState> {
    constructor(props: AddQuestionProps) {
        super(props);
        this.state = {
            question: "",
            type: "text",
            answers: [{ answer: "", correct: false}],
            answerTypes: [
                "text", //Text
                "image",  //url
                "video", //url
                "audio", //url?
                "multiple choice", //checkboxes
                "number", //number
                "range", //range
                "date", //date
                "rotary", //A rotating safe dial
                "piano", //A piano keyboard
                "keypad", //A keypad
                "sheet music", //A bar of sheet music
                "tempo", //A tempo slider
                "notepad", //A keypad but with the music notes A-G
                "lock" //A 3-4 digit code
            ]
        };
    }

    typemap: typeMap = {
        "text": textInput,
        "image": "imageInput",
        "video": "videoInput",
        "audio": "audioInput",
        "multiple choice": "multipleChoiceInput",
        "number": numberInput,
        "range": "rangeInput",
        "date": "dateInput",
        "rotary": "rotaryInput",
        "piano": "pianoInput",
        "keypad": "keypadInput",
        "sheet music": "sheetMusicInput",
        "tempo": "tempoInput",
        "notepad": "notepadInput",
        "lock": "lockInput"
    }
    handleQuestionChange = (event: any) => {
        this.setState({ question: event.target.value });
    }

    handleTypeChange = (event: any) => {
        this.setState({ type: event.target.value });
    }

    // Methods to manage answers...

    submitQuestion = () => {
        this.props.addQuestion({
            question: this.state.question,
            answers: this.state.answers,
            answertype: "text"
        });
    }

    renderFieldComponent = () => {
        const { type } = this.state;
        const FieldComponent = this.typemap[type]; // Get the component from the typemap
    
        // Check if FieldComponent is a string or a component
        if (typeof FieldComponent === 'string') {
            // If it's a string, assume it's a placeholder and not yet implemented
            return <div>{`Component for ${type} not implemented yet.`}</div>;
        } else {
            // Else, render it
            return FieldComponent ? <FieldComponent 
                addAnswer={this.submitQuestion}
            /> : null;
        }
    }

    render() {
        return (
            <Card title={"Question " + this.props.questionCount}>
                <Form.Input
                    label="Question"
                    placeholder="Write your question here"
                    type="text"
                    value={this.state.question}
                    onChange={this.handleQuestionChange}
                />
                Type of Answer &nbsp;
                <select
                    value={this.state.type}
                    onChange={this.handleTypeChange}
                >
                    {this.state.answerTypes.map((type) => (
                        <option value={type} key={type}>{type}</option>
                    ))}
                </select>
                {
                    this.renderFieldComponent()
                }
            </Card>
        );
    }
}

export default AddQuestion;