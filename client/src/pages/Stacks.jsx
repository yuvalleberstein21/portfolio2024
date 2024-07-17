import React from 'react'
import StackCards from '../components/StackCards'

const Stacks = () => {
    return (
        <div className='p-10 mx-auto'>
            <div className='space-y-4 space-x-3'>
                <h3 className='text-gray-400 text-md'>STACKS</h3>
                <h2 className='text-gray-200 text-xl'>Technologies I Work With</h2>
            </div>
            <StackCards />
        </div>
    )
}

export default Stacks