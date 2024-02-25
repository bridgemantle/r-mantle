import React from 'react'
import { CloseSVG, WarningSVG } from './SVGComponents'

export default function GasFee({ onClose }) {
    return (
        <div className="bg-white/[.08] rounded-[14px] p-4 mx-auto flex items-start content-start gap-x-2 w-full max-w-lg mt-4">
            <WarningSVG />
            <div className='flex-grow font-normal text-[16px] text-[rgb(196,196,196)]'>
                <p className="uppercase">gas fee required</p>
                <p>• ETH (L1) to deposit from Ethereum Mainnet</p>
                <p >• MNT (L2) to transact on Mantle Mainnet</p>
            </div>
            <button
                onClick={onClose}
            >
                <CloseSVG />
            </button>
        </div>
    )
}
