import Head from 'next/head'
import Link from "next/link"

export default function Home() {
 
  return (
    <>
    <Link href="todos">Todos</Link>
    <Head>
      <title>Home</title>
    </Head>
    </>
  )
}
