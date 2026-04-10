import React from 'react';
import CV from '../../assets/Kusaram_Pawara_CV.pdf';
import { ArrowRight, Download } from 'lucide-react';

const CTA = () => {
  return (
    <div className='flex flex-wrap items-center justify-center gap-4'>
        <a href={CV} download={CV} className='flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-800/50 backdrop-blur-md text-zinc-300 border border-zinc-700/50 hover:bg-zinc-800 hover:text-white hover:border-zinc-500 transition-all duration-300 shadow-xl'>
            <Download className="w-4 h-4"/> Download CV
        </a>
        <a href="#contact" className='flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 text-black font-semibold hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-300'>
            Lets Talk <ArrowRight className="w-4 h-4"/>
        </a>
    </div>
  )
}

export default CTA;