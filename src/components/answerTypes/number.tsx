import * as react from 'react';
import { Component } from 'react';
import { Alert, Button, Card, Form } from '../../widgets';

interface QuizAnswer {
    answer: number;
    correct: boolean;
}

interface AddAnswerProps {
    addAnswer: (answer: QuizAnswer) => void;
}

interface AddQuestionState {
    answers: {
        answer: number;
        correct: boolean;
    };
}

class NumberInput extends Component<AddAnswerProps, AddQuestionState> {
    constructor(props: AddAnswerProps) {
        super(props);
        this.state = {
            answers: { answer: 0, correct: true }
        };
    }

    handleAnswerChange = (event: any) => {
        this.setState({ answers: {
            answer: event.target.value,
            correct: true
        }});
    }

    submitAnswer = () => {
        try {
            this.props.addAnswer(
                this.state.answers
            );
            this.setState({ answers: {
                answer: 0,
                correct: true
            }});
        } catch (error: any) {
            alert(error.message);
        }
    }

    render() {
        return (
            <div>
                <Form.Input
                    label="Question"
                    placeholder="Write the correct answer here"
                    type="number"
                    value={this.state.answers.answer}
                    onChange={this.handleAnswerChange}
                />
                <button onClick={this.submitAnswer}>Add Question</button>
            </div>
        );
    }
}

export default NumberInput;