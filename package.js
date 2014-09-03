Package.describe({
  summary: "node-magentojs npm packaged for meteor.",
  version: "0.0.2",
  git: "https://github.com/aaronthorp/meteor-magentojs.git",
  name: "aaronthorp:meteorjs"
});

Package.on_use(function (api) {
  if (api.versionsFrom) {
    api.versionsFrom("METEOR@0.9.0");
  }

  api.addFiles(["lib/magentojs.js"], "server");

  if (typeof api.export !== "undefined") {
    api.export("MagentoJS", "server");
  }
});

Npm.depends({"magentojs":"0.0.2"});
