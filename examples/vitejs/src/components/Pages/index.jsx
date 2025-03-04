import React, { useEffect, useState, useRef, lazy } from 'react'
import { useLocation, startViewTransition } from 'react-fx1'

export default ({ className, style }) => {
  const [Page, setPage] = useState()
  const pageRef = useRef()
  const qs = useLocation()

  useEffect(() => {
    ;(async () => {
      let page = ['#/', ''].includes(qs.hash) ? 'Home' : qs.hash.substring(2)

      try {
        const path = page.split('/')

        switch (path.length) {
          case 1:
            page = await import(`/app/${path[0]}/index.jsx`)
            break
          case 2:
            page = await import(`/app/${path[0]}/${path[1]}/index.jsx`)
            break
          case 3:
            page = await import(`/app/${path[0]}/${path[1]}/${path[2]}/index.jsx`)
            break
        }
      } catch (e) {
        console.error(e)
        page = await import('../../app/Http/NotFound/index.jsx')
      }

      // startViewTransition(setPage(page), pageRef, 'fade')

      const Page2 = page.default

      setPage(<Page2 />)
    })()
  }, [qs.hash])

  return Page &&
    <div ref={pageRef} className={className} style={style}>
      {Page}
    </div>
}
