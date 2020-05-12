// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  stateDistrictDataurl : 'https://api.covid19india.org/state_district_wise.json',
  dataUrl : 'https://api.covid19india.org/data.json',
  rawDataUrl : 'https://api.covid19india.org/raw_data.json',
  zoneDataUrl : 'https://api.covid19india.org/zones.json',
  resourcesUrl : 'https://api.covid19india.org/resources/resources.json'

};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
