'use client';
import '@/_styles/test.scss';

import Button from '../_components/Button';
import RandomAvatar from '../_components/RandomAvatar';
const Main = () => {
  const handleClick = () => {
    console.log('click');
  };
  return (
    <div className="main-page">
      Main page
      <RandomAvatar />
      <Button type="button" text="가나다라마바사아자차카" color="red" onClick={handleClick} />
    </div>
  );
};

export default Main;
