import Avatar from 'boring-avatars';

const RandomAvatar = () => {
  const uuid = crypto.randomUUID();
  const colors = ['#384B70', '#507687', '#FCFAEE', '#B8001F'];
  return <Avatar size={'40px'} name={uuid} variant="beam" colors={colors} />;
};

export default RandomAvatar;
