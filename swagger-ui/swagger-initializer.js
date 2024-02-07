function customPlugin() {
  document.getElementById("swagger-ui").innerHTML = '<img src="swagger-ui/logo.svg">';
  console.log(document.querySelectorAll("div.renderedMarkdown"))
}

window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    url: "openapi.yaml",
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      customPlugin,
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout",
    //withCredentials: true,
    requestInterceptor: (request) => {
      //request.credentials = 'include';
      request.headers.authorization = "swagger ui";
      return request;
    }
  });

  //</editor-fold>
};
