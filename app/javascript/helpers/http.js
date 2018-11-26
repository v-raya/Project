import 'whatwg-fetch'
import {urlPrefixHelper} from './url_prefix_helper.js.erb'

export const getCsrfToken = value => {
  let metas = document.getElementsByTagName('meta')
  return metas[value] ? metas[value].content : ''
}

const myHeaders = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-CSRF-Token': getCsrfToken('csrf-token'),
  'X-CSRF-param': getCsrfToken('csrf-param')
}
export const getMethod = (url, method, query) => {
  let data = {
    method: method,
    headers: myHeaders,
    mode: 'no-cors',
    credentials: 'same-origin'
  }
  return fetch(url, data)
}
export const fetchRequest = (urlFromComponent, method, params, headerParams) => {
  let url = urlPrefixHelper(urlFromComponent)
  let options = {
    method: method,
    headers: myHeaders,
    credentials: 'same-origin'
  }
  params && (options.body = JSON.stringify(params))
  return fetch(url, options)
}

function handleErrors (response) {
  if (!response.ok) {
    return response.json().then(err => { throw err })
  }
  return response.json()
}

export const fetchRequestWithErrors = (url, method, body) => {
  return fetchRequest(url, method, body)
    .then(handleErrors)
    .then(data => data)
}
