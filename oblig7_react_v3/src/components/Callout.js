import styled from 'styled-components';

const Hgroup = styled.hgroup`
  color: #ffc600;
  text-shadow: 2px 2px 3px #333;
`;

const Title = styled.h1`
  font-size: 120px;
  margin-bottom: 0;
`;

const SubTitle = styled.h2`
  font-size: 40px;
  margin: 0;
`;

const SubSubTitle = styled.h3`
  color: #000;
  font-size: 20px;
  margin-top: 0;
  font-variant: small-caps;
  text-shadow: none;
`;

const TM = styled.span``;

const Callout = () => (
  <>
    <Hgroup>
      <Title>ALOHA!</Title>
      <SubTitle>
        Welcome to T.W.M.M.D.B<TM>&trade;</TM>
      </SubTitle>
      <SubSubTitle>- Tommy W. Major's Movie Data Base -</SubSubTitle>
    </Hgroup>
  </>
);

export default Callout;
