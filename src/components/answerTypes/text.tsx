import * as react from 'react';
import { Component } from 'react';
import { Alert, Button, Card, Form } from '../../widgets';

interface QuizAnswer {
    answer: string;
}

interface AddAnswerProps {
    addAnswer: (answer: QuizAnswer) => void;
}

interface AddQuestionState {
    answers: {
        answer: string;
        correct: boolean;
    };
}

class TextInput extends Component<AddAnswerProps, AddQuestionState> {
    constructor(props: AddAnswerProps) {
        super(props);
        this.state = {
            answers: { answer: "", correct: true }
        };
    }

    handleAnswerChange = (event: any) => {
        this.setState({ answers: event.target.value });
    }

    // Methods to manage answers...

    submitAnswer = () => {
        this.props.addAnswer({
            answer: this.state.answers.answer
        });
    }

    render() {
        return (
            <div>
                <Form.Input
                    label="Question"
                    placeholder="Write the correct answer here"
                    type="text"
                    value={this.state.answers.answer}
                    onChange={this.handleAnswerChange}
                />
                <button onClick={this.submitAnswer}>Add Question</button>
            </div>
        );
    }
}

export default TextInput;