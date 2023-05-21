import { useState, useEffect } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { BallTriangleContainer } from './Loader.styled';

export const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <BallTriangleContainer>
      {isLoading ? (
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="rgb(102, 102, 241)"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        />
      ) : null}
    </BallTriangleContainer>
  );
};
