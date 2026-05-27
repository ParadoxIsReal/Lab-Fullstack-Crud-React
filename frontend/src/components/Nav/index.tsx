import { useState } from 'react'
import { OffCanvas } from '../OffCanvas'

export const Nav = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <nav className="navbar bg-body-tertiary px-3">
        <button
          className="btn btn-outline-secondary"
          onClick={() => setShow(true)}
        >
          <i className="bi bi-list" />
        </button>

        <span className="navbar-brand mb-0 h1"></span>
      </nav>

      <OffCanvas show={show} onClose={() => setShow(false)} />
    </>
  )
}