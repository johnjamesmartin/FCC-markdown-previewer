import React, { Component } from 'react';
import Preview from '../common/common';

class WindowPanel extends Component {
  render() {
    let windowBodyContent;
    if (this.props.title === 'Editor') {
      windowBodyContent = (
        <textarea
          className="elem-window-textarea"
          id="editor"
          onChange={this.props.onChange}
          style={this.props.style}
          value={this.props.markdown}
        />
      );
    } else {
      windowBodyContent = Preview({ markdown: this.props.markdown });
    }
    return (
      <div className="elem-window-panel">
        <div className="elem-window-taskbar">{this.props.title}</div>
        <div className="elem-window-body">{windowBodyContent}</div>
      </div>
    );
  }
}

export default WindowPanel;
