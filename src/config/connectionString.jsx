// const connectionString = "https://carsaleapi.herokuapp.com/";
const connectionString = "https://magnetic-flare-280505.uc.r.appspot.com/";
const vinAuditBaseUrl = "https://specifications.vinaudit.com/v3/selections?format=json&";
// const vinAuditKey = "key=09P9CXBFSTGKA2G&list=";
const vinAuditKey = "key=VA_DEMO_KEY&list=";

const vinAuditConnectionString = vinAuditBaseUrl + vinAuditKey;

export { connectionString, vinAuditConnectionString as vinAuditString };