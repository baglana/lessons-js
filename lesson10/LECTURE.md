# Lesson 10: API & Fetch

## API

Application Programming Interfaces (APIs) are constructs made available in programming languages to allow developers to
create complex functionality more easily. They abstract more complex code away from you, providing some easier syntax to
use in its place.

![diagram](API-Blog-Hero-banner-@2x.png)

### APIs in client-side JavaScript

- JavaScript — A high-level scripting language built into browsers that allows you to implement functionality on web
  pages/apps. Note that JavaScript is also available in other programming environments, such as Node.
- Browser APIs — constructs built into the browser that sits on top of the JavaScript language and allows you to
  implement functionality more
  easily. [Manipulating documents](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents),
  [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), [WebRTC](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API),
  [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
- Third-party APIs — constructs built into third-party platforms (e.g. [Twitter](https://developer.twitter.com/en/docs),
  [Facebook](https://developers.facebook.com/docs/)) that allow you to use some of those platform's functionality in
  your own web pages (for example, display your latest Tweets on your web page).
- JavaScript libraries — Usually one or more JavaScript files containing custom functions that you can attach to your
  web page to speed up or enable writing common functionality. Examples
  include [jQuery](https://jquery.com/), [Mootools](https://mootools.net/) and [React](https://react.dev/).
- JavaScript frameworks — The next step up from libraries, JavaScript frameworks (e.g. [Angular](https://angular.io/)
  and [Ember](https://emberjs.com/)) tend to be packages of HTML, CSS, JavaScript, and other technologies that you
  install and then use to write an entire web application from scratch. The key difference between a library and a
  framework is "Inversion of Control". When calling a method from a library, the developer is in control. With a
  framework, the control is inverted: the framework calls the developer's code.

## HTTP

HTTP is a protocol for fetching resources such as HTML documents. It is the foundation of any data exchange on the Web
and it is a client-server protocol, which means requests are initiated by the recipient, usually the Web browser. A
complete document is reconstructed from the different sub-documents fetched, for instance, text, layout description,
images, videos, scripts, and more.

![diagram](fetching_a_page.png)

_Reference_: [Overview](https://developer.mozilla.org/en-US/docs/Web/HTTP)

### HTTP connection management

![diagram](image.jpg)

_Reference_: [HTTP2 vs HTTP3](https://gcore.com/learning/what-is-http-3/), [HTTP2 compare HTTP3](https://kiwee.eu/blog/http-3-how-it-performs-compared-to-http-2/)

### HTTP Messages

#### Request

![diagram](http_request.png)

- An HTTP [method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods), usually a verb
  like [GET](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET), [POST](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST),
  or a noun like [OPTIONS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/OPTIONS)
  or [HEAD](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/HEAD) that defines the operation the client wants
  to perform. Typically, a client wants to fetch a resource (using `GET`) or post the value of an HTML form (
  using `POST`), though more operations may be needed in other cases.
- The path of the resource to fetch; the URL of the resource stripped from elements that are obvious from the context,
  for example without the [protocol](https://developer.mozilla.org/en-US/docs/Glossary/Protocol) (`http://`), the
  [domain](https://developer.mozilla.org/en-US/docs/Glossary/Domain) (here, `developer.mozilla.org`), or the
  TCP [port](https://developer.mozilla.org/en-US/docs/Glossary/Port) (here, 80).
- The version of the HTTP protocol.
- Optional [headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers) that convey additional information for
  the servers.
- A body, for some methods like `POST`, similar to those in responses, which contain the resource sent.

#### Response

![diagram](http_response.png)

- The version of the HTTP protocol they follow.
- A [status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status), indicating if the request was successful or
  not, and why.
- A status message, a non-authoritative short description of the status code.
- HTTP [headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers), like those for requests.
- Optionally, a body containing the fetched resource.

_Reference_: [HTTP Messages](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages)

## Fetch API

The `Fetch API` is a relatively new web browser feature but builds on older technologies such as `AJAX`.

**AJAX** stands for **Asynchronous JavaScript and XML**. It was the first widely adopted technology to allow websites to
send requests without needing to reload the entire page. Before AJAX, if you wanted to update something on your web
page, you would need to reload the entire page - which was clunky and inefficient.

AJAX allowed developers to make HTTP requests without needing a full-page refresh. This technology revolutionized web
development, but it had its limitations. AJAX requests were limited to retrieving data from the same origin (
domain/subdomain) as the page requested.

The Fetch API uses [Request](https://developer.mozilla.org/en-US/docs/Web/API/Request)
and [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) objects (and other things involved with
network requests), as well as related concepts such as CORS and the HTTP Origin header semantics.

### fetch()

The global `fetch()` method starts the process of fetching a resource from the network, returning a promise which is
fulfilled once the response is available.

A `fetch()` promise only rejects when a network error is encountered (which is usually when there's a permissions issue
or similar). A `fetch()` promise **does not reject on HTTP errors** (404, etc.). Instead, a `then()` handler must check
the `Response.ok` and/or `Response.status` properties.

```ts
fetch("https://user:password@example.com/");
```

_Reference_: [More](https://developer.mozilla.org/en-US/docs/Web/API/fetch)

### Headers

The `Headers` interface of the Fetch API allows you to perform various actions on HTTP request and response headers.
These actions include retrieving, setting, adding to, and removing headers from the list of the request's headers.

For security reasons, some headers can only be controlled by the user agent. These headers include
the [forbidden header names](https://developer.mozilla.org/en-US/docs/Glossary/Forbidden_header_name)
and [forbidden response header](https://developer.mozilla.org/en-US/docs/Glossary/Forbidden_response_header_name) names.

```ts
const myHeaders = new Headers();

myHeaders.append("Content-Type", "text/xml");
myHeaders.get("Content-Type"); // should return 'text/xml'
```

_Reference_: [More](https://developer.mozilla.org/en-US/docs/Web/API/Headers)

### Request

The `Request` interface of the Fetch API represents a resource request.

You can create a new `Request` object using the `Request()` constructor, but you are more likely to encounter
a `Request` object being returned as the result of another API operation, such as a service worker `FetchEvent.request`.

```ts
const request = new Request("https://example.com", {
  method: "POST",
  body: '{"foo": "bar"}',
});

fetch(request)
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error("Something went wrong on API server!");
    }
  })
  .then((response) => {
    console.debug(response);
    // …
  })
  .catch((error) => {
    console.error(error);
  });
```

_Reference_: [More](https://developer.mozilla.org/en-US/docs/Web/API/Request)

### Response

The `Response` interface of the Fetch API represents the response to a request.

You can create a new `Response` object using the `Response()` constructor, but you are more likely to encounter a
`Response` object being returned as the result of another API operation—for example, a service worker
`FetchEvent.respondWith`, or a simple `fetch()`.

```ts
// Function to do an Ajax call
const doAjax = async () => {
  const response = await fetch("Ajax.php"); // Generate the Response object
  if (response.ok) {
    return response.json(); // Get JSON value from the response body
  }
  throw new Error("*** PHP file not found");
};

// Call the function and output value or error message to console
doAjax().then(console.log).catch(console.log);
```

_Reference_: [More](https://developer.mozilla.org/en-US/docs/Web/API/Response)

## Examples:

### 1

Send `GET` request to `https://sample-singularity.hasura.app/api/rest/companies`. In order to fetch all companies info.

**Don't forget about Headers.**

Response sample

```json
{
  "companies": [
    {
      "ceo": "string",
      "created_at": null,
      "founded_year": 0,
      "id": 0,
      "name": "string",
      "type": "string",
      "updated_at": null
    }
  ]
}
```

### 2

Send `GET` request to `https://sample-singularity.hasura.app/api/rest/companies/:id`. In order to fetch a single company
info.

**Don't forget about Headers.**

Response sample

```json
{
  "companies_by_pk": {
    "ceo": "string",
    "created_at": null,
    "founded_year": 0,
    "id": 0,
    "name": "string",
    "type": "string",
    "updated_at": null
  }
}
```

### 3

Send `POST` request to `https://sample-singularity.hasura.app/api/rest/companies`. In order to add a single company
info.

**Don't forget about Headers.**

Request sample

```json
{
  "object": {
    "ceo": "string",
    "created_at": null,
    "founded_year": 0,
    "id": 0,
    "name": "string",
    "type": "string",
    "updated_at": null
  }
}
```

Response sample

```json
{
  "insert_companies_one": {
    "ceo": "string",
    "created_at": null,
    "founded_year": 0,
    "id": 0,
    "name": "string",
    "type": "string",
    "updated_at": null
  }
}
```

### 4

Send `PATCH` request to `https://sample-singularity.hasura.app/api/rest/companies/:id`. In order to update a single
company info.

**Don't forget about Headers.**

Request sample

```json
{
  "object": {
    "ceo": "string",
    "created_at": null,
    "founded_year": 0,
    "id": 0,
    "name": "string",
    "type": "string",
    "updated_at": null
  }
}
```

Response sample

```json
{
  "update_companies_by_pk": {
    "ceo": "string",
    "created_at": null,
    "founded_year": 0,
    "id": 0,
    "name": "string",
    "type": "string",
    "updated_at": null
  }
}
```

### 5

Send `DELETE` request to `https://sample-singularity.hasura.app/api/rest/companies/:id`. In order to update a single
company info.

**Don't forget about Headers.**

Response sample

```json
{
  "delete_companies_by_pk": {
    "ceo": "string",
    "created_at": null,
    "founded_year": 0,
    "id": 0,
    "name": "string",
    "type": "string",
    "updated_at": null
  }
}
```
