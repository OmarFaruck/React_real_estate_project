import Accordion from 'react-bootstrap/Accordion';
import '../Accordion/Accordion.css'

function Main() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Best interest rates on the market</Accordion.Header>
        <Accordion.Body>
        Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Prevent unstable prices</Accordion.Header>
        <Accordion.Body>
        Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Best price on the market</Accordion.Header>
        <Accordion.Body>
        Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Main;