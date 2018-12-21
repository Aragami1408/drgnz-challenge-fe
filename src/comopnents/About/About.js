/* eslint-disable */

import React, { PureComponent } from 'react';

export class NotFound extends PureComponent {
  goBack = () => {
    const { history } = this.props;
    history.goBack();
  }

  render() {
    return (
      <div id="about-wrapper">
        <div id="about">
          <div id="title">FAQ</div>
          <div id="faq">
            <div className="header">
              What is Drgnz Challenge 2018?
            </div>
            <div className="content">
              Drgnz Challenge 2018 is a CTF game for DNH community.
            </div>
            <div className="header">
              What is this game about?
            </div>
            <div className="content">
              This game is about solving Software Engineering and Computer Science problems.
            </div>
            <div className="header">
              What is a CTF game?
            </div>
            <div className="content">
              <div className="sub-content">
                CTF stands for Capture The Flags.
              </div>
              <div className="sub-content">
              In this game, you will be given a list of problems. You need to solve the problem in order to obtain the flag associated with that problem. Complete flags are usually in <b>{`Drgnz{flag}`}</b> format. There will be problems in which only a part of a flag can be achieved. These problems require you to complete the flag by yourself by putting the parts to the flag header. For example: <b>{`hello_world to Drgnz{hello_world}`}</b>
              </div>
            </div>
            <div className="header">
              How many stages are there in this game?
            </div>
            <div className="content">
              <div className="sub-content">
                There are 5 stages in this game. Each stage consists of many levels with its own level of difficulty. There are locked stages which require you to unlock by achieving certain conditions. There are also special stages with hidden conditions. Lastly, there are also hidden stages which will not appear on the stage selection screen so you will need to find them yourself. Listed below are the stages in ascending order of difficulty
              </div>
              <div className="sub-content">
                Listed below are the stages in ascending order of difficulty
                <ul>
                  <li>The Entrance</li>
                  <li>The Highland</li>
                  <li>The Frozen</li>
                  <li>The Blade</li>
                  <li>The Bloodmoon</li>
                </ul>
              </div>
            </div>
            <div className="header">
              What do you need to succeed the game?
            </div>
            <div className="content">
               Knowledge of Mathematics, Cryptography, Algorithm and Computer Science Concept likes OOP, Debugging, Design Pattern, etc.
            </div>
            <div className="header">
              Can I discuss this game on social media or forum?
            </div>
            <div className="content">
              It is encouraged that you share the game to others. You can freely discuss the problems but not the “flag” (answer). This is to ensure that everyone has the chance to challenge themselves.
            </div>
            <div className="header">
              Copyright
            </div>
            <div className="content">
              Designed by <b>Drgnz</b> from <b>Day Nhay Hoc</b>
            </div>
            <div className="header">
              Others
            </div>
            <div className="content">
              Card's and Stage background's images are belong to <a href="https://duelyst.com/">Duelyst</a> - <a href="https://www.counterplaygames.com/">Counter Play Games</a>
            </div>
          </div>
          <div onClick={this.goBack} className="about-link">
            Go Back
          </div>
        </div>
      </div>
    )
  }
}

export default NotFound
