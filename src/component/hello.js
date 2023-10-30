import React from 'react';

function Hello({ name, color, isTrue }) {
  return (
    <div style={{ color }}>
      {isTrue && <b>*</b>}
      안녕하세요 {name}
    </div>
  )
}

Hello.defaultProps = {
  name: '이름없음'
}

export default Hello;