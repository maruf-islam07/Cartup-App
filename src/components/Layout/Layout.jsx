import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='w-full max-w-330 mx-auto px-1 md:px-5 '>
        {children}
    </div>
  )
}

export default Layout