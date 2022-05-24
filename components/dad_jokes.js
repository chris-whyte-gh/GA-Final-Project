export default function dadJokes({ setapiResponse, setapiType }) {
  return (
    <>
      <br />
      <br />
      <button
        onClick={async (e) => {
          e.preventDefault();
          setapiType("dadJokes")

          {/* Headers specify we are receiving JSON */}
        try {
          const response = await fetch('https://icanhazdadjoke.com', {
            method: 'GET',
            headers: { Accept: 'application/json' },
          });

          if (!response.ok) {
            throw new Error(`There was an error: ${response.status}`);
          }

          const data = await response.json();
          console.log(data);
          setapiResponse(data.joke);
          } catch (err) {
            console.log(err);
          }
        }}
      >
        Dad Joke
      </button>
      <p>Get a Dad Joke</p>
    </>
  );
}