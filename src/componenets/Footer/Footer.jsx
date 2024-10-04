import { Link } from 'react-router-dom'
import Logo from '../Logo'
import { COMPANY_LIST, LEGALS_LIST, SUPPORT_LIST } from '../../constants/footer'

function Footer() {
    return (
        <section className="relative overflow-hidden text-[4vw] md:text-[2.2vw] bg-gray-400 w-full border-t border-black ">

            <div className="relative z-10 mx-auto w-[80%] my-[2.75em] md:my-[1.5em] ">
                <div className="md:flex">
                    <div className="w-full md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between">
                            <div className="mb-4 inline-flex items-center">
                                <Logo />
                            </div>

                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px text-[1.2em] md:text-[0.65em] font-semibold uppercase text-gray-800/75">
                                Company
                            </h3>
                            <ul>
                                {
                                    COMPANY_LIST.map((list) => (
                                        <li key={list?.id}
                                            className='text-[1.05em] my-[0.5em] md:text-[0.5em] text-base font-medium text-gray-900 hover:text-white/90'>
                                            <Link to={`${list?.path}`}>{list?.text}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px text-[1.2em] md:text-[0.65em] font-semibold uppercase text-gray-800/75">
                                Support
                            </h3>
                            <ul>
                                {
                                    SUPPORT_LIST.map((list) => (
                                        <li key={list?.id}
                                            className='text-[1.05em] my-[0.5em] md:text-[0.5em] text-base font-medium text-gray-900 hover:text-white/90'>
                                            <Link to={`${list?.path}`}>{list?.text}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <div className="h-full">
                            <h3 className="tracking-px text-[1.2em] md:text-[0.65em] font-semibold uppercase text-gray-800/75">
                                Legals
                            </h3>
                            <ul>
                                {
                                    LEGALS_LIST.map((list) => (
                                        <li key={list?.id}
                                            className='text-[1.05em] my-[0.5em] md:text-[0.5em] text-base font-medium text-gray-900 hover:text-white/90'>
                                            <Link to={`${list?.path}`}>{list?.text}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='w-full text-center md:text-left'>
                    <p className="text-gray-600 text-[0.85em] md:text-[0.45em]">
                        &copy; Copyright 2023. All Rights Reserved by DevUI.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Footer
