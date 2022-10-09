
import ButtonReturn from '../Buttons/ButtonReturn/ButtonReturn';
import ButtonSourceCode from '../Buttons/ButtonSourceCode/ButtonSourceCode';

const InnerNavBar = (props) => {
  const { text, link } = props;
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <ButtonReturn text={text} />
      <ButtonSourceCode link={link} />
    </div>
  );
};

export default InnerNavBar;
