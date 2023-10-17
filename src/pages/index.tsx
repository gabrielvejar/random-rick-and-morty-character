import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Refresh from "../components/Reload"

type Location = {
  name: string,
  url: string
}

type Character = {
  id: Number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  image: string
  origin: Location,
  location: Location,
}

const inter = Inter({ subsets: ['latin'] })


export default function Home({ character }: { character: Character }) {
  return (
    <>
      <Head>
        <title>Random Rick and Morty Character</title>
        <meta name="description" content="Get a Random Rick and Morty Character!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.container}>
          <Image className={`${styles.image} ${styles.shadow}`} src={character.image} width={300} height={300} alt={`picture of ${character.name}`}></Image>
          <h1 className={"font"}>{character.name}</h1>
          <p><strong>Status:</strong> {character.status}</p>
          <p><strong>Species:</strong> {character.species}</p>
          <p><strong>Type:</strong> {character.type || "-"}</p>
          <p><strong>Gender:</strong> {character.gender}</p>
          <p><strong>Origin:</strong> {character.origin.name}</p>
          <p><strong>Location:</strong> {character.location.name}</p>
          <div>
            <Refresh />
          </div>
        </div>
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const CHARACTERS_LENGTH = 826
  const randomIndex = Math.floor(Math.random() * (CHARACTERS_LENGTH) + 1)
  const response = await fetch(`https://rickandmortyapi.com/api/character/${randomIndex}`)
  const character = await response.json()
  return { props: { character } }
}
