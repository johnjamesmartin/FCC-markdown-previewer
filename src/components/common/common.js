import React, { Component } from 'react';
import marked from 'marked';

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

export default Preview;
