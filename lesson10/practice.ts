type Company = {
  ceo: string;
  created_at: string;
  founded_year: number;
  id: number;
  name: string;
  type: string;
  updated_at: string;
};

async function fetchAllCompanies() {
  try {
    // Headers
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
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
        new Error(`error in response ${response.statusText}`)
      );
    }

    const json: { companies: Company } = await response.json();

    console.log("fetchAllCompanies", json);
  } catch (err) {
    console.log("err", err);
  }
}

fetchAllCompanies();
