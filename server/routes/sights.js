const client = require( '../request/_request' );

// const [ lang ] = JSON.parse( process.env.LANGS );

const api = async () => {
  const response = await Promise.all( [
    client(),
  ] );

  // console.log(response)

  return response;
};

const action = async ( context, params ) => {
  const _api = await api();

  return {
    title: 'Письмо успешно отправлено',
    page: 'sights',
    meta: { noIndex: true },
    params,
    api: _api,
  }
};

module.exports = action;
