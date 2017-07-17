const getCsrfToken = function getCsrfToken (value) {
  var metas = document.getElementsByTagName('meta')
  return metas[value] ? metas[value].content : ''
}
export const fetchRequest = (url, method, params, headerParams) => {
  return fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-CSRF-Token': getCsrfToken('csrf-token'),
      'X-CSRF-param': getCsrfToken('csrf-param')
    },
    credentials: 'same-origin',
    body: JSON.stringify(params)
  })
}
