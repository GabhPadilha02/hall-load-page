import { Inter } from 'next/font/google'
import Image from 'next/image'
import logo from '../../public/logo.jpeg'
import Spinner from './components/spinner'
import style from "./style.module.scss"

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <div className={style.display}>
      <Image src={logo} alt="logo"/>
      <div className={style.textSpinner}>
        <p>Site em construção...</p>
        <Spinner size={40} color="#000"/>
      </div>
      
    </div>
  )
}
