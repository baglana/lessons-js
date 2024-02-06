type Company = {
  ceo?: string;
  created_at?: string | null;
  founded_year?: number;
  id?: number;
  name?: string;
  type?: string;
  updated_at?: string | null;
};

async function fetchCompanies() {
  try {
    const headers = new Headers();
    headers.append("Accept", "application/json");
    headers.append(
      "x-hasura-admin-secret",
      "AfCkHvLDD6b1I0afLGkW5Hmwm9N82SPWV1rHBFmo939VAHKGH6YYMQ4KFfNFP5wt"
    );

    const request = new Request(
      "https://sample-singularity.hasura.app/api/rest/companies",
      {
        headers,
      }
    );

    const response = await fetch(request);

    if (!response.ok) {
      await Promise.reject(
        new Error(
          `error fetching companies: ${response.status} - ${response.statusText}`
        )
      );
    }

    const json: { companies: Company[] } = await response.json();

    console.log(json);
  } catch (err) {
    console.log({ err });
  }
}

async function fetchCompany(id: number) {
  try {
    const headers = new Headers();
    headers.append("Accept", "application/json");
    headers.append(
      "x-hasura-admin-secret",
      "AfCkHvLDD6b1I0afLGkW5Hmwm9N82SPWV1rHBFmo939VAHKGH6YYMQ4KFfNFP5wt"
    );

    const request = new Request(
      `https://sample-singularity.hasura.app/api/rest/companies/${id}`,
      {
        method: "GET",
        headers,
      }
    );

    const response = await fetch(request);

    if (!response.ok) {
      await Promise.reject(
        new Error(
          `error fetching company :${id}: ${response.status} - ${response.statusText}`
        )
      );
    }

    const json: { companies_by_pk: Company } = await response.json();

    console.log(json.companies_by_pk);
  } catch (err) {
    console.log({ err });
  }
}

async function createCompany() {
  try {
    const headers = new Headers();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");
    headers.append(
      "x-hasura-admin-secret",
      "AfCkHvLDD6b1I0afLGkW5Hmwm9N82SPWV1rHBFmo939VAHKGH6YYMQ4KFfNFP5wt"
    );

    const body = {
      object: {
        ceo: "Elon Musk",
        founded_year: 2003,
        name: "Tesla",
        type: "Automotive",
      },
    };

    const request = new Request(
      "https://sample-singularity.hasura.app/api/rest/companies",
      {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      }
    );

    const response = await fetch(request);

    if (!response.ok) {
      await Promise.reject(
        new Error(
          `error creating company: ${response.status} - ${response.statusText}`
        )
      );
    }

    const json: { insert_companies_one: Company } = await response.json();

    console.log(json.insert_companies_one);
  } catch (err) {
    console.log({ err });
  }
}

// createCompany();

async function updateCompany(id: number) {
  try {
    const headers = new Headers();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");
    headers.append(
      "x-hasura-admin-secret",
      "AfCkHvLDD6b1I0afLGkW5Hmwm9N82SPWV1rHBFmo939VAHKGH6YYMQ4KFfNFP5wt"
    );

    const body = {
      object: {
        ceo: "John Doe",
      },
    };

    const request = new Request(
      `https://sample-singularity.hasura.app/api/rest/companies/${id}`,
      {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      }
    );

    const response = await fetch(request);

    if (!response.ok) {
      await Promise.reject(
        new Error(
          `error in response: ${response.status} - ${response.statusText}}`
        )
      );
    }

    const json: { update_companies_by_pk: Company } = await response.json();

    console.log(json.update_companies_by_pk);
  } catch (err) {
    console.log({ err });
  }
}

async function deleteCompany(id: number) {
  try {
    const headers = new Headers();
    headers.append("Accept", "application/json");
    headers.append(
      "x-hasura-admin-secret",
      "AfCkHvLDD6b1I0afLGkW5Hmwm9N82SPWV1rHBFmo939VAHKGH6YYMQ4KFfNFP5wt"
    );

    const request = new Request(
      `https://sample-singularity.hasura.app/api/rest/companies/${id}`,
      {
        method: "DELETE",
        headers,
      }
    );

    const response = await fetch(request);

    if (!response.ok) {
      await Promise.reject(
        new Error(
          `error in response: ${response.status} - ${response.statusText}}`
        )
      );
    }

    const json: { delete_companies_by_pk: Company } = await response.json();

    console.log(json.delete_companies_by_pk);
  } catch (err) {
    console.log({ err });
  }
}

fetchCompanies();
// deleteCompany(19);
// createCompany();
