import { Meta, Links, Outlet, Scripts, LiveReload} from '@remix-run/react'
import Header from './components/header'
import styles from './styles/index.css'
import normalize from './styles/normalize.css'


export function meta(){
    return (
        {
            charset: 'utf-8',
            title: 'Guitar Shop',
            viewport: 'width=device-width,initial-scale=1.0'
        }
    )
}

export function links(){
    return [
        {
            rel: 'stylesheet',
            href: normalize
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossOrigin: 'true' 
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com/css2?family=Golos+Text:wght@400;700;900&display=swap'
        },
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

export default function App(){
    return (
        <Document>
            <Outlet/>
        </Document>
    )
}



function Document({children}){
    return (
        <html lang="en">
        <head>
            <Meta/>
            <Links/>
        </head>
        <body>
            <Header/>
            {children}
            <Scripts/>
            <LiveReload/>
        </body>
        </html>
    )
}