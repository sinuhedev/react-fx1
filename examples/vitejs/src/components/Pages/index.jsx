import React, { useEffect, useState, useRef, lazy } from 'react'
import { useLocation, startViewTransition } from 'react-fx1'

export default ({ className, style }) => {
  const [Page, setPage] = useState()
  const pageRef = useRef()
  const qs = useLocation()

  useEffect(() => {
    let page = ['#/', ''].includes(qs.hash) ? 'Home' : qs.hash.substring(2)

    try {
      const path = page.split('/')

      switch (path.length) {
        case 1:
          page = lazy(() => import(`/app/${path[0]}/index.jsx`))
          break
        case 2:
          page = lazy(() => import(`/app/${path[0]}/${path[1]}/index.jsx`))
          break
        case 3:
          page = lazy(() => import(`/app/${path[0]}/${path[1]}/${path[2]}/index.jsx`))
          break
      }
    } catch (e) {
      console.error(e)
      page = lazy(() => import('../../app/Http/NotFound/index.jsx'))
    }

    startViewTransition(setPage(page), pageRef, 'fade')
  }, [qs.hash])

  return Page &&
    <div ref={pageRef} className={className} style={style}>
      <Page ref={pageRef} />
    </div>
}
