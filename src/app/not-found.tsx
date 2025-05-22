import Link from 'next/link';
export default function NotFound(){
    return(
        <div className='flex items-center justify-center'>
            <h1 className='text-center font-bold mt-9 text-6xl'>Not Found</h1>
            <br />
            <Link href='/'>
                Voltar para Home
            </Link>
        </div>
    )
}