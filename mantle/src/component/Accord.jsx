import React from 'react'
import { Accordion } from 'flowbite-react'

export default function Accord() {
    return (
        <div className='mt-16 mx-auto md:max-w-lg w-full relative'>
            <Accordion className='divide-[rgb(196,196,196)]/20 border-[rgb(196,196,196)]/20' collapseAll>
                {/* 1 */}
                <Accordion.Panel>
                    <Accordion.Title className='bg-black text-white text-sm p-4 hover:bg-black hover:text-white focus:ring-0'>
                        How can I qualify for the MNT bonus?
                    </Accordion.Title>
                    <Accordion.Content className='bg-black text-[rgb(196,196,196)] px-4 pb-4 text-sm'>
                        <p className="">
                            Deposit any token from Ethereum Mainnet to Mantle Network to receive a dust bonus in MNT. Limited to once per wallet address
                        </p>
                        <a
                            href="https://www.mantle.xyz/blog/announcements/bridging-on-mantle-mainnet"
                            target='_blank'
                            className="mt-4 block underline"
                        >
                            Learn more
                        </a>
                    </Accordion.Content>
                </Accordion.Panel>
                {/* 2 */}
                <Accordion.Panel>
                    <Accordion.Title className='bg-black text-white text-sm p-4 hover:bg-black hover:text-white focus:ring-0'>
                        Is there an option for a test drive?
                    </Accordion.Title>
                    <Accordion.Content className='bg-black text-[rgb(196,196,196)] px-4 pb-4 text-sm'>
                        <p className="">
                            You can experience the deposit and withdraw flow by using our simulated testnet. It provides a safe environment to try out the bridge functionality without any real token transaction
                        </p>
                        <a
                            href="https://bridge.testnet.mantle.xyz/"
                            target='_blank'
                            className="mt-4 block underline"
                        >
                            Try on Testnet Brigde
                        </a>
                    </Accordion.Content>
                </Accordion.Panel>
                {/* 3 */}
                <Accordion.Panel>
                    <Accordion.Title className='bg-black text-white text-sm p-4 hover:bg-black hover:text-white focus:ring-0'>
                        What is L1/l2, and what are the required gas fees for deposit and withdrawal?
                    </Accordion.Title>
                    <Accordion.Content className='bg-black text-[rgb(196,196,196)] px-4 pb-4 text-sm'>
                        <p className="">
                            Mantle Network is a Layer-2 (L2) scalability solution built on Ethereum which is Layer-1 (L1).
                        </p>
                        <ul className='mt-4 list-disc ms-4'>
                            <li>
                                Deposit: You need ETH on L1 as gas fees to initiate the deposit. After depositing, you'll need MNT on L2 as gas fees to transact on Mantle Network.
                            </li>
                            <li>
                                Withdraw: You need MNT on L2 as gas fees to initiate the withdrawal and ETH on L1 as gas fees to claim the tokens on Ethereum Mainnet.
                            </li>
                        </ul>
                        <a
                            href="https://www.mantle.xyz/blog/announcements/bridging-on-mantle-mainnet"
                            target='_blank'
                            className="mt-4 block underline"
                        >
                            Learn more
                        </a>
                    </Accordion.Content>
                </Accordion.Panel>
                {/* 4 */}
                <Accordion.Panel>
                    <Accordion.Title className='bg-black text-white text-sm p-4 hover:bg-black hover:text-white focus:ring-0'>
                        How can I view my bridged token balances on Mantle Network in my wallet?
                    </Accordion.Title>
                    <Accordion.Content className='bg-black text-[rgb(196,196,196)] px-4 pb-4 text-sm'>
                        <p className="">
                            If the auto-detection of your bridged balances doesn't work, you can manually import the tokens to your wallet using the following contract addresses:
                        </p>
                        <ul className='mt-4 list-disc ms-4'>
                            <li>
                                ETH: 0xdEAddEaDdeadDEadDEADDEAddEADDEAddead1111
                            </li>
                            <li>
                                USDT: 0x201EBa5CC46D216Ce6DC03F6a759e8E766e956aE
                            </li>
                            <li>
                                USDC: 0x09Bc4E0D864854c6aFB6eB9A9cdF58aC190D0dF9
                            </li>
                        </ul>
                        <p className="mt-4">
                            For other token contract addresses, you can access the bridge token mapping by visiting the following <a
                                href="https://docs.mantle.xyz/network/for-devs/resources-and-tooling/mantle-bridge-api#the-token-list"
                                target='_blank'
                                className="underline"
                            >
                                link
                            </a>, which directs you to the Mantle documentation.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                {/* 5 */}
                <Accordion.Panel>
                    <Accordion.Title className='bg-black text-white text-sm p-4 hover:bg-black hover:text-white focus:ring-0'>
                        What is the typical duration for deposit and withdrawal?
                    </Accordion.Title>
                    <Accordion.Content className='bg-black text-[rgb(196,196,196)] px-4 pb-4 text-sm'>
                        <p className="">
                            Initiating a deposit typically completes in around ~12 minutes.
                        </p>
                        <p className="mt-4">
                            Conversely, withdrawals, due to the intricacies of Optimistic Rollups, have a challenge period to detect and address any discrepancies in the Mantle Mainnet transaction. This ensures the highest security, but means withdrawals to Ethereum Mainnet can take up to a week.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                {/* 6 */}
                <Accordion.Panel>
                    <Accordion.Title className='bg-black text-white text-sm p-4 hover:bg-black hover:text-white focus:ring-0'>
                        Is there an option for a test drive?
                    </Accordion.Title>
                    <Accordion.Content className='bg-black text-[rgb(196,196,196)] px-4 pb-4 text-sm'>
                        <p className="">
                            The cost to claim on the bridge is dependent on the gas costs, measured in Gwei, at the time of your transaction. The estimated formula to determine this cost is:
                        </p>
                        <p className="mt-4">
                            Cost (ETH)=600,000×Gwei
                        </p>
                        <p className="mt-4">
                            For example:
                        </p>
                        <ul className='list-disc ms-4'>
                            <li>
                                At 15 Gwei, the cost is approximately 0.009 ETH.
                            </li>
                            <li>
                                At 30 Gwei, the cost is approximately 0.018 ETH.
                            </li>
                        </ul>
                        <p className="mt-4">
                            To minimize your costs, you can opt to claim during a period when the Gwei is low. For current gas prices, you can check the <a
                                href="https://etherscan.io/gastracker"
                                target='_blank'
                                className="underline"
                            >
                                Etherscan Gas Tracker
                            </a>.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                {/* 7 */}
                <Accordion.Panel>
                    <Accordion.Title className='bg-black text-white text-sm p-4 hover:bg-black hover:text-white focus:ring-0'>
                        Where can I find the bridge token mapping?
                    </Accordion.Title>
                    <Accordion.Content className='bg-black text-[rgb(196,196,196)] px-4 pb-4 text-sm'>
                        <p className="">
                            You can view the bridge token mapping by visiting <a
                                href="https://docs.mantle.xyz/network/for-devs/resources-and-tooling/mantle-bridge-api#the-token-list"
                                target='_blank'
                                className="underline"
                            >
                                this link
                            </a> which directs to the Mantle documentation. It provides comprehensive details on the token list and other related information.
                        </p>
                        <p className="mt-4">
                            To minimize your costs, you can opt to claim during a period when the Gwei is low. For current gas prices, you can check the .
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </div>
    )
}
