// const sanityClient = require( '@sanity/client' );
const axios = require( 'axios' );

// const { apiProjectId, apiDataset, apiToken } = require( '../config' );

// axios.get( 'https://39dycnz5.api.sanity.io/v1/data/query/develop?query=*[_type==%27sight%27]{...}' )
//   .then( res => {
//   console.log( res.data)
//   } );

module.exports = () => {
  const res = axios.get( 'https://39dycnz5.api.sanity.io/v1/data/query/develop?query=*[_type==%27sight%27]{...}' );

  return res;
};

// var a = sanityClient( {
//   projectId: '39dycnz5',
//   dataset: 'develop',
//   useCdn: false, // `false` if you want to ensure fresh data
// } );
//
// console.log(a)
