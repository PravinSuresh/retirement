import {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectField = ({limit, getValue, label}) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    getValue(event.target.value);
  };

  let iterator = [];
  for(let i=0; i<limit; i++){
    iterator.push(i);
  };

  return (
    <FormControl sx={{ minWidth: 200 }}>
    <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          onChange={handleChange}
        >
        {iterator.map(item=><MenuItem key={item} value={item}>{item}</MenuItem>)}
        </Select>
    </FormControl>
  );
}

export default SelectField;