import qs from "qs"

/**
 * Get full Strapi URL from path
 * @param {string} path Path of the URL
 * @returns {string} Full Strapi URL
 */
export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://9guan.games"
    // process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`
}

/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API route
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {Object} options Options passed to fetch
 * @returns Parsed API call response
 */
export async function fetchAPI(path, urlParamsObject = {}, options = {}) {
  // Merge default and user options
  const mergedOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  }

  // Build request URL
  const queryString = qs.stringify(urlParamsObject)
  const requestUrl = `${getStrapiURL(
    `/api${path}${queryString ? `?${queryString}` : ""}`
  )}`

  // Trigger API call
  const response = await fetch(requestUrl, mergedOptions)
  // Handle response
  const data = await response.json()
  if (!response.ok) {
    return Promise.reject(data)
  }
  return data
}

export async function ajaxAPI(path, params) {
  const url = `https://api.rawg.io/api${path}`
  const queryString = qs.stringify({
    ...params,
    key: 'ff4e06ab161444f79981aa36afe81f21'
  })
  const response = await fetch([url, queryString].join('?'), {
    headers: {
      "Content-Type": "application/json",
    },
  })
  const data = await response.json()
  return data
}