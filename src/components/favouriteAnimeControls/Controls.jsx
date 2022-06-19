import { TiTimes } from 'react-icons/ti'
import './Controls.css'
function Controls({type}) {
  return (
    <>
    {type === 'favourite' && (
      <div className="remove">
        <button className="remove-btn"><TiTimes className='x-icon'/></button>
      </div>
    )}
    </>
  )
}

export default Controls