// const connectionString = "https://carsaleapi.herokuapp.com/";
const connectionString = "https://magnetic-flare-280505.uc.r.appspot.com/";
const vinAuditBaseUrl = "https://specifications.vinaudit.com/v3/selections?format=json&";
// const vinAuditKey = "key=09P9CXBFSTGKA2G&list=";
const vinAuditKey = "key=VA_DEMO_KEY&list=";

const ReverseGeoCodeUrl = "https://maps.googleapis.com/maps/api/geocode/json?key=";
const ReverseGeoCodeApi = "AIzaSyCSQ8v_269843uhaQ0hI9uBccotpA2gKYk";
const ReverseGeoCodeLatLong = "&result_type=postal_code&latlng=";

const vinAuditConnectionString = vinAuditBaseUrl + vinAuditKey;
const ReverseGeoCodeConnectionString = ReverseGeoCodeUrl + ReverseGeoCodeApi + ReverseGeoCodeLatLong;

export { connectionString, 
    vinAuditConnectionString as vinAuditString, 
    ReverseGeoCodeConnectionString as GeoCodeString 
};