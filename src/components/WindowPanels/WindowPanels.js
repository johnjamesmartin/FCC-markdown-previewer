import React, { Component } from 'react';
import EditorWindow from './EditorWindow';
import PreviewerWindow from './PreviewWindow';

class WindowPanels extends React.Component {
  render() {
    return (
      <div className="col-lg-8 offset-lg-2">
        <EditorWindow
          updateEditor={this.props.updateEditor}
          windowBodyContent={this.props.windowBodyContent}
          markdown={this.props.markdown}
          onChange={this.props.onChange}
        />
        <PreviewerWindow
          updateEditor={this.props.updateEditor}
          markdown={this.props.markdown}
          windowBodyContent={this.props.windowBodyContent}
        />
      </div>
    );
  }
}

export default WindowPanels;
