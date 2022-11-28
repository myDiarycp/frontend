// .. means it's outside the routes folder
import "../App.css";

import React, { Component } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';
// import { render } from "react-dom";
// import { stateToHTML } from "draft-js-export-html";

// text editor framework
class TextEditor extends Component {
  // start with empty text box
  state = {
    editorState: EditorState.createEmpty(),
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    return (
      <div>
        <Editor
          editorStyle={{ border: "1px solid" }}
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={this.onEditorStateChange}
        />
        {/* <textarea
          disabled
          // value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        /> */}
        {/* <div> 
          <button onClick={}>Save Entry</button>
        </div> */}
      </div>
    );
  }
}

export default TextEditor;
