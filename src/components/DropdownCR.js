import React, { useState } from "react";
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { Container } from "react-bootstrap";



function DropdownCR() {
	const [state, setState] = useState({
		country: "",
		region: ""
	})	

	const { country, region } = state;
	
	const selectCountry = (value)  => {
		setState({ country: value });
		console.log(value);
	}
	
	const selectRegion = (value) => {
		setState({ region: value, country: country });
		console.log("region", value);
	}

	return <Container>
		<div className={'d-flex justyfy-content-center mb-3 mt-3'}>
			<div className={'input-group'}>
				<CountryDropdown className="form-control"
					value={country}
					onChange={(value) => selectCountry(value)} />
				<RegionDropdown className="form-control"
					country={country}
					value={region}
					onChange={(value) => selectRegion(value)} />

			</div>
		</div>
	</Container>
}


export default DropdownCR;