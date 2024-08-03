import React from 'react'

//assets
import UploadReport from "../../assets/svgs/UploadReports.svg";

function UploadReports() {
  return (
    <div className='border-b-4 border-[#d9d9d9] pb-5'>
        <div className='flex items-start gap-4 px-3 py-4'>
            <img src={UploadReport} alt="" className='pt-1.5' />
            <div className=''>
                <h1 className='font-bold text-2xl pb-2 text-[#292929]'>Need a Second Opinion?</h1>
                <p className='leading-4 text-sm text-[#525252]'>Upload your prescription/reports and get updated on your health</p>
            </div>
        </div>
        <div className="bg-[#0086ff] p-3 mx-6 text-center rounded-3xl text-white cursor-pointer hover:bg-[#0073ff]">Upload your Reports</div>
    </div>
  )
}

export default UploadReports