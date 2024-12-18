'use client';

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import { Typography } from '@mui/material';

interface Props {
  data : {id : number , question : string , answer : string , open : boolean}
}

export default function AccordionUsage({data} : Props ) {

  const [open , setOpen] = React.useState(data.open)

  return (
    <Accordion 
      className=' border border-slate-200 border-l-2 border-l-violet-600 divide-y-0 before:hidden '
      sx={{borderRadius : '.6rem'}}
      defaultExpanded={data.open}  
    >
      <AccordionSummary
        expandIcon={open ? <RemoveCircleOutline className='text-violet-600' /> : <AddCircleOutline className={`text-slate-400`} />}
        aria-controls="panel1-content"
        onClick={e => setOpen(!open)}
        id={`panel${data.id}-header`}
        sx={{ color : `${ open ? 'rgb(94, 102, 112)' : 'rgb(30,41,59)'}` , backgroundColor : `${open ? "rgb(241, 241, 241)" : 'white'}` , border : 'none' , borderRadius : '.6rem'  }}
      >
        <span className={` font-[800]`} >{data.question}</span> 
      </AccordionSummary>
      <AccordionDetails className=' bg-slate-100' >
        <Typography className='text-slate-500  w-full h-full' >
          {data.answer}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
