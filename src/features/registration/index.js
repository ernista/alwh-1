import img from '../../assets/images/img3.jpg'
import { ChevronLeftIcon } from '@heroicons/react/solid'
import { useNavigate } from 'react-router-dom'


export const Registration = () => {

    const router = useNavigate()
    const goBack = () => router(-1)

    return (
        <div className="fixed h-screen w-screen">
            <div className="grid lg:grid-cols-2 h-full">
                <div className="flex flex-col space-y-8 p-10 overflow-y-auto register-scroll">
                    <div className="flex items-center space-x-8 font-semibold text-[#050036]">
                        <ChevronLeftIcon className='h-8 w-auto bg-[#050036] p-2 text-white cursor-pointer rounded-full' onClick={goBack} />
                        <p>Register for next Edition</p>
                    </div>

                    <form className='space-y-5 overflow-y-auto'>
                        <p className='text-[#050036]'>Please fill the form to continue</p>
                        <div className="grid gap-5 lg:w-3/4">
                            <div className='flex flex-col space-y-1'>
                                <label htmlFor="full_name">Fullname</label>
                                <input type="text" className='form-control' />
                            </div>

                            <div className='flex flex-col space-y-1'>
                                <label htmlFor="full_name">Phone</label>
                                <input type="text" className='form-control' />
                            </div>

                            <div className='flex flex-col space-y-1'>
                                <label htmlFor="full_name">Gender</label>
                                <select className='form-control'>
                                    <option value="M">Male</option>
                                    <option value="F">Female</option>
                                </select>
                            </div>

                            <div className='flex flex-col space-y-1'>
                                <label htmlFor="full_name">How did you hear of 'A day with Him'</label>
                                <select className='form-control'>
                                    <option value="zoom">Zoom</option>
                                    <option value="rev">The revelation of Jesus</option>
                                    <option value="family">Family & Friends</option>
                                    <option value="others">Others</option>
                                </select>
                            </div>

                            <div className='flex flex-col space-y-1'>
                                <label htmlFor="full_name">Please state</label>
                                <input type="text" className='form-control' />
                            </div>

                            <div className='flex flex-col space-y-1'>
                                <label htmlFor="full_name">First Time</label>
                                <select className='form-control'>
                                    <option value="y">Yes</option>
                                    <option value="n">No</option>
                                </select>
                            </div>

                            <div className='flex flex-col space-y-1'>
                                <label htmlFor="full_name">When will you arrive</label>
                                <select className='form-control'>
                                    <option value="y">Friday</option>
                                    <option value="n">Saturday</option>
                                </select>
                            </div>
                        </div>

                        <div className='py-3'>
                            <button className='bg-[#050036] rounded text-white py-3 w-full lg:w-3/4'>Submit</button>
                        </div>
                    </form>
                </div>
                <div className="h-full w-full relative order-first lg:order-last">
                    <img src={img} className="object-cover h-full w-full" alt="" />
                    <div className='absolute top-0 h-full w-full bg-[#050036] opacity-60'></div>
                </div>
            </div>
        </div>
    )
}