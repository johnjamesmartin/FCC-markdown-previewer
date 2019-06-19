import React, { Component } from 'react';
import WindowPanel from './WindowPanel';
class EditorWindow extends React.Component {
  render() {
    return (
      <div className="elem-div-window col-lg-6 col-md-6">
        <WindowPanel
          markdown={this.props.markdown}
          onChange={this.props.onChange}
          style={{ fontFamily: 'monospace' }}
          title="Editor"
        />
      </div>
    );
  }
}

export default EditorWindow;
