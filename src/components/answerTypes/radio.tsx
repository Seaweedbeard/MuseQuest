import * as react from 'react';
import { Component } from 'react';
import { Alert, Button, Card, Form } from '../../widgets';

interface QuizAnswer {
    answer: string[];  // Array of answer
    correct: number[];    // Index of the correct answer
}

interface AddAnswerProps {
    addAnswer: (answer: QuizAnswer) => void;    
}

interface RadioInputState {
    answer: string[];  // Array to hold answer
    correct: number[];    // Index of the correct answer
}

class radioInput extends Component<AddAnswerProps, RadioInputState> {
    constructor(props: AddAnswerProps) {
        super(props);
        this.state = {
            answer: [],
            correct: [0]
        };
    }

    handleAnswerChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const updatedanswer = [...this.state.answer];
        updatedanswer[index] = event.target.value;
        this.setState({ answer: updatedanswer });
    }

    setCorrectAnswer = (index: number) => {
        this.setState({ correct: [index] });
    }

    submitAnswer = () => {
        try {
            this.props.addAnswer({
                answer: this.state.answer,
                correct: this.state.correct
            });
        } catch (error: any) {
            alert(error.message);
        }
    }

    render() {
        return (
            <div>
                {this.state.answer.map((answer, index) => (
                    <div key={index}>
                        <input 
                            type="radio" 
                            name="correctAnswer" 
                            onChange={() => this.setCorrectAnswer(index)}
                            checked={this.state.correct[0] === index}
                        />
                        <input 
                            type="text" 
                            value={answer} 
                            onChange={this.handleAnswerChange(index)} 
                        />
                    </div>
                ))}
                <button onClick={() => {
                    if(this.state.answer.length < 5) {
                        this.setState(prevState => ({
                            answer: [...prevState.answer, ""]
                        }));
                    }
                }}>
                    Add Option
                </button>
                <button onClick={() => {
                    if(this.state.answer.length > 1) {
                        this.setState(prevState => ({
                            answer: prevState.answer.slice(0, -1)
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
