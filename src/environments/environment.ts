export const environment = {
  production: false,
  apiServerUrl: 'https://casting-agency-fsnd-20.herokuapp.com', // the running FLASK api server url
  auth0: {
    url: 'falkhotaifi.us', // the auth0 domain prefix
    audience: 'castingAgency', // the audience set for the auth0 app
    clientId: '7Hb68nHByGHlvkkRBfOU0NbZQh3bwOCj', // the client id generated for the auth0 app
    callbackURL: 'https://casting-agnecy-web-fsnd-20.herokuapp.com/', // the base url of the running ionic application. 
  }
};
