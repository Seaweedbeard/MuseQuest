import * as react from 'react';
import { Component } from 'react';
import { Alert, Button, Card, Form } from '../../widgets';

interface QuizAnswer {
    answers: string[];  // Array of answers
    correct: number;    // Index of the correct answer
}

interface AddAnswerProps {
    addAnswer: (answer: QuizAnswer) => void;    
}

interface RadioInputState {
    answers: string[];  // Array to hold answers
    correct: number;    // Index of the correct answer
}

class radioInput extends Component<AddAnswerProps, RadioInputState> {
    constructor(props: AddAnswerProps) {
        super(props);
        this.state = {
            answers: [],
            correct: -1 // -1 indicates no selection
        };
    }

    handleAnswerChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const updatedAnswers = [...this.state.answers];
        updatedAnswers[index] = event.target.value;
        this.setState({ answers: updatedAnswers });
    }

    setCorrectAnswer = (index: number) => {
        this.setState({ correct: index });
    }

    submitAnswer = () => {
        if (this.state.correct === -1) {
            alert("Please select the correct answer");
            return;
        }
        this.props.addAnswer({
            answers: this.state.answers,
            correct: this.state.correct
        });
    }

    render() {
        return (
            <div>
                {this.state.answers.map((answer, index) => (
                    <div key={index}>
                        <input 
                            type="radio" 
                            name="correctAnswer" 
                            onChange={() => this.setCorrectAnswer(index)}
                            checked={this.state.correct === index}
                        />
                        <input 
                            type="text" 
                            value={answer} 
                            onChange={this.handleAnswerChange(index)} 
                        />
                    </div>
                ))}
                <button onClick={() => {
                    if(this.state.answers.length < 5) {
                        this.setState(prevState => ({ 
                            answers: [...prevState.answers, ''],
                            correct: prevState.correct === -1 ? 0 : prevState.correct 
                        }));
                    }
                }}>
                    Add Option
                </button>
                <button onClick={() => {
                    if(this.state.answers.length > 1) {
                        this.setState(prevState => ({ 
                            answers: prevState.answers.slice(0, -1),
                            correct: prevState.correct === prevState.answers.length - 1 ? prevState.correct - 1 : prevState.correct 
                        }));
                    }
                }}>
                    Remove Option
                </button>
                <button onClick={this.submitAnswer}>Submit Question</button>
            </div>
        );
    }
}

export default radioInput;
