import * as React from 'react';
import TextField from '@mui/material/TextField';

const Textbox = ({text, setText, disabled, error=false, label, helperText=''}) => {



  return (
      <TextField
        id="outlined-basic"
        label={label}
        variant="outlined"
        error={error}
        value={text}
        onChange={(e)=>{setText(e.target.value)}}
        disabled={disabled}
        helperText={helperText}
        />
  );
}

export default Textbox;