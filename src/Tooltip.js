
import { Tooltip } from 'react-tooltip';

function MyBtns(){
  return(
    <div>
      <button className='left' style={{margin:'20px',padding:'10px',font:'icon'}}>Left</button>
      <Tooltip anchorSelect='.left' place='left'>
        hover on left Button.!
      </Tooltip>
      <button className='top'style={{margin:'20px',padding:'10px',font:'icon'}}>Top</button>
      <Tooltip anchorSelect='.top' place='top'>
        hover on Top Button.!
      </Tooltip>
      <button className='bottom'style={{margin:'20px',padding:'10px',font:'icon'}}>Bottom</button>
      <Tooltip anchorSelect='.bottom' place='bottom'>
        hover on Bottom Button.!
      </Tooltip>
      <button className='right'style={{margin:'20px',padding:'10px',font:'icon'}}>Right</button>
      <Tooltip anchorSelect='.right' place='right'>
        hover on Right Button.!
      </Tooltip>
    </div>
  );
}


export default MyBtns;