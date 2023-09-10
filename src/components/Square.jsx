/* eslint-disable react/prop-types */
export function Square ({ value, handleClick }) {
  return (
    <button className='square' onClick={handleClick}>
      {value}
    </button>
  )
}