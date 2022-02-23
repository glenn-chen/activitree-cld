import React, {Component} from 'react';
import ShortInfoBlock from '../ShortInfoBlock/shortInfoBlock';
import './schedule.css';

const events = [['10 AM', 'Welcome', 'Introduction, sharing resources for the day, and discussing how the event will work'],
                ['11 AM', 'Davis Kahoot', 'Virtually taking a trip through Davis together with a trivia game.'],
                ['11:10 AM', 'Mock Lecture', 'Discussing college logistics about admissions, dorming, campus life, perks, and many more resources.'],
                ['12 PM', 'Lunch', 'Feel free to hop in the zoom and eat lunch together! We\'ll be having a virtual picnic.'],
                ['1 PM', 'Office Hours', 'Join different breakout rooms to meet with college students and discuss various topics and questions together.'],
                ['2 PM', 'College Panel', 'Ask questions to a panel of college students and hear about different experiences and college life.'],
                ['3 PM', 'Closing', 'Wrapping up the event together and discussing next steps and resources.'],
                ['3:15 PM', 'Bonus Speed Networking', 'The virtual equivalent of talking to people outside after an event. Meet fellow high schoolers and college students, make new friends, and share experiences.']
                ]

function EventList(props) {
    let indices = [];
    for (let i = 0; i < events.length; i++)
        indices.push(i);
    return (
        <div class="grid-wrapper">
            <div class="time-col">
                {indices.map(index => (<div class="schedule-line">{events[index][0]}</div>))}
            </div>
            <div class="name-col">
                {indices.map(index => (<div class="schedule-line">{events[index][1]}</div>))}
            </div>
            <div class="description-col">
                {indices.map(index => (<div class="schedule-line">{events[index][2]}</div>))}
            </div>
        </div>
    );
}

export default class Schedule extends Component {
    render() {
        return (
            <div>
                <h1 class="schedule-header">College Learn-About Day Schedule</h1>
                <EventList />
                <ShortInfoBlock
                    version="blue"
                    buttonText="GET ZOOM LINK"
                    link=""
                />
            </div>
        )
    }
}