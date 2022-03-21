import React, {Component} from 'react';
import ShortInfoBlock from '../ShortInfoBlock/shortInfoBlock';
import './schedule.css';

const events = [['1:00 - 1:30 PM', 'Kahoot/Ice breakers', 'Learning about Davis through a trivia game and getting to know each other.'],
                ['1:30 - 2:15 PM', 'Mock Lecture', 'Discussing college logistics about admissions, dorming, campus life, perks, and many more resources.'],
                ['2:15 - 2:30 PM', 'Break', 'Feel free to get up to get some water or a snack and take a break.'],
                ['2:30 - 3:15 PM', 'Panel', 'Ask questions to a panel of college students and hear about different experiences and college life.'],
                ['3:15 - 3:20 PM', 'Break', 'Feel free to get up to get some water or a snack and take a break.'],
                ['3:20 - 4:00 PM', 'Office Hours', 'Join different breakout rooms to meet with college students and discuss various topics and questions together.'],
                ['4:00 - 4:30 PM', 'Closing/Buffer', 'Wrapping up the event together and discussing next steps and resources.'],
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
                    link="https://ucdavis.zoom.us/j/92110391733"
                />
            </div>
        )
    }
}