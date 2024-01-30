import * as react from 'react';
import { Component } from 'react';

interface QuizAnswer {
    answer: string[];
    correct: number[];
}

interface AddAnswerProps {
    addAnswer: (answer: QuizAnswer) => void;    
}

interface RadioInputState {
    answer: string[];  // Array to hold answers
    correct: number[];
}

class multipleChoiceInput extends Component<AddAnswerProps, RadioInputState> {
    constructor(props: AddAnswerProps) {
        super(props);
        this.state = {
            answer: [],
            correct: [] // -1 indicates no selection
        };
    }

    handleAnswerChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const updatedAnswers = [...this.state.answer];
        updatedAnswers[index] = event.target.value;
        this.setState({ answer: updatedAnswers });
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
                    if(this.state.answer.length < 10) {
                        this.setState(prevState => ({ answer: [...prevState.answer, ""] }));
                    }
                }}>
                    Add Option
                </button>
                <button onClick={() => {
                    if(this.state.answer.length > 1) {
                        this.setState(prevState => ({ answer: prevState.answer.slice(0, -1) }),
                            () => {
                                this.state.correct.forEach((correct, index) => {
                                    if (correct >= this.state.answer.length) {
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
