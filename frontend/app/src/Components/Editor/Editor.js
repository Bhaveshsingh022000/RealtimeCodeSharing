import React from 'react';
import { ControlledEditor } from '@monaco-editor/react';

const editor = (props) => {
    const options = {
        selectOnLineNumbers: true,
  
      };
    return (
        <React.Fragment>
            <ControlledEditor
                width="100%"
                height="100%"
                language="javascript"
                theme="vs-dark"
                value={props.code}
                options={options}
                onChange={props.change}
                editorDidMount={props.editorMount}
            />
        </React.Fragment> 
    );
};

export default editor