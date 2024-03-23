import { useState } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

function Nav_bg() {
    const [bg, setBg] = useState(true);

    const toggle = () => {
        setBg(!bg);
        if(bg){
            document.getElementById('bob').style.backgroundColor = "#1f2324";
           

            
        }
        else{
            document.getElementById('bob').style.backgroundColor = "white";
          

        }
    }

    return (
        <div className={`w-full h-[100px] md:rounded-bl-[80px] ${bg ? 'bg-indigo-400' : 'bg-slate-900'} flex items-center justify-around z-10`} id="bob">
            <div className="text-white text-2xl font-bold">devjobs</div>
            <div className="text-white">
                <LightModeIcon />
                <Switch {...label} onChange={toggle} />
                <DarkModeIcon />
            </div>
        </div>
    );
}

export default Nav_bg;
