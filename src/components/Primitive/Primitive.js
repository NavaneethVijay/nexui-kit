import * as React from 'react'

const DEFAULT_TAG = 'div'

const Primitive = React.forwardRef((props, forwardedRef) => {
  const { as: Comp = DEFAULT_TAG, ...primitiveProps } = props
  return <Comp {...primitiveProps} ref={forwardedRef} />
})

export default Primitive
