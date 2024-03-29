import { useState } from 'react'
import './App.css'

function AdditionalPage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Additional Page (version {__APP_VERSION__})</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => {throw new Error("Sentry Test Error from Additional Page");}}>
          Break the world
        </button>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default AdditionalPage
