import Link from "next/link";
import Home from '../../app/page';
import DashBoard from '../../app/dashboard/page';

export function Header (){
    return (
        <header className="flex px-2 py-4 bg-zinc-900 text-white">
            <div className="flex itens-center justify-between w-full mx-auto max-w-7x1">
                <div>
                    NextJS
                </div>
                <nav>
                    <ul className="flex items-center justify-center gap-2">
                        <li>
                            <Link href='/'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href='/posts'>
                                Posts
                            </Link>
                        </li>
                        <li>
                            <Link href='/dashboard'>
                                DashBoard
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}