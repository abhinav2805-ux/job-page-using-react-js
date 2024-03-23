import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Nav() {
    return (
        <div className="flex md:w-[900px] h-[60px] rounded-md sm:w-[300px] items-centerz-20 translate-y-[-1.2rem] md:translate-x-[40%] sm:translate-x-8">

            <div className="md:h-full md:w-[350px] bg-white flex items-center sm:w-full sm:h-full ">
                <SearchIcon />
                <input
                    type='text'
                    placeholder='Filter by title, companies, expertise....'
                    style={{ height: 60, width: 350 }}
                />
            </div>

            <div className='hidden md:block h-full pt-4 bg-white border-l-2 border-slate-500 text-blue-700'>
                <FmdGoodIcon />
            </div>

            <div className="md:h-full md:w-[250px] bg-white hidden md:block items-center  ">
                <input
                    type='text'
                    placeholder='Filter by location...'
                    style={{ height: 60, width: 250 }}
                />
            </div>

            <div className="hidden md:block h-full w-[40px] bg-white pt-2 items-center gap-1 border-l-2 border-slate-500">
                <Checkbox {...label} />
            </div>

            <div className='hidden md:block bg-white h-full pt-4'> <h2>Full time only</h2></div>
            
            <div className='hidden md:block bg-white h-full w-[100px] pt-3 mr-1'>
                <Button variant="contained">Search</Button>           
            </div>    
            
        </div>   
    )
}

export default Nav;
