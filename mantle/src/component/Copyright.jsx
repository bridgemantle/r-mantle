import React from 'react'
import { MantleMediumSVG } from './SVGComponents'

export default function Copyright() {
    return (
        <div className="flex justify-center items-center pt-16 pb-8 mt-auto gap-4">
            <MantleMediumSVG />
            <p>© Mantle 2024</p>
        </div>
    )
}
