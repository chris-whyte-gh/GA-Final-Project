//destruct extracts key from object (key = useState which is a function)
import { useState } from 'react'

export default function hikes({
  setapiResponse, setapiType
}) {
  //GA is the default state if none selected
  const [state, setstate] = useState("GA");
  // console.log(state);

  return (
    <>
      <h3>National Park Service</h3>
      <p>Get a list of all NPS activities within your state</p>
      <form
        onChange={(e) => {
          setstate(e.target.value);
        }}
      >
        <select>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="DC">District Of Columbia</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
        </select>
      </form>
      <br />
      <button
        id="btn"
        onClick={async (e) => {
          e.preventDefault();
          setapiType('hikes');
          const apikey = process.env.NEXT_PUBLIC_HIKES_API_KEY;
          const response = await fetch(
            `https://developer.nps.gov/api/v1/parks?stateCode=${state}&api_key=${apikey}`,);

            const activitiesObject = await response.json();
          {/* Alternative way is to map through array (avoids creating masterArray) */}
          //Loop through the fullName, description, and images of the array

          let masterArray = [];

          {/* I set this to 4 because my api was always failing when calling all the hikes */}
          for (let i = 0; i < 4; i++) {
            let activityName = activitiesObject.data[i].fullName;
            let description = activitiesObject.data[i].description;
            let images = activitiesObject.data[i].images;
            let imagesArray = images[i].url;

            //ES6 creates object with these as keys, and values as variable names
            masterArray.push({ activityName, description, imagesArray });
          }

          setapiResponse(masterArray);
        }}
      >
        Find Park Activities &rarr;
      </button>
      <style jsx>{`
        #btn {
          background-color: white;
          color: green;
          font-size: 15px;
          padding: 10px 20px;
          text-align: center;
        }

        h3 {
          text-align: center;
        }
      `}</style>
    </>
  );
}