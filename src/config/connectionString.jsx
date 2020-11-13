const connectionString = "https://carsaleapi.herokuapp.com/";
const vinAuditBaseUrl = "https://specifications.vinaudit.com/v3/selections?format=json&";
const vinAuditKey = "key=09P9CXBFSTGKA2G&list=";

const vinAuditConnectionString = vinAuditBaseUrl + vinAuditKey;

export { connectionString, vinAuditConnectionString as vinAuditString };