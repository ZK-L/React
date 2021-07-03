import Link from 'next/link'
import Router from 'next/router'

export default function mypage(params) {
    function gotoHome(){
        Router.push('/')
    }
    
    return (
        <div>
            <p>Use tag to router page</p>
        <Link href='/'>
            <button>
                click me
            </button>
        </Link>
        <p>Use function to router page</p>
        <button onClick={gotoHome}>click me</button>
        </div>
    )
};
