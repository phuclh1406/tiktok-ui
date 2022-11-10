import Header from '~/components/Layout/components/Header'

import React from 'react'

function DefaultLayout({children}) {
  return (
    <div>
        <Header />
        <div className="container">
            <div className = "content">
                {children}
            </div>
        </div>
    </div>
  )
}

export default DefaultLayout