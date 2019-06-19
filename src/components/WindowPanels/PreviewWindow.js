import React, { Component } from 'react';
import WindowPanel from './WindowPanel';

class PreviewWindow extends Component {
  render() {
    return (
      <div className="elem-div-window col-lg-6 col-md-6">
        <WindowPanel
          windowBodyContent={this.props.windowBodyContent}
          updateEditor={this.props.updateEditor}
          markdown={this.props.markdown}
          onChange={this.props.onChange}
          style={{ fontFamily: 'monospace' }}
          title="Preview"
        />
      </div>
    );
  }
}

export default PreviewWindow;
