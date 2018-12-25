import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown/with-html';
import htmlParser from 'react-markdown/plugins/html-parser';
import Header from '../../containers/Header';
import CodeBlock from '../AddLevel/CodeBlock';
import TagItem from '../TagItem';

const levelName = ['noob', 'easy', 'normal', 'hard', 'challenge'];

export class Level extends Component {
  static propTypes = {
    match: PropTypes.objectOf(PropTypes.any).isRequired,
    level: PropTypes.objectOf(PropTypes.any),
    stageList: PropTypes.arrayOf(PropTypes.any).isRequired,
    downloadLevelDetail: PropTypes.func.isRequired,
  }

  static defaultProps = {
    level: {},
  }

  state = {
    stageName: '',
    tab: 'description',
  }

  parseHtml = htmlParser({
    isValidNode: node => node.type !== 'script',
    processingInstructions: [/* ... */],
  })

  componentDidMount() {
    const {
      match,
      downloadLevelDetail,
    } = this.props;
    const { params } = match;
    downloadLevelDetail(params.id);
  }

  componentDidUpdate = (prevProps, prevState) => {
    const { level = {}, stageList } = this.props;
    const { level: prevLevel } = prevProps;
    const { stageName, tab } = this.state;
    const { tab: prevTab } = prevState;
    let shouldRenderMarkdown = tab !== prevTab;
    if (tab === 'description') {
      shouldRenderMarkdown = shouldRenderMarkdown || (level.description !== prevLevel.description);
    }
    if (tab === 'hint') {
      shouldRenderMarkdown = shouldRenderMarkdown || (level.hint !== prevLevel.hint);
    }

    if (shouldRenderMarkdown) {
      ReactDOM.render(
        <ReactMarkdown
          source={level[tab] || `There is no ${tab} for this problem.`}
          escapeHtml={false}
          astPlugins={[this.parseHtml]}
          renderers={{ code: CodeBlock }}
        />,
        document.getElementById('level-section'),
      );
    }

    document.title = (level.name || 'Drgnz Challenge');
    if (level.stageId) {
      const stage = stageList.find(sta => sta._id === level.stageId) // eslint-disable-line
      if (stage.name !== stageName || !stageName) {
        this.setState({
          stageName: stage.name,
        });
      }
    }
  }

  handleTabChange = tab => this.setState({ tab });

  render() {
    const { level = {} } = this.props;
    const { stageName, tab } = this.state;
    const { difficulty = 0, tags = [] } = level;

    return (
      <div id="level" className={`level-${stageName}`}>
        <Header />
        <div className="level-wrapper">
          <div className="level">
            <div className="level-title">
              {level.name || 'Sample'}
            </div>
            <div className="level-tags">
              <TagItem>
                {levelName[difficulty || 0]}
              </TagItem>
              {
                tags.map(tag => (
                  <TagItem key={tag}>
                    {tag}
                  </TagItem>
                ))
              }
            </div>
            <div className="level-section-selector">
              <div
                className={`level-section-selector-item ${(tab === 'description') && 'selected'}`}
                onClick={() => this.handleTabChange('description')}
              >
                Description
              </div>
              <div
                className={`level-section-selector-item ${(tab === 'hint') && 'selected'}`}
                onClick={() => this.handleTabChange('hint')}
              >
                Hint
              </div>
            </div>
            <div id="level-section" />
          </div>
        </div>
      </div>
    );
  }
}

export default Level;
