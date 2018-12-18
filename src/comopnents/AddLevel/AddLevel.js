import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown/with-html';
import htmlParser from 'react-markdown/plugins/html-parser';
import CodeBlock from './CodeBlock';

export class AddLevel extends PureComponent {
  state = {
    stage: '',
    flag: '',
    tag: '',
    desc: '',
    hint: '',
    focus: 'desc',
  }

  componentDidMount() {
    document.title = 'Admin - Create new level';
  }

  componentDidUpdate = (prevState) => {
    const { desc, hint, focus } = this.state;

    if (
      prevState.desc !== desc ||
      prevState.hint !== hint
    ) {
      ReactDOM.render(
        <ReactMarkdown
          source={this.state[focus]}
          escapeHtml={false}
          astPlugins={[this.parseHtml]}
          renderers={{code: CodeBlock}}
        />,
        document.getElementById('new-level-preview')
      )
    }
  }

  handleFocus = (fieldName) => {
    this.setState({
      focus: fieldName,
    })
  }

  handleOnChange = (fieldName) => (e) => {
    this.setState({
      [fieldName]: e.target.value,
    })
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
              <div className="input-label">Tag</div>
              <input className="input-form"/>
            </div>
            <div className="card-input">
              <div className="input-label">Description</div>
              <textarea
                className="input-form"
                onChange={this.handleOnChange('desc')}
                onFocus={() => this.handleFocus('desc')}
              />
            </div>
            <div className="card-input">
              <div className="input-label">Hint</div>
              <textarea
                className="input-form"
                onChange={this.handleOnChange('hint')}
                onFocus={() => this.handleFocus('hint')}
              />
            </div>
          </div>
          <div className="card-btn">
            <a href="/">Submit</a>
          </div>
        </div>
        <div id="new-level-preview">
        </div>
      </div>
    )
  }
}

export default AddLevel
