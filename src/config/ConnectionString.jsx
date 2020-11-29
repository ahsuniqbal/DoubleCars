// Heroku base url connection string
// const connectionString = "https://carsaleapi.herokuapp.com/";

// Google compute base url connection string
const connectionString = "https://magnetic-flare-280505.uc.r.appspot.com/";

// Vinaudit base url
const vinAuditBaseUrl = "https://specifications.vinaudit.com/v3/selections?format=json&key=";

// Vinaudit paid key
const vinAuditKey = "09P9CXBFSTGKA2G";

// Vinaudit demo key
// const vinAuditKey = "VA_DEMO_KEY";

// Reverse geocde from google map
const ReverseGeoCodeUrl = "https://maps.googleapis.com/maps/api/geocode/json?key=";
const ReverseGeoCodeLatLong = "&result_type=postal_code&latlng=";

// Google api key
const GoogleApiKey = "AIzaSyCxiSu4WWhFpMhN7Zi55WNX5FuB8ot6JA0";


const vinAuditConnectionString = vinAuditBaseUrl + vinAuditKey;
const ReverseGeoCodeConnectionString = ReverseGeoCodeUrl + GoogleApiKey + ReverseGeoCodeLatLong;

export { connectionString, 
    GoogleApiKey,
    vinAuditConnectionString as vinAuditString, 
    ReverseGeoCodeConnectionString as GeoCodeString 
};
