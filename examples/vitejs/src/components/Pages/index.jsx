import React, { useEffect, useState, useRef, lazy } from 'react'
import { startViewTransition } from 'react-fx1'

export default ({ className, style }) => {
  const useLocation = () => ({
    hash: window.location.hash.split('?')[0],
    ...Object.fromEntries(new URLSearchParams(window.location.hash.split('?')[1]))
  })

  const [Page, setPage] = useState()
  const ref = useRef()
  const [qs, setQueryString] = useState(useLocation())

  useEffect(() => {
    window.addEventListener('popstate', () => setQueryString(useLocation()))
    return () => {
      window.removeEventListener('popstate', () => setQueryString(useLocation()))
    }
  }, [])

  useEffect(() => {
    const page = lazy(async () => {
      try {
        let currentPage = ['#/', ''].includes(qs.hash) ? 'Home' : qs.hash.substring(2)
        const path = currentPage.split('/')

        switch (path.length) {
          case 1:
            currentPage = `../../app/${path[0]}/index.jsx`
            break
          case 2:
            currentPage = `../../app/${path[0]}/${path[1]}/index.jsx`
            break
        }

        return await import(currentPage)
      } catch (e) {
        console.error(e)
        return await import('../../app/Http/NotFound/index.jsx')
      }
    })

    startViewTransition(setPage(page), ref, 'fade')
  }, [qs.hash])

  return Page &&
    <main ref={ref} className={className} style={style}>
      <Page qs={qs} />
    </main>
}
