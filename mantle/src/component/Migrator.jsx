import React, { useState } from 'react'
import From from '../component/From'
import To from '../component/To'
import { ArrowForwardSVG } from './SVGComponents'

export default function Migrator() {
    const [value, setValue] = useState(0)

    return (
        <div className='mt-12 md:px-8 w-full'>
            {/* Migrator and request */}
            <h1 className="text-white text-center text-[42px]">Migrator v2</h1>
            <p className="text-[14px] text-[rgb(196,196,196)] text-center mt-6 mb-2">
                Request $BIT migration to $MNT, see <a href="https://www.mantle.xyz/blog/announcements/migrator-v2-your-bit-to-mnt-guide" target="__blank" rel="noreferrer" className="underline">blog post</a> for how it works
            </p>

            {/* Rounded Box */}
            <div className='relative flex flex-col md:gap-5 mx-auto max-w-[484px] w-full gap-4 bg-[#000000] overflow-y-auto overflow-x-clip md:overflow-hidden border border-[#1C1E20] rounded-t-[30px] rounded-b-[20px] min-w-[320px]'>

                {/* Top i.e The From - To */}
                <div className='flex items-center justify-between gap-5 py-4 px-5'>
                    {/* From BIT */}
                    <From />
                    <ArrowForwardSVG />
                    {/* To MNT */}
                    <To />
                </div>

                {/* BIT */}
                <div className='pt-6 bg-[#0D0D0D] px-5'>
                    <div className="flex items-center justify-between">
                        <div className='flex items-center'>
                            <input
                                type="number"
                                className='flex text-4xl shrink border-0 focus:outline-none rounded-lg bg-transparent py-1.5 px-0 focus:ring-0 appearance-non text-left max-w-[200px] w-[50px]'
                                placeholder='0'
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                name='bit'
                            />
                            <label htmlFor="bit" className='text-[#C4C4C4] font-bold text-4xl'>BIT</label>
                        </div>
                        <button
                            className="h-fit rounded-lg font-medium transition-all disabled:cursor-not-allowed disabled:opacity-50 w-fit px-4 py-2 text-sm border disabled:bg-transparent"
                            type="button"
                        >
                            MAX
                        </button>
                    </div>
                    <div className='flex justify-end items-center pb-4 text-sm text-[rgb(196,196,196)] space-x-2'>
                        <p>Available:</p>
                        <p>0.0 BIT</p>
                    </div>
                </div>

                {/* MNT */}
                <div className='px-5 pb-2'>
                    <div className='flex gap-1 items-center'>
                        <span
                            className='flex text-4xl shrink border-0 focus:outline-none rounded-lg bg-transparent py-1.5 px-0 focus:ring-0 appearance-non text-left max-w-[200px] min-w-[50px]'
                        >
                            {value}
                        </span>
                        <label htmlFor="mnt" className='text-[#C4C4C4] font-bold text-4xl'>MNT</label>
                    </div>
                    <div className='flex justify-end items-center pb4 text-sm text-[rgb(196,196,196)] space-x-2'>
                        <p>Available:</p>
                        <p>0.0 BIT</p>
                    </div>
                </div>

                {/* Connect Wallet Button and Transaction Details */}
                <div className='px-5 pb-4 mt-4'>
                    {/* Connect Wallet Button */}
                    <button
                        className="h-14 rounded-lg font-medium transition-all disabled:cursor-not-allowed disabled:opacity-50 w-full px-5 py-3 text-base text-black bg-[rgb(101,179,174)] hover:bg-[rgb(77,157,152)]"
                        type="button"
                    >
                        Please connect your wallet
                    </button>
                    {/* Transaction Details */}
                    <div className='pt-6 space-y-3'>
                        {/* Pending Amount */}
                        <div className='flex justify-between items-center text-[rgb(196,196,196)]'>
                            <p>Pending amount requested</p>
                            <p className="text-white">0 BIT</p>
                        </div>
                        {/* Migration Rate */}
                        <div className='flex justify-between items-center text-[rgb(196,196,196)]'>
                            <p>Migration rate</p>
                            <p className="text-white">1 BIT = 1 MNT</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
