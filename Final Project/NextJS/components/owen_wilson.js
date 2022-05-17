export default function owenWilson({ setapiResponse }) {
  return (
    <button
      onClick={async (e) => {
        e.preventDefault();

        const response = await fetch(
          'https://owen-wilson-wow-api.herokuapp.com/wows/random',
        );

        const data = await response.json();
        console.log(data);
        setapiResponse(data[0].audio);
      }}
    >
      <img
        src="https://ih1.redbubble.net/image.257196091.5010/raf,750x1000,075,t,FFFFFF:97ab1c12de.u2.jpg"
        alt="Wow"
        width="100"
        height="100"
      ></img>
    </button>
  );
}