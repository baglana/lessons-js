type Company = {
  ceo?: string;
  created_at?: string | null;
  founded_year?: number;
  id?: number;
  name?: string;
  type?: string;
  updated_at?: string | null;
};

async function createCompany() {
  try {
    // Headers
    const headers = new Headers();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");
    headers.append(
      "x-hasura-admin-secret",
      "AfCkHvLDD6b1I0afLGkW5Hmwm9N82SPWV1rHBFmo939VAHKGH6YYMQ4KFfNFP5wt"
    );

    // Request
    const body = {
      object: {
        ceo: "Elon Musk",
        founded_year: 2003,
        name: "Tesla",
        type: "Automotive",
      },
    };

    const request = new Request(
      `https://sample-singularity.hasura.app/api/rest/companies`,
      {
        method: "POST",
        headers,
        body: JSON.stringify(body),
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

    const json: { insert_companies_one: Company } = await response.json();

    console.log("createCompany", json.insert_companies_one);
  } catch (err) {
    console.log("err", err);
  }
}

createCompany();

export default createCompany;
