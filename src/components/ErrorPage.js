import React from 'react'

const ErrorPage = () => {
  return (
    <div id='errorPage'>
      <div className='errorPage' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className='container' style={{ textAlign: 'center' }}>
        <h3 style={{ fontFamily:'monospace',fontSize:'34px',marginBottom:'30px' }}>Page Not Found</h3>
        <a href='/'>
          <button className='backbtn'>Back to Page</button>
        </a>
      </div>
    </div>
    </div>
  )
}

export default ErrorPage
