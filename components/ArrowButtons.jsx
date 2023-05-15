import Router from 'next/router'
import React from 'react'

export default function ArrowButtons({ right, left, urlRight, urlLeft }) {
    return (
        <>
            < >

                {left &&
                    <img style={{ zIndex: '20' }} className='prev' onClick={() => {
                        console.log('click')
                        if (left) {
                            urlLeft ? Router.push(urlLeft) : Router.back()
                        }
                    }} src='/images/prev.svg' />
                }
            </>

            < >

                {right &&
                    <img style={{ zIndex: '20' }} className='next' onClick={() => {
                        console.log('click')
                        if (right) {
                            Router.push(urlRight)
                        }
                    }} src='/images/next.svg' />
                }
            </>

        </>
    )
}
