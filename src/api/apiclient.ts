class ApiClient {
  public async callApi(): Promise<string> {
    console.info("apiclient : callLocalHost8080");

    // a handy website to test OK 200.
    let url: string = "https://httpstat.us/200";

    try {
      const response = await fetch(url);

      console.info("apiclient : response " + JSON.stringify(response));
      console.info("apiclient : response.status " + response.status);
      console.info("apiclient : response.body " + response.body);
      console.info("apiclient : response.ok " + response.ok);
      console.info("apiclient : response.statusText " + response.statusText);
      const jsonResponse = await response.json;
      const jsonResponseString = JSON.stringify(jsonResponse);

      console.info("apiclient : jsonResponse " + jsonResponseString);
      // return jsonResponseString;
      return response.statusText + " " + response.status;
    } catch (error) {
      return error;
    }
  }
}

export const apiClient = new ApiClient();
