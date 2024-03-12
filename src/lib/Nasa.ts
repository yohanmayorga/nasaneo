const NASA_API =
  "https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-01&end_date=2015-09-08&api_key=DEMO_KEY";

export async function getNeo() {
  const response = await fetch(NASA_API);
  const data = await response.json();
  return data.near_earth_objects;
}
