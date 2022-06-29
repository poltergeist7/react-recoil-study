import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Count from './Count'
import {RecoilRoot} from 'recoil';

export default function Home() {
  return (
    <RecoilRoot>
      <Count />
    </RecoilRoot>
  )
}
