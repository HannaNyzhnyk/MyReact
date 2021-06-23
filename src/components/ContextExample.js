import React, {useState, Component} from 'react';
import {Container} from "react-bootstrap";
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

export const PageContext = React.createContext();

export const PageContextProvider = (props) => {
	const [location, setLocation] = useState({
		country: "",
		region: "",
	})

    const { country, region } = location;

	const selectCountry = (value)  => {
		setLocation({ country: value });
	}
	
	const selectRegion = (value) => {
		setLocation({ region: value, country: country });
	}
    
    return  <PageContext.Provider value={{location, setLocation}}>
    {<Container>
        <table>
          <tbody>
            <tr>
              <td>
                <label>
                  <CountryDropdown className="form-control" 
                    value={location.country}                     
                    onChange={(val) => selectCountry(val)} />
                </label>
              </td>
              <td>
                <label>
                  <RegionDropdown  className="form-control"
                    country={location.country}
                    value={location.region}
                    onChange={(val) => selectRegion(val)} 
                    />
                </label>
              </td>
          </tr>
          </tbody>
        </table>
      </Container>}
    {props.children}
</PageContext.Provider> 
}