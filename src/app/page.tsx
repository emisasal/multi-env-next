import ClientSide from "./ClientSide"

export default function Home() {
  return (
    <main>
      <h2>Enviroment Variables</h2>
      <h3>Project Enviroment: {process.env.NODE_ENV}</h3>

      <p>Server Side</p>
      <h3>Some Secret: {process.env.SOME_SECRET}</h3>
      <h3>Some Other Secret: {process.env.NEXT_PUBLIC_OTHER_SECRET}</h3>

      <h3>Env Name: {process.env.NEXT_PUBLIC_ENV_NAME}</h3>
      <h3>Value 1: {process.env.NEXT_PUBLIC_VALUE1}</h3>

      <ClientSide />
    </main>
  )
}
