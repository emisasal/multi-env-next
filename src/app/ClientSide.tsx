"use client"

// process.env.SOME_SECRET on client returns "undefined"

const ClientSide = () => {
  return (
    <article>
      <p>Client Side</p>

      {/* <h3>Some Secret: {process.env.SOME_SECRET}</h3> */}
      <h3>Some Other Secret: {process.env.NEXT_PUBLIC_OTHER_SECRET}</h3>

      <h3>Env Name: {process.env.NEXT_PUBLIC_ENV_NAME}</h3>
      <h3>Value 1: {process.env.NEXT_PUBLIC_VALUE1}</h3>
    </article>
  )
}

export default ClientSide
