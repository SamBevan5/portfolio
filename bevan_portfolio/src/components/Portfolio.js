import React from 'react';
import Nav from './Nav'

export default (props) => {

    return (
        <>
            <Nav/>
            <div className="App">
                <div className="App__header">
                    <h1>Sam Bevan is a Full Stack Developer and problem solver from Philadelphia, PA</h1>
                </div>
                <div className="App__projects">
                    <div className="App__projects__project1">
                        <div className="App__projects__project1__heading">Scribe</div>
                        <div className="App__projects__project1__info">A notetaking app designed to keep you organized.<br/><br/><br/>
                        <a href="https://scribe-app.netlify.app/">Check it out></a></div>
                        <img src="/project_scribe.png" alt="scribe"></img>
                        
                    </div>
                    <div className="App__projects__project2">
                        <div className="App__projects__project2__heading">Hungry 4 More</div>
                        <div className="App__projects__project2__info">A search engine for the Boston restaurant scene.<br/><br/><br/>
                        <a href="https://hungry4more.netlify.app/">Check it out ></a>
                        </div>
                        <img src="/project_h4m.png" alt="h4m"></img>
                        
                        
                    </div>
                    <div className="App__projects__project3">
                        <div className="App__projects__project3__heading">Job Journal</div>
                        <div className="App__projects__project3__info">An organization tool for those that are job hunting.<br/><br/><br/>
                        <a href="https://job-journal-app.herokuapp.com/jobs">Check it out ></a>
                        </div>
                        <img src="/project_jobjournal.png" alt="journal"></img>
                    </div>
                    <div className="App__projects__project4">
                        <div className="App__projects__project4__heading">Dangling Boy</div>
                        <div className="App__projects__project4__info">A different take on the classic game Hangman.<br/><br/><br/>
                        <a href="https://sambevan5.github.io/SEIR-Project-1/">Check it out ></a></div>
                        <img src="/project_db.png" alt="hangman"></img>
                        
                    </div>
                </div>
                    
            </div>
        </>
    )


}