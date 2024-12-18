'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { UnfoldMore } from '@mui/icons-material';

interface Props {
    data : {label : string | number , value : string | number}[]
}

export default function BasicSelect({data} : Props) {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Staff</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Staff"
          onChange={handleChange}
          className='w-32 md:w-64 bg-slate-100 outline-blue-700  hover:border-blue-200 '
          IconComponent={(props) => <UnfoldMore {...props} className={`cursor-pointer text-slate-500 text-sm font-[100]`} />}
        >
            {
                data.map((item , index) => {
                    return <MenuItem key={index} value={item.value}>{item.label}</MenuItem>
                })
            }
        </Select>
      </FormControl>
    </Box>
  );
}
