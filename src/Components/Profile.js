import React from 'react'
import profileImage from '../Assets/Images/profileImage.jpg'
import bell from '../Assets/Images/bell.svg'
import menu from '../Assets/Images/menu.svg'
import time from '../Assets/Images/time.svg'
import fruits from '../Assets/Images/fruits.svg'
import heartbeat from '../Assets/Images/heartbeat.svg'
import signup from '../Assets/Images/signup.svg'


const Profile = () => {
    return(
        <div id="profile">
            <div id="userDetails">
                <div id="user">
                     <img src={profileImage} alt="user image"/>
                     <div>
                         <h4>Mr. Panda <span id="title"><br />Artist</span></h4>
                     </div>
                </div>
                <div id="options">
                    <div id="bell">
                        <img src={bell} alt="notification bell" />
                        <p>3</p>
                    </div>
                    <div>
                        <img src={menu} alt="menu" />
                    </div>
                </div>
            </div>
            <div id="health">
                <div id="title">Health</div>
                <div id="stats">
                    <div>
                        <p>6:25</p>
                        <div className="unit">
                            <img src={time} />
                            <div>Hours</div>
                        </div>
                        <progress value="70" max="100" />
                    </div>
                    <div>
                        <p>120</p>
                        <div className="unit">
                            <img src={heartbeat} />
                            <div>Bpm</div>
                        </div>
                        <progress value="70" max="100" />
                    </div>
                    <div>
                        <p>1.84</p>
                        <div className="unit">
                            <img src={fruits} />
                            <div>Kcal</div>
                        </div>
                        <progress value="70" max="100" />
                    </div>
                </div>  
            </div>
            <div id="signup">
                <img src={signup} />
                <div id="details">
                    <p>Sign up for a personal trainer to improve your results</p>
                    <div id="action">Sign Up</div>
                </div>
            </div>
            <div id="trainings">
                <div id="title">Today Trainings</div>
                <div className="track">
                    <div>
                        <p>Box</p>
                        <h5>Sports Club</h5>
                        <div className="time">10:00</div>
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
                        <img src={dots} />
                    </div>
                </div>
                <div className="track">
                    <div>
                        <p>Crossfit</p>
                        <h5>Sports Club</h5>
                        <div className="time">12:00</div>
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
                        <img src={dots} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;