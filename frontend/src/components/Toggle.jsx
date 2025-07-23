import React from 'react'

function Toggle({publish ,setPublish}) {
  return (
        <div className="flex flex-wrap items-center justify-center gap-12">
            <label className="relative inline-flex items-center cursor-pointer text-gray-900 gap-3">
                <input type="checkbox" checked={publish} onChange={(e)=>setPublish(e.target.checked)} className="sr-only peer" />
                <div className="w-10 h-5 bg-slate-300 rounded-full peer peer-checked:bg-red-500 transition-colors duration-200"></div>
                <span className="dot absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
                <p className='text-sm text-gray-600'>Make this image public</p>
            </label>
            
            
        </div>
    );
}

export default Toggle
