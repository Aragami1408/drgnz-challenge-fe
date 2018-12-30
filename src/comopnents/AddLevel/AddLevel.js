import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import ReactMarkdown from 'react-markdown/with-html';
import htmlParser from 'react-markdown/plugins/html-parser';
import CodeBlock from './CodeBlock';
import Toast from '../../common/toast';


const difficultyOptions = [
  { value: 0, label: 'Noob' },
  { value: 1, label: 'Easy' },
  { value: 2, label: 'Normal' },
  { value: 3, label: 'Hard' },
  { value: 4, label: 'Challenge' },
  { value: 5, label: 'Nightmare' },
];

export class AddLevel extends PureComponent {
  static propTypes = {
    history: PropTypes.objectOf(PropTypes.any).isRequired,
    submitLevel: PropTypes.func.isRequired,
    stageList: PropTypes.arrayOf(PropTypes.any).isRequired,
    isLoading: PropTypes.bool,
    errorMsg: PropTypes.string,
  }

  static defaultProps = {
    isLoading: false,
    errorMsg: '',
  }

  state = {
    stage: '',
    flag: '',
    tags: '',
    description: '',
    hint: '',
    name: '',
    focus: 'description',
    difficulty: { value: 0, label: 'Noob' },
    error: {},
  }

  parseHtml = htmlParser({
    isValidNode: node => node.type !== 'script',
    processingInstructions: [/* ... */],
  })

  componentDidMount() {
    document.title = 'Admin - Create new level';
  }

  componentDidUpdate = (prevState) => {
    const {
      description, hint, focus,
      [focus]: kFocus,
    } = this.state;

    if (
      prevState.description !== description
      || prevState.hint !== hint
    ) {
      ReactDOM.render(
        <ReactMarkdown
          source={kFocus}
          escapeHtml={false}
          astPlugins={[this.parseHtml]}
          renderers={{ code: CodeBlock }}
        />,
        document.getElementById('new-level-preview'),
      );
    }
  }

  goBack = () => {
    const { history } = this.props;
    history.goBack();
  }

  handleFocus = (fieldName) => {
    this.setState({
      focus: fieldName,
    });
  }

  handleOnChange = fieldName => (e) => {
    this.setState({
      [fieldName]: e.target.value,
    });
  }

  handleSectionChange = fieldName => (selectedOption) => {
    this.setState({ [fieldName]: selectedOption });
  }

  validFlag = (flag) => {
    if (!flag || !flag.trim()) return 'Flag cannot be empty!';
    if (!/(D|d)rgnz{.+}/.test(flag)) return 'Flag format invalid! Must be Drgnz{flag}';
    return null;
  }

  validStage = (stage) => {
    if (!stage) return 'Please select a stage!';
    return null;
  }

  validTag = (tags) => {
    if (!tags || !tags.trim()) return 'Tag cannot be empty!';
    return null;
  }

  validDesc = (description) => {
    if (!description || !description.trim()) return 'Desciption cannot be empty!';
    return null;
  }

  validName = (name) => {
    if (!name || !name.trim()) return 'Name cannot be empty!';
    return null;
  }

  handleSubmission = () => {
    const {
      stage, flag, name,
      tags, description, hint, difficulty,
    } = this.state;
    const { submitLevel, isLoading } = this.props;
    if (isLoading) {
      Toast.warning('There are another requests waiting to process. Please wait!');
      return;
    }
    let hasError = false;
    const error = {};

    this.setState({ error: {} });

    error.stage = this.validStage(stage);
    hasError = hasError || !!error.stage;
    error.flag = this.validFlag(flag);
    hasError = hasError || !!error.flag;
    error.tags = this.validTag(tags);
    hasError = hasError || !!error.tags;
    error.description = this.validDesc(description);
    hasError = hasError || !!error.description;
    error.name = this.validName(name);
    hasError = hasError || !!error.name;
    if (hasError) {
      this.setState({ error });
      return;
    }

    submitLevel({
      stageId: stage.value,
      flag,
      tags: tags.split(',').map(tag => tag.trim()),
      description,
      hint,
      name,
      difficulty: difficulty.value,
      solved: 0,
    });
  }

  render() {
    const { stageList = [], isLoading } = this.props;
    const stageOptions = stageList.map(stage => ({
      value: stage._id, // eslint-disable-line
      label: `The ${stage.name}`,
    }));
    const {
      stage, flag, name,
      tags, description, hint, error, difficulty,
    } = this.state;

    return (
      <div className="dual-side" id="card-wrapper">
        <div id="add-level-form">
          <div className="card-input-wrapper">
            <div className="card-group">
              <div className="card-input">
                <div className="input-label">Select Stage</div>
                <Select
                  value={stage}
                  theme={theme => ({
                    ...theme,
                    colors: {
                      ...theme.colors,
                      primary: '#23D5AB',
                    },
                  })}
                  options={stageOptions}
                  onChange={this.handleSectionChange('stage')}
                />
              </div>
              <div className="card-input">
                <div className="input-label">Difficulty</div>
                <Select
                  value={difficulty}
                  theme={theme => ({
                    ...theme,
                    colors: {
                      ...theme.colors,
                      primary: '#23D5AB',
                    },
                  })}
                  options={difficultyOptions}
                  onChange={this.handleSectionChange('difficulty')}
                />
              </div>
            </div>
            {error.stage && <div className="input-error">{error.stage}</div>}
            <div className="card-input">
              <div className="input-label">Name</div>
              <input
                className="input-form"
                type="text"
                value={name}
                onChange={this.handleOnChange('name')}
              />
              {error.name && <div className="input-error">{error.name}</div>}
            </div>
            <div className="card-input">
              <div className="input-label">Flag</div>
              <input
                className="input-form"
                type="text"
                value={flag}
                onChange={this.handleOnChange('flag')}
              />
              {error.flag && <div className="input-error">{error.flag}</div>}
            </div>
            <div className="card-input">
              <div className="input-label">Tag (seperated by comma)</div>
              <input
                className="input-form"
                value={tags}
                onChange={this.handleOnChange('tags')}
              />
              {error.tags && <div className="input-error">{error.tags}</div>}
            </div>
            <div className="card-input">
              <div className="input-label">Description</div>
              <textarea
                value={description}
                className="input-form"
                onChange={this.handleOnChange('description')}
                onFocus={() => this.handleFocus('description')}
              />
              {error.description && <div className="input-error">{error.description}</div>}
            </div>
            <div className="card-input">
              <div className="input-label">Hint</div>
              <textarea
                value={hint}
                className="input-form"
                onChange={this.handleOnChange('hint')}
                onFocus={() => this.handleFocus('hint')}
              />
            </div>
          </div>
          <div className="card-btn">
            <button type="submit" onClick={this.handleSubmission}>
              {isLoading && (<div className="loader" />)}
              {isLoading ? 'Please wait' : 'Submit'}
            </button>
          </div>
        </div>
        <div id="new-level-preview" />
      </div>
    );
  }
}

export default AddLevel;
