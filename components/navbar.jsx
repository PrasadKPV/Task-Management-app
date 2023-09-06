'use client'

import { useState , useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { signIn ,signOut , getProviders ,useSession} from 'next-auth/react';


const Navbar = () => {
    const { data : session } = useSession();

    const [providers, setProviders] = useState(null);

    useEffect(() => {
        (async () => {
        const res = await getProviders();
        setProviders(res);
        })();
    }, []);
    return(
        <nav className='w-full mb-4 sm:flex justify-between items-center pt-2'>
            <Link href="/" className='flex gap-1 items-center justify-center w-20 h-20 sm:w-24 sm:h-24'>
                <Image
                    src='/assests/logo.png'
                    alt="Task Wave logo"
                    width={80}
                    height={80}
                    className="object-contain" 
                />
                <p className="logo_text whitespace-nowrap">Task Wave</p>
            </Link>
            <div  className='flex gap-3 md:gap-5 flex-col sm:flex-row items-center justify-center '>
                {session?.user ? (
                    <div>
                        {/* Sign out button */}
                        <button type='button' onClick={signOut} className='sign_io'>
                            Sign Out
                        </button>
                    </div>
                    ) : (
                    <div>
                        {providers &&
                        Object.values(providers).map((provider) => (
                            <button
                            type='button'
                            key={provider.name}
                            onClick={() => {
                                signIn(provider.id);
                            }}
                            className='sign_io'
                            >
                            Sign in
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar