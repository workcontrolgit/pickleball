// `.env.ts` is generated by the `npm run env` command
// `npm run env` exposes environment variables as JSON for any usage you might
// want, like displaying the version or getting extra config from your CI bot, etc.
// This is useful for granularity you might need beyond just the environment.
// Note that as usual, any environment variables you expose through it will end up in your
// bundle, and you should not use it for any sensitive information like passwords or keys.
import { env } from './.env';

export const environment = {
  production: true,
  version: env.npm_package_version,
  serverUrl: '/api',
  defaultLanguage: 'en-US',
  supportedLanguages: ['en-US'],
  loadSampleData: false,
  //REST API server
  apiEndpoint: 'https://mickleball-netcore-api.azurewebsites.net/api/v1',
  //Api_Endpoint: 'https://cat-netcore-api.azurewebsites.net/api/v1',
  //Api_Endpoint: 'https://mickleball-netcore-api.azurewebsites.net/api/v1',
  apiMockEndpoint: 'https://angular-datatables-demo-server.herokuapp.com',

  evaluationInstruction: {
    level20:
      '<div class="alert alert-success"><h4>Section 2 - Skill Evaluation</h4><span class="fw-normal">Select a rating for each skill code.</span><p><div>A = Solid, consistent performance <br>B = Good basic form, but needs work <br> C = Attempted but very poorly executed/needs work <br>D = Not observed or not able to execute </div></p></div>',
    level25:
      '<div class="alert alert-success"><h4>Section 2 - Skill Evaluation</h4><span class="fw-normal">Select a rating for each skill code.  Skill level 2.5 should ALSO possess all 2.0 skills.</span><p><div>A = Solid, consistent performance <br>B = Good basic form, but needs work <br> C = Attempted but very poorly executed/needs work <br>D = Not observed or not able to execute </div></p></div>',
    level30:
      '<div class="alert alert-success"><h4>Section 2 - Skill Evaluation</h4><span class="fw-normal">Select a rating for each skill code.  Skill level 3.0 should ALSO possess all 2.5 skills.</span><p><div>A = Solid, consistent performance <br>B = Good basic form, but needs work <br> C = Attempted but very poorly executed/needs work <br>D = Not observed or not able to execute </div></p></div>',
    level35:
      '<div class="alert alert-success"><h4>Section 2 - Skill Evaluation</h4><span class="fw-normal">Select a rating for each skill code.  Skill level 3.5 should ALSO possess all 3.0 skills.</span><p><div>A = Solid, consistent performance <br>B = Good basic form, but needs work <br> C = Attempted but very poorly executed/needs work <br>D = Not observed or not able to execute </div></p></div>',
    level40:
      '<div class="alert alert-success"><h4>Section 2 - Skill Evaluation</h4><span class="fw-normal">Select a rating for each skill code.  Skill level 4.0 should ALSO possess all 3.5 skills.</span><p><div>A = Solid, consistent performance <br>B = Good basic form, but needs work <br> C = Attempted but very poorly executed/needs work <br>D = Not observed or not able to execute </div></p></div>',
    level45:
      '<div class="alert alert-success"><h4>Section 2 - Skill Evaluation</h4><span class="fw-normal">Select a rating for each skill code.  Skill level 4.5 should ALSO possess all 4.0 skills.</span><p><div>A = Solid, consistent performance <br>B = Good basic form, but needs work <br> C = Attempted but very poorly executed/needs work <br>D = Not observed or not able to execute </div></p></div>',
    level50:
      '<div class="alert alert-success"><h4>Section 2 - Skill Evaluation</h4><span class="fw-normal">Select a rating for each skill code.  Skill level 5.0 should ALSO possess all 4.5 skills.</span><p><div>A = Solid, consistent performance <br>B = Good basic form, but needs work <br> C = Attempted but very poorly executed/needs work <br>D = Not observed or not able to execute </div></p></div>',
  },
  // skills list in googlesheet
  googleSheet: {
    apiKey: 'AIzaSyC3AgyGHXMyj8j-iFZ4ucrenprWrZm0VKI',
    spreadsheetId: '17zEoQvmjqBHoDykjxgun4upXg5QT6KooHnuAp_wXmac',
    worksheetGrades: 'Grades',
    worksheetSkills: 'Skills',
  },
  // training video search in youtube
  youtube: {
    apiUrl: 'https://www.googleapis.com/youtube/v3/search',
    apiKey: 'AIzaSyAq9W0tD3SJxtn6RE0aUcBseMMz_WcKhAU',
    maxResults: 10,
  },

  //IdentityServer/OIDC Configuration

  oidc: {
    // issuer: 'https://localhost:44310', // running on localhost
    // issuer: 'https://cat-token-identity.azurewebsites.net', // demo identityserver in Azure
    issuer: 'https://cat-token-identity.azurewebsites.net', // identityserver in Azure
    clientId: 'MickleballClient', // client id setup in IdentityServer4
    responseType: 'code', //code flow PKCE
    redirectUri: window.location.origin + '/auth-callback',
    postLogoutRedirectUri: window.location.origin,
    silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
    scope: 'openid profile email roles app.api.employeeprofile.read', // Ask offline_access to support refresh token refreshes
    useSilentRefresh: true, // Needed for Code Flow to suggest using iframe-based refreshes
    silentRefreshTimeout: 50000, // For faster testing
    timeoutFactor: 0.25, // For faster testing
    sessionChecksEnabled: false,
    showDebugInformation: false, // Also requires enabling "Verbose" level in devtools
    clearHashAfterLogin: false, // https://github.com/manfredsteyer/angular-oauth2-oidc/issues/457#issuecomment-431807040,
    nonceStateSeparator: 'semicolon', // Real semicolon gets mangled by IdentityServer's URI encoding
  },
  sampleModel40: {
    level: '4.0',
    playername: 'Fuji Nguyen',
    playeremail: 'fuji.nguyen@workcontrol.com',
    assessmentDate: '2022-10-24',
    '40-1': 'D',
    '40-2': 'A',
    '40-3': 'A',
    '40-4': 'A',
    '40-5': 'A',
    '40-6': 'A',
    '40-7': 'A',
    '40-8': 'A',
    '40-9': 'A',
    '40-10': 'A',
    '40-11': 'A',
    '40-12': 'D',
    '40-13': 'A',
    '40-14': 'B',
    '40-15': 'A',
    '40-16': 'A',
    '40-17': 'A',
    '40-18': 'A',
    '40-19': 'B',
    '40-20': 'A',
    '40-21': 'A',
    '40-22': 'C',
    evaluatorname: 'Emily Nguyen',
    evaluatoremail: 'emily@gmail.com',
    Notes: 'Lefty user',
    terms: true,
  },
};
