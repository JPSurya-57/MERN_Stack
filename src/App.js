import './index';
import logo from './ME.jpg';
import linkedin from './link.jpg';
import face from './face.jpg';
import twi from './twi.jpg';
import git from './git.jpg';

function App(){
    return(
        <div className='content'>
          <div className="pic">
            <img src={logo} className="App-logo" alt="logo" />
          </div>

          <div className="detail">
            <h1>SURYA B</h1>
            <h1>Frond end developer</h1>
            <a href="https://mail.google.com/mail/u/0/#inbox">
            <button className='btn'>Email</button></a>
            
          </div>

          <div className="about">
            <h1>About</h1>
            <p>Hi, I'm a student at the SNSCE studying Computer Science. I
            am currently in my 4th year of my degree. I am interested in web development and
            I am currently learning React. 
            </p>
          </div>

          <div className="interest">
            <h1>Interests</h1>
            <p>problem solving, daily coding, Music lover, creative designing.</p>
          </div>

          <div className="logo">
            <a href="https://www.linkedin.com/in/surya-b-/"> 
               <img src={linkedin} className="logo1" alt="logo" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100051947774045&mibextid=kFxxJD"> 
               <img src={face} className="logo1" alt="logo" />
            </a>
            <a href="https://www.linkedin.com/in/surya-b-/" > 
               <img src={twi} className="logo1" alt="logo" />
            </a>
            <a href="https://github.com/JPSurya-57"> 
               <img src={git} className="logo1" alt="logo" />
            </a>
          </div>
        </div>
    );
}
export default App;