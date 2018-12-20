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
              Drgnz Challenge 2018 is a CTF-like game for DNH community.
            </div>
            <div className="header">
              Who is this game for?
            </div>
            <div className="content">
              This game is designed for a beginner in Software Engineering, Software Security or Computer Science related majors. Helping them to review and learn new things from the game.
            </div>
            <div className="header">
              Can I join this game?
            </div>
            <div className="content">
              Yes! Everybody can join this game. Not only DNH members.
            </div>
            <div className="header">
              What is CTF likes game?
            </div>
            <div className="content">
              <div className="sub-content">
                CTF stands for <b>Capture The Flags</b>. In this game, you will be given a list of problems. You have to solve each problem for the flag hidden inside the problem. Submit the flag and done.
              </div>
              <div className="sub-content">
               <b>The complete flag</b> is usually in <b>{`Drgnz{flag}`}</b> format. In some problems, only a part of a flag will be given. With that problem, you have to complete the flag yourself. By putting the incomplete flag to the flag header <b>{`Drgnz{your_incomplete_flag}`}</b> you will get the complete one! i.e <b>{`Drgnz{hello_world}`}</b>
              </div>
            </div>
            <div className="header">
              What is a stage?
            </div>
            <div className="content">
              <div className="sub-content">
                A stage is a thing containing many levels. Each stage has its own difficulties. A stage can be <b>locked</b> or <b>hidden</b>. You can unlock a stage by archive a given condition. Special stages will require <b>hidden conditions</b> to unlock.
              </div>
              <div className="sub-content">
                A hidden stage is a special one which is not shown on the <b>stage selection screen</b>. You have to find it yourself.
              </div>
            </div>
            <div className="header">
              What is a level?
            </div>
            <div className="content">
              A level has a problem. When you solve a problem, you will get a flag. Submit the flag for the next level.
            </div>
            <div className="header">
              What is a problem about?
            </div>
            <div className="content">
              Mathematics, Cryptography, Algorithm and Computer Science Concept likes OOP, Debugging, Design Pattern, etc.
            </div>
            <div className="header">
              Can I discuss about the game on social media or forum?
            </div>
            <div className="content">
              Feel free to discuss the problems, the game anywhere and anytime. And we would appreciate if you share the game to everyone you know. However, <b>we don't want you to share the flags that you've solved.</b> From this game, we want to share people about Computer Science, Software Engineering concept. Hence, sharing the flag is taking a chance for a beginner to learn new things or review their knowledge. So, <b>please give the beginner a guide they need, not the flag they want!</b>
            </div>
            <div className="header">
              Copyright
            </div>
            <div className="content">
              Designed by <b>Drgnz</b> from DNH
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
