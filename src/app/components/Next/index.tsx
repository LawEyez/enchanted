import LineIcon from 'react-lineicons'
import { NextCenter, NextLink } from './styles'

const Next = () => {
  return (
    <NextCenter>
      <NextLink to='/about'>
        <LineIcon name='angle-double-right' />
      </NextLink>
    </NextCenter>
  )
}

export default Next
