'use client';

import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { HelpCenter } from '@mui/icons-material';

export default function BasicTooltip({title} : {title : string}) {
  return (
    <Tooltip title='title'>
      <button>
        <HelpCenter sx={{color : 'rgb(124,58,237)'}} />
      </button>
    </Tooltip>
  );
}