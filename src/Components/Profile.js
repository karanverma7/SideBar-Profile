import React, {useRef} from 'react'
import profileImage from '../Assets/Images/profileImage.jpg'
import bell from '../Assets/Images/bell.svg'
import menu from '../Assets/Images/menu.svg'
import time from '../Assets/Images/time.svg'
import fruits from '../Assets/Images/fruits.svg'
import heartbeat from '../Assets/Images/heartbeat.svg'
import signup from '../Assets/Images/signup.svg'
import dots from '../Assets/Images/dots.svg'
import trainer1 from '../Assets/Images/trainer1.svg'
import trainer2 from '../Assets/Images/trainer2.svg'
import contact from '../Assets/Images/contact.svg'


const Profile = () => {

    const sliderRef = useRef()
    let i = 1;

    const slideNext = () => {
        if(i<3){
            sliderRef.current.style.transform = `translateX(${-i*101}%)`
            i++;
        }
    }

    const slideBack = () => {
        if(i>0){
            i--;
            sliderRef.current.style.transform = `translateX(${-i*101}%)`
        }
    }

    return(
        <div id="profile">
            <div id="userDetails">
                <div id="user">
                     <img src={profileImage} alt="user"/>
                     <div>
                         <h4>Mr. Panda <span id="title"><br />Artist</span></h4>
                     </div>
                </div>
                <div id="options">
                    <div id="bell">
                        <img src={bell} alt="bell"/>
                        <p>3</p>
                    </div>
                    <div>
                        <img src={menu} alt="menu"/>
                    </div>
                </div>
            </div>
            <div id="health">
                <div id="title">Health</div>
                <div id="stats">
                    <div>
                        <p>6:25</p>
                        <div className="unit">
                            <img src={time} alt="time"/>
                            <div>Hours</div>
                        </div>
                        <progress value="70" max="100" />
                    </div>
                    <div>
                        <p>120</p>
                        <div className="unit">
                            <img src={heartbeat} alt="heart beat"/>
                            <div>Bpm</div>
                        </div>
                        <progress value="70" max="100" />
                    </div>
                    <div>
                        <p>1.84</p>
                        <div className="unit">
                            <img src={fruits} alt="fruits"/>
                            <div>Kcal</div>
                        </div>
                        <progress value="70" max="100" />
                    </div>
                </div>  
            </div>
            <div id="signup">
                <img src={signup} alt="signup"/>
                <div id="details">
                    <p>Sign up for a personal trainer to improve your results</p>
                    <div id="action">Sign Up</div>
                </div>
            </div>
            <div id="trainings">
                <div id="title" style={{ transform: 'translateX(-4px)', marginBottom: '10px'}}>Today Trainings</div>
                <div id="controls">
                    <div id="previous" onClick={slideBack}>&#60;</div>
                    <div id="next" onClick={slideNext}>&#62;</div>
                </div>
                <div id="slider" ref={sliderRef}>
                    <div className="track">
                        <div>
                            <p>Box</p>
                            <h5>Sports Club</h5>
                            <div className="time">10:00 AM</div>
                        </div>
                        <div>
                            <p>40</p>
                            <h5>min</h5>
                            <h4>Warm-up</h4>
                        </div>
                        <div>
                            <p>20</p>
                            <h5>min</h5>
                            <h4>Stretch</h4>
                        </div>
                        <div>
                            <img src={dots} alt="dots"/>
                        </div>
                    </div>
                    <div className="track">
                        <div>
                            <p>Crossfit</p>
                            <h5>Sports Club</h5>
                            <div className="time">12:00 PM</div>
                        </div>
                        <div>
                            <p>20</p>
                            <h5>min</h5>
                            <h4>Warm-up</h4>
                        </div>
                        <div>
                            <p>40</p>
                            <h5>min</h5>
                            <h4>Stretch</h4>
                        </div>
                        <div>
                            <img src={dots} alt="dots"/>
                        </div>
                    </div>
                    <div className="track">
                        <div>
                            <p>Meditation</p>
                            <h5>Yoga Club</h5>
                            <div className="time">8:00 AM</div>
                        </div>
                        <div>
                            <p>20</p>
                            <h5>min</h5>
                            <h4>Warm-up</h4>
                        </div>
                        <div>
                            <p>20</p>
                            <h5>min</h5>
                            <h4>Stretch</h4>
                        </div>
                        <div>
                            <img src={dots} alt="dots"/>
                        </div>
                    </div>
                </div>
            </div>
            <div id="trainers">
                <div id="title" style={{ marginBottom: '10px'}}>Your Trainers</div>
                <div className="trainer">
                    <div id="details">
                        <img src={trainer1} alt="trainer1" />
                        <div id="status"></div>
                        <div>
                            <h4>John Kavanagh</h4>
                            <p>MMA Coach</p>
                        </div>
                    </div>
                    <div id="contact">
                        <img src={contact} alt="contact"/>
                    </div>
                </div>
                <div className="trainer">
                    <div id="details">
                        <img src={trainer2} alt="trainer1" />
                        <div id="status"></div>
                        <div>
                            <h4>John Kavanagh</h4>
                            <p>MMA Coach</p>
                        </div>
                    </div>
                    <div id="contact">
                        <img src={contact} alt="contact"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;