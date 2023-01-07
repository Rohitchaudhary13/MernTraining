import React from 'react'

const MainScreen = ({title, children}) => {
  return (
    <div>
        <div>
            {
                title && (
                    <>
                        <h1 className='heading'>{title}</h1>
                        <hr />
                    </>
                )
            }
            {children}
        </div>
    </div>
  )
}

export default MainScreen