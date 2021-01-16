import React, { Component } from 'react';
import Section from './componensts/Section/Section'
import FeedBackOptions from './componensts/FeedbackOptions/FeedBackOptions'
import Statistics from './componensts/Statistics/Statistics'
import './App.css';

export default class App extends Component {
 static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0
}

  onHandleClick = (e) => { 
    const { name } = e.currentTarget;
    
    this.setState(prevState => { 
      console.log(prevState)
      return {
        [name]: prevState[name] + 1,
      }
    })
  }

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback())
  };
  
  render() { 
     return (
      <div className="App">   
         <Section title='Пожалуйста оставьте ваш отзыв' >  
           <FeedBackOptions options={this.state} onLeaveFeedback={this.onHandleClick} />
         </Section>
        <Section title='Статистика' >  
           <Statistics
             good={this.state.good}
             neutral={this.state.neutral}
             bad={this.state.bad}
             total={this.countTotalFeedback()}
             positivePercentage={this.countPositiveFeedbackPercentage()} />
         </Section> 
    </div>
    );
  }
}

