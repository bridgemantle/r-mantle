import React, { useState } from 'react'
import { ArrowDownSVG, EthereumSVG, LineBreakSVG, SmallMantleSVG, WarningSVG } from './SVGComponents'
import Checked from './Checked'
import NetworkModal from './NetworkModal'

export default function Mainnet() {
    const [active, setActive] = useState('deposit')
    const [network, setNetwork] = useState('MNT')
    const [viewNetworkModal, setViewNetworkModal] = useState(false)

    return (
        <div className='mt-12'>
            <h1 className='text-[48px] text-white text-center mb-8'>Mainnet Bridge</h1>

            <div className="bg-white/[.06] rounded-[14px] py-8 px-5 mx-auto max-w-lg w-full relative">
                {/* Deposit and Withdraw Button */}
                <div className='flex rounded-[10px] bg-white/[0.05] p-1 select-none space-x-2'>
                    {/* Deposit Button */}
                    <button
                        className={`w-full rounded-lg p-2.5 text-sm font-medium transition-all ring-white ring-opacity-0 ring-offset-0 ring-offset-white focus:outline-none focus:ring-2 ${active === 'deposit'
                            ? 'bg-white shadow text-black'
                            : 'text-white hover:bg-white/[0.12] hover:text-white'}`
                        }
                        onClick={() => setActive('deposit')}
                    >
                        Deposit
                    </button>
                    {/* Withdraw Button */}
                    <button
                        className={`w-full rounded-lg p-2.5 text-sm font-medium transition-all ring-white ring-opacity-0 ring-offset-0 ring-offset-white focus:outline-none focus:ring-2 ${active === 'withdraw'
                            ? 'bg-white shadow text-black'
                            : 'text-white hover:bg-white/[0.12] hover:text-white'}`
                        }
                        onClick={() => setActive('withdraw')}
                    >
                        Withdraw
                    </button>
                </div>
                {/* Withdraw Display Here */}
                {active === 'withdraw' && (
                    <div className="mt-4 grid grid-cols-2 gap-3">
                        <div className="flex flex-row-reverse md:flex-row justify-between w-full items-center cursor-pointer p-3 border-solid border rounded-lg border-[#A8D0CD] text-white bg-white/5 hover:border-[#A8D0CD]">
                            <div className='flex items-center gap-2.5'>
                                <p className='text-sm'>Mantle Bridge</p>
                                <span className='opacity-60 hover:opacity-100 cursor-pointer' title='Bridge any token from Mantle Network. This may take up to 7 days to process.'>
                                    <WarningSVG />
                                </span>
                            </div>
                            <Checked />
                        </div>
                    </div>
                )}
                {/* Continue From Ethereum to Your Balance */}
                <div className={`py-6 ${active === 'deposit' && 'mt-4'}`}>
                    <div className='flex pb-4 items-center gap-1'>
                        <p className='text-sm font-medium text-[rgb(196,196,196)]'>From:</p>
                        <div className='flex items-center space-x-2 gap'>
                            <EthereumSVG />
                            <p className='text-sm font-medium text-[rgb(196,196,196)]'>Ethereum Mainnet</p>
                        </div>
                    </div>
                    {/* Input */}
                    <div className='relative h-12'>
                        <input
                            className='bg-black w-full rounded-lg h-12 ps-3 pe-[185px] ring-1 ring-[rgb(196,196,196)]'
                            type="text"
                            placeholder='0'
                        />
                        <div className='bg-black flex gap-2.5 items-center absolute top-1/2 -translate-y-1/2 right-0 z-10 rounded-lg'>
                            {/* Max */}
                            <button
                                className='border h-fit rounded-lg text-md font-medium transition-all disabled:cursor-not-allowed disabled:opacity-50 w-fit px-4 py-2 text-sm text-brand hover:bg-brand-light disabled:hover:bg-transparent border-stroke-disabled'
                                disabled
                            >
                                Max
                            </button>
                            {/* Network */}
                            <button
                                className='flex gap-2.5 items-center h-12 cursor-default rounded-lg py-1.5 px-5 text-white shadow-sm focus:outline-none focus:ring-0 focus:ring-white/70 font-bold'
                                onClick={() => setViewNetworkModal(true)}
                            >
                                <span>{network}</span>
                                <ArrowDownSVG />
                            </button>
                        </div>
                    </div>
                    {/* Balance */}
                    <div className="flex py-4 items-center gap-1">
                        <p className="text-sm text-[rgb(196,196,196)]">Your balance:</p>
                        <div className="flex space-x-2 items-center">
                            <p className="text-sm text-[rgb(196,196,196)]">0.00</p>
                            <p>MNT</p>
                        </div>
                    </div>
                </div>

                {/* The Break Line */}
                <LineBreakSVG />

                {/* To Mainnent and input */}
                <div className='pt-8 pb-2'>
                    {/* To Mainnet */}
                    <div className="flex gap-1 pb-4 items-center">
                        <p className="text-[14px] leading-[20px] text-[rgb(196,196,196)]">To:</p>
                        <div className="flex space-x-2 items-center">
                            <SmallMantleSVG />
                            <p className="text-sm text-[rgb(196,196,196)]">Mantle Mainnet</p>
                        </div>
                    </div>
                    {/* You will receive input */}
                    <input
                        className="py-[11px] px-5 w-full border-1 rounded-lg border-[#41474D] focus-within:ring-1 focus:outline-none  bg-black focus:ring-0 focus:ring-white/70 appearance-none placeholder:text-[rgb(65,71,77)] placeholder:font-medium"
                        placeholder='You will receive: 0.00 MNT'
                        type="text"
                        readOnly
                    />
                </div>
                {/* Please Connect Button */}
                <div className="mt-4">
                    <button
                        className="h-14 rounded-lg text-md font-medium transition-all disabled:cursor-not-allowed disabled:opacity-50 w-full px-5 py-3 text-base text-black bg-[rgb(101,179,174)] hover:bg-[rgb(77,157,152)]"
                        type="button"
                    >
                        Please connect your wallet
                    </button>
                </div>
            </div>

            {/* Network Modal */}
            {viewNetworkModal && (
                <NetworkModal
                    network={network}
                    setNetwork={setNetwork}
                    onClose={() => setViewNetworkModal(false)}
                />
            )}
        </div>
    )
}
