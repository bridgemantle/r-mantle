import React from 'react'
import Navbar from '../component/Navbar'
import Background from '../component/Background'
import Migrator from '../component/Migrator'
import Copyright from '../component/Copyright'

export default function Migrate() {
  return (
    <>
      <Background />
      <Navbar />
      <div className='px-4'>
        <Migrator />
      </div>
      <Copyright />
    </>
  )
}
