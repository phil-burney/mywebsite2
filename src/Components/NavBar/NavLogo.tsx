import React, { FC } from 'react';

interface NavLogoProps {

}
let style = {
    height:90,

}

// eslint-disable-next-line no-empty-pattern
const Title: FC<NavLogoProps> = ({  }) => {
  return (
    <div className='d-flex justify-content-start px-3'><a href="/"><img style={style} className="img-flex p-1" src="../../logopb2.svg" alt=""></img></a></div>
  );
};

export default Title;