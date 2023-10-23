'use client'

import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Nav = () => {
  const isLoggedIn = useState(true)
  const [providers, setProviders] = useState(null)

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders()
      setProviders(response)
    }
    setProviders()
  }, [])

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          🌎
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            {isLoggedIn ? (
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Profile
                </a>
              </li>
            ) : (
              <>
                {providers &&
                  Object.values(providers).map((provider) => (
                    <button
                      type="button"
                      className="btn"
                      key={provider.name}
                      onClick={() => signIn(provider.id)}
                    ></button>
                  ))}
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
