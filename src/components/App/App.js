import React from 'react';
import { Component } from 'react';
import './App.scss';
import AppTitle from '../AppTitle/AppTitle';
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { markdown: editorSample };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ markdown: e.target.value });
  }
  render() {
    return (
      <React.Fragment>
        <AppTitle />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
