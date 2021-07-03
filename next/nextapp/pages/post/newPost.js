import Link from 'next/link'
import Head from 'next/head'

export default ({name}) => {
    return(
        <>
            <head>
                <title>First Post</title>
            </head>
            <h1>This is new Post page</h1>
            <h2>
                click {' '}
                <a>
                    <Link href="/">
                        this </Link>
                    </a>
            </h2>
        </>
    );

}
