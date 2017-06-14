

var url = '/facilities/search';

export const fetchRequest = (method, params, headerParams) => {
	return fetch(url, {
		method: 'POST',
		headers: {
		   'Content-Type': 'application/json',
    	   'Accept': 'application/json',
    	   'X-CSRF-Token': 'c2f0b13d-6480-4ce1-8032-071b2fe59b86',
    	   'X-CSRF-param': 'authenticity_token'
		},
		credentials: 'same-origin',
      	body: JSON.stringify({
   			params
      	})
	})
	.then(
      response => response.json())
    .then((response) => {
      return response;
    })
    .catch(error => {
      console.log(error)
      return error
    }) 
}

