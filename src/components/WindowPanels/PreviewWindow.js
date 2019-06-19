import React, { Component } from 'react';
import WindowPanel from './WindowPanel';

class PreviewWindow extends Component {
  render() {
    return (
      <div className="elem-div-window col-lg-6 col-md-6">
        <WindowPanel
          markdown={this.props.markdown}
          onChange={this.props.onChange}
          style={{ fontFamily: 'monospace' }}
          title="Preview"
          updateEditor={this.props.updateEditor}
          windowBodyContent={this.props.windowBodyContent}
        />
      </div>
    );
  }
}

export default PreviewWindow;
