import * as React from 'react'
import Primitive from '../Primitive'

const NAME = 'Button'
const DEFAULT_TAG = 'button'

const Button = React.forwardRef((props, ref) => {
  const { as = DEFAULT_TAG, onClick, children } = props
  return (
    <Primitive as={as} ref={ref} {...props} onClick={onClick}>
      {children}
    </Primitive>
  )
})

Button.displayName = NAME
export default Button
