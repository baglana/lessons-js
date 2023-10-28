type Company = {
  ceo?: string;
  created_at?: string | null;
  founded_year?: number;
  id?: number;
  name?: string;
  type?: string;
  updated_at?: string | null;
};

async function fetchAllCompanies() {
  try {
    // Headers
    const headers = new Headers();
    headers.append("Accept", "application/json");
    headers.append(
      "x-hasura-admin-secret",
      "AfCkHvLDD6b1I0afLGkW5Hmwm9N82SPWV1rHBFmo939VAHKGH6YYMQ4KFfNFP5wt"
    );

    // Request
    const request = new Request(
      "https://sample-singularity.hasura.app/api/rest/companies",
      {
        headers,
      }
    );

    // Response
    const response = await fetch(request);

    if (!response.ok) {
      await Promise.reject(
        new Error(
          `error in response ${response.status} - ${response.statusText}`
        )
      );
    }

    const json: { companies: Company[] } = await response.json();

    console.log("fetchAllCompanies", json.companies[0].id);
  } catch (err) {
    console.log("err", err);
  }
}

fetchAllCompanies();

export default fetchAllCompanies;
