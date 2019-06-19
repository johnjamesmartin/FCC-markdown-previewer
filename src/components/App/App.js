import React from 'react';
import { Component } from 'react';
import marked from 'marked';
import BootstrapCSSOnly from 'bootstrap-css-only';
import defaultEditorContent from '../../data';
import './App.scss';
import AppTitle from '../AppTitle/AppTitle';
import WindowPanels from '../WindowPanels/WindowPanels';
import Footer from '../Footer/Footer';

marked.setOptions({ breaks: true });

const Preview = props => {
  return (
    <div
      className="elem-preview-markup"
      dangerouslySetInnerHTML={{
        __html: marked(props.markdown, { renderer: new marked.Renderer() })
      }}
      id="preview"
    />
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { markdown: defaultEditorContent, windowBodyContent: null };
    this.handleChange = this.handleChange.bind(this);
    this.updateEditor = this.updateEditor.bind(this);
  }
  updateEditor(title) {
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
          markdown={this.state.markdown}
          onChange={this.handleChange}
          updateEditor={this.updateEditor}
          windowBodyContent={this.state.windowBodyContent}
        />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
