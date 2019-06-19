import React from 'react';
import { Component } from 'react';
import './App.scss';
import AppTitle from '../AppTitle/AppTitle';
import WindowPanels from '../WindowPanels/WindowPanels';
import Footer from '../Footer/Footer';
import BootstrapCSSOnly from 'bootstrap-css-only';
import marked from 'marked';

/* Variables:
 **************************************/
const renderer = new marked.Renderer();
const codeblock = '```npm install -g marked```';
const editorSample = `# Header
## Sub header

[Hyperlink](https://github.com/markedjs/marked)

<dl>
  <dt>Definition list</dt>
  <dd>A definition or description here</dd>
  <dt>Formatting</dt>
  <dd>*Italics*, **bold**, and <em>emphasis!</em></dd>
</dl>

<pre><code>Code here, but list below:</code></pre>

1. First ordered list item
2. Another item
<hr/>
> Blockquote here, codeblock below:

${codeblock}

\`\`\`
// Function:
function describeMarkdown(adjective) {
  return "markdown is " + adjective + "!";
}
\`\`\`

![alt text](https://i.imgur.com/QzRb2ow.png "Markdown logo")`;

marked.setOptions({ breaks: true });

const Preview = props => {
  return (
    <div
      className="elem-preview-markup"
      dangerouslySetInnerHTML={{
        __html: marked(props.markdown, { renderer: renderer })
      }}
      id="preview"
    />
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { markdown: editorSample, windowBodyContent: null };
    this.handleChange = this.handleChange.bind(this);
    this.updateEditor = this.updateEditor.bind(this);
  }
  componentDidMount() {
    console.log(this.state.markdown);
  }
  updateEditor(title) {
    let windowBodyContent;
    if (title === 'Editor') {
      this.setState({
        windowBodyContent: (
          <textarea
            className="elem-window-textarea"
            id="editor"
            onChange={this.handleChange}
            value={this.state.markdown}
          />
        )
      });
    } else {
      this.setState({
        windowBodyContent: Preview({ markdown: this.state.markdown })
      });
    }
  }
  handleChange(e) {
    this.setState({ markdown: e.target.value });
  }
  render() {
    return (
      <React.Fragment>
        <AppTitle />
        <WindowPanels
          updateEditor={this.updateEditor}
          windowBodyContent={this.state.windowBodyContent}
          markdown={this.state.markdown}
          onChange={this.handleChange}
        />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
