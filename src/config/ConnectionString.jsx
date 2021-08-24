// Heroku base url connection string

// const connectionString = "https://doublecarsnode.herokuapp.com/";
const connectionString = "https://dcproduction.herokuapp.com/";

// const connectionString = "http://localhost:3002/";

// Vinaudit base url
const vinAuditBaseUrl = "https://specifications.vinaudit.com/v3/selections?format=json&key=";

// Vinaudit paid key
const vinAuditKey = "W6ORUU5YI7HAPXH";

// Vinaudit demo key
// const vinAuditKey = "VA_DEMO_KEY";

// Reverse geocde from google map
const ReverseGeoCodeUrl = "https://maps.googleapis.com/maps/api/geocode/json?key=";
const ReverseGeoCodeLatLong = "&result_type=postal_code&latlng=";

// Google api key
const GoogleApiKey = "AIzaSyByziDZpcK8k1jtGjIt1oEOaGWRRuhbyK4";


const vinAuditConnectionString = vinAuditBaseUrl + vinAuditKey;
const ReverseGeoCodeConnectionString = ReverseGeoCodeUrl + GoogleApiKey + ReverseGeoCodeLatLong;

export { connectionString, 
    GoogleApiKey,
    vinAuditConnectionString as vinAuditString, 
    ReverseGeoCodeConnectionString as GeoCodeString 
};
