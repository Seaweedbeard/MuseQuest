import * as react from 'react';
import { Component } from 'react';

interface QuizAnswer {
    answers: string[];
    correct: number[];
}

interface AddAnswerProps {
    addAnswer: (answer: QuizAnswer) => void;    
}

interface RadioInputState {
    answers: string[];  // Array to hold answers
    correct: number[];
}

class multipleChoiceInput extends Component<AddAnswerProps, RadioInputState> {
    constructor(props: AddAnswerProps) {
        super(props);
        this.state = {
            answers: [],
            correct: [] // -1 indicates no selection
        };
    }

    handleAnswerChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const updatedAnswers = [...this.state.answers];
        updatedAnswers[index] = event.target.value;
        this.setState({ answers: updatedAnswers });
    }

    setCorrectAnswer = (index: number) => {
        this.setState(prevState => {
            if (prevState.correct.includes(index)) {
                return { correct: prevState.correct.filter(i => i !== index) };
            } else {
                return { correct: [...prevState.correct, index] };
            }
        });
    }

    submitAnswer = () => {
        if (this.state.correct.length < 1) {
            alert("Please select at least 1 correct answer");
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
                            type="checkbox" 
                            name="correctAnswer" 
                            onChange={() => this.setCorrectAnswer(index)}
                            checked={this.state.correct.includes(index)}
                        />
                        <input 
                            type="text" 
                            value={answer} 
                            onChange={this.handleAnswerChange(index)} 
                        />
                    </div>
                ))}
                <button onClick={() => {
                    if(this.state.answers.length < 10) {
                        this.setState(prevState => ({ answers: [...prevState.answers, ""] }));
                    }
                }}>
                    Add Option
                </button>
                <button onClick={() => {
                    if(this.state.answers.length > 1) {
                        this.setState(prevState => ({ answers: prevState.answers.slice(0, -1) }),
                            () => {
                                this.state.correct.forEach((correct, index) => {
                                    if (correct >= this.state.answers.length) {
                                        this.setState(prevState => ({ correct: prevState.correct.filter(i => i !== correct) }));
                                    }
                                });
                            }
                        );
                    }
                }}>
                    Remove Option
                </button>
                <button onClick={this.submitAnswer}>Submit Question</button>
            </div>
        );
    }
}

export default multipleChoiceInput;
