import React, { useEffect, useState, useRef } from 'react'
import { useLocation, startViewTransition } from 'react-fx1'

export default ({ className, style }) => {
  const [Page, setPage] = useState()
  const ref = useRef()
  const qs = useLocation()

  useEffect(() => {
    startViewTransition(async () => {
      let page = ['#/', ''].includes(qs.hash) ? 'Home' : qs.hash.substring(2)

      try {
        const path = page.split('/')

        switch (path.length) {
          case 1:
            page = await import(`../../app/${path[0]}/index.jsx`)
            break
          case 2:
            page = await import(`../../app/${path[0]}/${path[1]}/index.jsx`)
            break
        }
      } catch (e) {
        console.error(e)
        page = await import('../../app/Http/NotFound/index.jsx')
      }

      const Page = page.default
      setPage(<Page />)
    }, ref, 'fade')
  }, [qs.hash])

  return Page &&
    <main ref={ref} className={className} style={style}>
      {Page}
    </main>
}
