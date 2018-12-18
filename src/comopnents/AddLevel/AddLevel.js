import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown/with-html';
import htmlParser from 'react-markdown/plugins/html-parser';
import { Link } from 'react-router-dom';

export class Login extends PureComponent {

  static propTypes = {
    username: PropTypes.string,
    fullname: PropTypes.string,
  }

  static defaultProps = {
    fullname: '',
    username: '',
  }

  componentDidMount() {
    document.title = 'Admin - Create new level';
    ReactDOM.render(
      <ReactMarkdown
        source={"# Nothing to preview"}
        escapeHtml={false}
        astPlugins={[this.parseHtml]}
      />,
      document.getElementById('new-level-preview')
    )

  }

  goBack = () => {
    const { history } = this.props;
    history.goBack();
  }

  parseHtml = htmlParser({
    isValidNode: node => node.type !== 'script',
    processingInstructions: [/* ... */]
  })

  render() {
    return (
      <div className="dual-side" id="card-wrapper">
        <div id="add-level-form">
          <div className="card-input-wrapper">
            <div className="card-input">
              <div className="input-label">Select Stage</div>
              <input className="input-form" type="text"/>
            </div>
            <div className="card-input">
              <div className="input-label">Flag</div>
              <input className="input-form" type="text"/>
            </div>
            <div className="card-input">
              <div className="input-label">Description</div>
              <input className="input-form" type="password"/>
            </div>
            <div className="card-input">
              <div className="input-label">Hint</div>
              <input className="input-form" type="textbox"/>
            </div>
            <div className="card-input">
              <div className="input-label">Tag</div>
              <input className="input-form" type="password"/>
            </div>
          </div>
          <div className="card-btn">
            <a href="/">Save</a>
          </div>
          <div className="card-footer">
            <div>
              <Link to="/" className="signup-link">Back To Home</Link>
            </div>
            <div>
              <div onClick={this.goBack} className="signup-link">Go Back</div>
            </div>
          </div>
        </div>
        <div id="new-level-preview">
        </div>
      </div>
    )
  }
}

export default Login
