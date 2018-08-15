export const sellerLoginEndPoint = 'user/seller/auth';
export const buyerLoginEndPoint = 'user/buyer/auth';
export const getSellerProjects = 'project';



// export const returnInfoEndpoint = 'v2/returninfo';
// export const statusEndpoint = 'v2/status';
//
// // We run wiremock server at https://localhost:8081
// // On TEP 500, Default localhost DNS mappinig is getting resolved to docker container.
// // And there is no DNS mapping for our wiremock server.
// // Hence, we are hardcoding IP address which refer to wiremock server instance on TEP 500.
// export const DOCKER_WIREMOCK_HOST = 'https://172.17.0.1:8081';
//
// const apiKeyMap = {
//     preprod: 'preprdakyresEePs0ql4r2z5z0rVMJPsPmyw9jEq',
//     prod: 'prdakyresa4OHoungwFBoS1MzhnwtRmDNRrL4oBa'
// };
//
// const securityUrlMap = {
//     preprod: 'https://cqa.authkeygen.intuit.com/authkeygen/AuthKeyGenServlet',
//     prod: 'https://authkeygen.intuit.com/authkeygen/AuthKeyGenServlet'
// };
//
// const launchDarklyKeyMap = {
//     dev: '59a74eaba9a1d30b6d0a3deb',
//     qa: '59bffc8242fdd31aa7d894c6',
//     cqa: '59bffc9cf786f45d385979e6',
//     cdev: '59e4f8386e11780b88a732b9',
//     perf: '59e4f8424c4f930ba22153c6',
//     cperf: '59e4f847312d2c0ba1efa7ac',
//     stage: '59e4f84f6e11780b88a732ca',
//     production: '59a74e7ea9a1d30b6d0a3de5'
// };
//
// export const envConfigMap = {
//     production: {
//         securityUrl: securityUrlMap.prod,
//         url: 'https://assisted-tax.api.intuit.com',
//         apiKey: apiKeyMap.prod,
//         launchDarkly: launchDarklyKeyMap.production,
//         filingEndpoint,
//         returnInfoEndpoint,
//         statusEndpoint
//     },
//     perf: {
//         securityUrl: securityUrlMap.preprod,
//         url: 'https://assisted-tax.prf.api.a.intuit.com',
//         apiKey: apiKeyMap.preprod,
//         launchDarkly: launchDarklyKeyMap.perf,
//         filingEndpoint,
//         returnInfoEndpoint,
//         statusEndpoint
//     },
//     dev: {
//         securityUrl: securityUrlMap.preprod,
//         url: 'https://assisted-tax-e2e.api.intuit.com',
//         apiKey: apiKeyMap.preprod,
//         launchDarkly: launchDarklyKeyMap.dev,
//         filingEndpoint,
//         returnInfoEndpoint,
//         statusEndpoint
//     },
//     cqa: {
//         securityUrl: securityUrlMap.preprod,
//         url: 'https://assisted-tax-e2e.api.intuit.com',
//         apiKey: apiKeyMap.preprod,
//         launchDarkly: launchDarklyKeyMap.cqa,
//         filingEndpoint,
//         returnInfoEndpoint,
//         statusEndpoint
//     },
//     local: {
//         securityUrl: securityUrlMap.preprod,
//         url: 'http://local.intuit.com:4000',
//         apiKey: apiKeyMap.preprod,
//         launchDarkly: launchDarklyKeyMap.dev,
//         filingEndpoint,
//         returnInfoEndpoint,
//         statusEndpoint
//     },
//     mockedLocal: {
//         securityUrl: 'https://local.intuit.com:8081/authkeygen/AuthKeyGenServlet',
//         url: 'https://localhost:8081',
//         apiKey: apiKeyMap.preprod,
//         launchDarkly: launchDarklyKeyMap.dev,
//         filingEndpoint,
//         returnInfoEndpoint,
//         statusEndpoint
//     },
//     mockedTEP: {
//         securityUrl: 'https://local.intuit.com:8081/authkeygen/AuthKeyGenServlet',
//         url: DOCKER_WIREMOCK_HOST,
//         apiKey: apiKeyMap.preprod,
//         launchDarkly: launchDarklyKeyMap.dev,
//         filingEndpoint,
//         returnInfoEndpoint,
//         statusEndpoint
//     }
// };
//
// const getEnvConfig = env => envConfigMap[env];
//
// export default getEnvConfig;


