'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value: number) {
  return `${value}°C`;
}

interface Props {
    defaultValue : number;
    label : string;
    labelFormat : string
}

export default function ColorSlider({defaultValue , label , labelFormat} : Props) {
  return (
    <Box sx={{ width: '100%' }}>
      <Slider
        aria-label={label}
        defaultValue={40}
        valueLabelFormat={(x) => {if(labelFormat === '$') {return  `${labelFormat} ${x}`} else{ return `${x} ${labelFormat}`}}}
        getAriaValueText={valuetext}
        color="secondary"
        valueLabelDisplay='on'
      />
    </Box>
  );
}
