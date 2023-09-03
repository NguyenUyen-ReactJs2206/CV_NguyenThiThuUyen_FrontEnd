import React, { useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import Loading from 'src/components/Loading'
type Props = {
  content: string
}
export default function ProjectDetail({ content }: Props) {
  const [loading, setLoading] = useState(true)
  const nodeRef = useRef(null)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [setLoading])
  return (
    <div>
      {loading && (
        <CSSTransition in={loading} timeout={500} nodeRef={nodeRef} classNames='loading' unmountOnExit>
          <Loading title='Loading...' />
        </CSSTransition>
      )}
      <CSSTransition in={!loading} timeout={1000} nodeRef={nodeRef} classNames='page' unmountOnExit>
        <div ref={nodeRef} id='top'>
          {content}
        </div>
      </CSSTransition>
    </div>
  )
}
