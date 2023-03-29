import Button from "react-bootstrap/Button";

export default function Home() {
  return (
    <header className="App-header">
      <h1>Title to test CSS H1</h1>
      <h2>Another title H2</h2>
      <h3>Another title h3</h3>
      <h4>And one more</h4>
      <p className="text">And now some text</p>
      <ul>
        <li>And a list</li>
        <li>With two items</li>
      </ul>
      <Button variant="mainButton" className="button">
        Hello, I am button
      </Button>
      <p>
        <a href="www.nothing.com">I am a link to nothing</a>
        <br />
        <img
          src="https://i.imgur.com/fZBbLjQ.jpg"
          alt="a capybara looking to the infinite"
          title="Capybara"
        />
      </p>
    </header>
  );
}
