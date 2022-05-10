import React, {Component} from 'react';
import './panelists.css';
import ShortInfoBlock from '../ShortInfoBlock/shortInfoBlock';
import SHOUTOUTSImg from '../../assets/Shoutouts.png';
import GlennPhoto from '../../assets/GlennPhoto.jpg';
import ManmeetPhoto from '../../assets/ManmeetPhoto.jpg';
import JeaminPhoto from '../../assets/JeaminPhoto.jpg';
import ArnavPhoto from '../../assets/ArnavPhoto.jpg';
import BriannaPhoto from '../../assets/BriannaPhoto.png';
import VarshaPhoto from '../../assets/VarshaPhoto.jpg';

export default class Panelists extends Component{
    render() {
        return(
            <React.Fragment>
                <div className = "shoutouts-heading">
                    <h1>Here are our panelists!</h1>
                    <h2>A huge shoutout to everyone who made this event possible!</h2>
                </div>
                <div className="grid">
                    <div class="item">
                        <img src={BriannaPhoto} class="topImage" alt="Brianna"></img>
                        <h2>SHOUTOUT TO</h2>
                        <h1>Brianna Wong</h1>
                        <p>She/Her/Hers<br />Hi, I'm a second year Cognitive Science major. My hobbies include tutoring kids, walking outdoors, and trying new foods.</p>
                    </div>
                    <div class="item">
                        <img src={ManmeetPhoto} class="topImage" alt="Manmeet"></img>
                        <h2>SHOUTOUT TO</h2>
                        <h1>Manmeet Kaur</h1>
                        <p>She/Her/Hers<br />Hi, I'm a second year English and Nutrition major. I enjoy exercising, playing different kinds of sports, creating art, reading, and watching movies/shows.</p>
                    </div>
                    <div class="item">
                        <img src={VarshaPhoto} class="topImage" alt="Varsha"></img>
                        <h2>SHOUTOUT TO</h2>
                        <h1>Varsha Senthil</h1>
                        <p>She/Her/Hers<br />Hi, I'm a fourth year Electrical Engineering major. I enjoy playing basketball, reading, and doodling.</p>
                    </div>
                    <div class="item">
                        <img src={JeaminPhoto} class="topImage" alt="Jeamin"></img>
                        <h2>SHOUTOUT TO</h2>
                        <h1>Jeamin Shin</h1>
                        <p>She/Her/Hers<br />Hi, I'm a third year Economics and Statistics major. I'm currently getting back into reading, especially historical fiction. I also enjoy playing video and board games with friends.</p>
                    </div>
                    <div class="item">
                        <img src={GlennPhoto} class="topImage" alt="Glenn"></img>
                        <h2>SHOUTOUT TO</h2>
                        <h1>Glenn Chen</h1>
                        <p>He/Him/His<br />Hi, I'm a second year Computer Science major. My hobbies include video games, music, and basketball.</p>
                    </div>

                    <div class="item">
                        <img src={ArnavPhoto} class="topImage" alt="Arnav"></img>
                        <h2>SHOUTOUT TO</h2>
                        <h1>Arnav Rastogi</h1>
                        <p>He/Him/His<br />Hi, I'm a third year Computer Science major. I like playing table tennis, watching soccer and Formula 1!</p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}