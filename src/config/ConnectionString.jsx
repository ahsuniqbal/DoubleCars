// const connectionString = "https://carsaleapi.herokuapp.com/";
const connectionString = "https://magnetic-flare-280505.uc.r.appspot.com/";
const vinAuditBaseUrl = "https://specifications.vinaudit.com/v3/selections?format=json&";
const vinAuditKey = "key=09P9CXBFSTGKA2G&list=";
// const vinAuditKey = "key=VA_DEMO_KEY&list=";

const ReverseGeoCodeUrl = "https://maps.googleapis.com/maps/api/geocode/json?key=";
const GoogleApiKey = "AIzaSyCxiSu4WWhFpMhN7Zi55WNX5FuB8ot6JA0";
const ReverseGeoCodeLatLong = "&result_type=postal_code&latlng=";

const vinAuditConnectionString = vinAuditBaseUrl + vinAuditKey;
const ReverseGeoCodeConnectionString = ReverseGeoCodeUrl + GoogleApiKey + ReverseGeoCodeLatLong;

export { connectionString, 
    GoogleApiKey,
    vinAuditConnectionString as vinAuditString, 
    ReverseGeoCodeConnectionString as GeoCodeString 
};
