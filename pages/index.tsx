import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-xl font-bold mb-5">Hello Next.js!</h1>
      <ul>
        <li>✔️ Next.js</li>
        <li>✔️ Typescript</li>
        <li>✔️ ESLint</li>
        <li>✔️ Prettier</li>
        <li>✔️ Tailwind</li>
      </ul>
    </div>
  )
}

export default Home
