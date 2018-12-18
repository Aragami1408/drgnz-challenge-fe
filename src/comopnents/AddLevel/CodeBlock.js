import React from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from 'react-syntax-highlighter/dist/styles/hljs';

class CodeBlock extends React.Component {

  componentDidCatch(error, info) {
    console.error(error, info)
  }

  shouldComponentUpdate = (nextProps) => {
    const { value, language } = this.props;
    if (!language) return false;
    if (!value) return false;
    if (
      nextProps.value !== value ||
      nextProps.language !== language
    ) return true;
    return false;
  }


  render() {
    const { value = '', language = '' } = this.props;
    return (
      <SyntaxHighlighter language={language || 'javascript'} style={docco}>
        {value}
      </SyntaxHighlighter>
    )
  }
}

CodeBlock.defaultProps = {
  language: 'javascript',
  value: '',
}

CodeBlock.propTypes = {
  value: PropTypes.string,
  language: PropTypes.string
}

export default CodeBlock;