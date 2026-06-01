"use client"
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import { redirect, usePathname } from 'next/navigation';
import React from 'react';
import { FcMenu } from 'react-icons/fc';

const Navbar = () => {
    const pathName = usePathname()
    const links = <>
        <li className={`${pathName === '/' && 'text-cyan-400 underline'}`}><Link href={'/'}>Home</Link></li>
        <li className={`${pathName === '/all-tutors' && 'text-cyan-400 underline'}`}><Link href={'/all-tutors'}>All-Tutors</Link></li>

    </>
    const sequreButton = <>
        <li className={`${pathName === '/add-tutors' && 'text-cyan-400 underline'}`}><Link href={'/add-tutors'}>Add-Tutor</Link></li>
        <li className={`${pathName === '/my-tutor' && 'text-cyan-400 underline'}`}><Link href={'/my-tutor'}>My Tutors</Link></li>
        <li className={`${pathName === '/my-booked' && 'text-cyan-400 underline'}`}><Link href={'/my-booked'}>My Booked Sessions</Link></li>
    </>
    const { data: session } = authClient.useSession()
    const signOut = async () => {
        await authClient.signOut()
        redirect('/')
    }

    return (
        <div className='mb-10'>
            <div className="navbar z-10 mb-5 fixed bg-gray-800/90 shadow-sm">
                <div className="navbar-start">
                    {
                        !session &&
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <FcMenu size={30} />
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                {links}
                                {sequreButton}

                            </ul>
                        </div>
                    }

                    <Link href={'/'} className=''><h2 className="text-4xl font-bold text-white">
                        Medi<span className="text-cyan-400">Queue</span>
                    </h2></Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}

                        {
                            session && sequreButton
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        session ? <div className="">
                            <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                {/* Page content here */}
                                <label htmlFor="my-drawer-1" className="drawer-button">
                                    <Image
                                        width={70}
                                        height={70}
                                        src={session?.user?.image || `https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png`}
                                        alt={session?.user?.name}
                                        className='object-cover h-15 w-15 rounded-full'
                                    />

                                </label>
                            </div>
                            <div className="drawer-side">
                                <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
                                <ul className="menu bg-base-200 min-h-full w-80 p-4">
                                    {/* Sidebar content here */}
                                    {links}
                                    <div className='lg:hidden'>
                                        {sequreButton}
                                    </div>

                                    <button onClick={signOut} className='btn btn-error btn-outline'>SignOut</button>
                                </ul>
                            </div>
                        </div> :
                            <div className='flex gap-2 items-center'>
                                <Link className='btn btn-success btn-outline' href={'/login'}>Login</Link>
                                <Link className='btn btn-success' href={'/registration'}>Create Acount</Link>
                            </div>
                    }


                </div>
            </div>
        </div>
    );
};

export default Navbar;