import React, { useEffect, useState, useRef, lazy } from 'react'
import { useLocation, startViewTransition } from 'react-fx1'

export default ({ className, style }) => {
  const [Page, setPage] = useState()
  const ref = useRef()
  const qs = useLocation()

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
