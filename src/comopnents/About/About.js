import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

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
              Drgnz Challenge 2018 is a CTF-like contest for DNH community.
            </div>
            <div className="header">
              Who is this contest for?
            </div>
            <div className="content">
              This contest is designed for a newcomer in Software Engineering, Software Security or Computer Science related majors. Helping them to review and learn new things from the contest.
            </div>
            <div className="header">
              Can I join this contest?
            </div>
            <div className="content">
              Yes! Everybody can join this contest. Not only DNH members.
            </div>
            <div className="header">
              What is CTF likes contest?
            </div>
            <div className="content">
              <div className="sub-content">
                CTF stands for <b>Capture The Flags</b>. In this contest, you will be given a list of problems. You have to solve each problem for the flag that is hidden inside the problem. Submit the flag and done.
              </div>
              <div className="sub-content">
               <b>The complete flag</b> is usually in <b>{`Drgnz{flag}`}</b> format. Some problem only gives you a part of flag .i.e: hello_world. With that problem, you have to craft the complete flag yourself. By putting the incomplete flag to the flag header <b>{`Drgnz{your_incomplete_flag}`}</b> you will get the complete one. .i.e <b>{`Drgnz{hello_world}`}</b>
              </div>
            </div>
            <div className="header">
              What is a stage?
            </div>
            <div className="content">
              <div className="sub-content">
                A stage is a thing that contains many challenges or levels. Each stage has its own difficulties. A stage can be <b>locked</b> or <b>hidden</b>. You can unlock a stage by archive a given condition. A different stage will have a different condition. Some stages will requires special <b>hidden conditions</b> to unlock.
              </div>
              <div className="sub-content">
                A hidden stage is a special stage that is not shown on the stage selection screen. You have to find it yourself.
              </div>
            </div>
            <div className="header">
              What is a level or a challenge?
            </div>
            <div className="content">
              A level or a challenge is a problem you have to solve. Each level/challenge contains only one problem. When you solve a problem, you will get a flag. Submit the flag to the server for the next problem.
            </div>
            <div className="header">
              Can I discuss about the contest on social media or forum?
            </div>
            <div className="content">
              You can discuss about the problem, the contest anywhere and anytime. And we would love to if you share the contest to everyone you know. However, <b>we don't want you to share the flag that you've solved.</b> From this contest, we want to teach people about Computer Science, Software Engineering concept. Therefore, by sharing the flag is taking a change for a newcomer to learn new thing or review their knowledge. So, <b>please give newcomer a guide they need, not the flag they want!</b>
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
