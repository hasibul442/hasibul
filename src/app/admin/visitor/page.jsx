import VisitorList from '@/Components/VisitorList'
import VisitorStats from '@/Components/VisitorStats'
import React from 'react'

function page() {
  return (
    <div>
        <VisitorStats />

        <VisitorList />
    </div>
  )
}

export default page