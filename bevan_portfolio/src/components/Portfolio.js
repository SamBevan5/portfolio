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
                        <div className="App__projects__project1__info">A notetaking app designed to keep you organized.</div>
                        <img src="/project_scribe.png"></img>
                    </div>
                    <div className="App__projects__project2">
                        <div className="App__projects__project2__heading">Hungry 4 More</div>
                        <div className="App__projects__project2__info">A search engine for the Boston restaurant scene.</div>
                        <img src="/project_h4m.png"></img>
                    </div>
                    <div className="App__projects__project3">
                        <div className="App__projects__project3__heading">Job Journal</div>
                        <div className="App__projects__project3__info">An organization tool for those that are job hunting.</div>
                        <img src="/project_jobjournal.png"></img>
                    </div>
                    <div className="App__projects__project4">
                        <div className="App__projects__project4__heading">Dangling Boy</div>
                        <div className="App__projects__project4__info">A different take on the classic game Hangman.</div>
                        <img src="/project_db.png"></img>
                    </div>
                </div>
                    
            </div>
        </>
    )


}