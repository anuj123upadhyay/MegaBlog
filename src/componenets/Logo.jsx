import React from 'react'
import { Badge } from '../components/ui/badge'

function Logo({width = '100px'}) {
  return (
    <div>
      <Badge>
        <div className='text-xl mb-1'>
          MegaBlog
          </div>
          </Badge>
    </div>
  )
}

export default Logo
