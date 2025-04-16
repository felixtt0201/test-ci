module.exports = {
  extends: ["stylelint-config-standard"],
  overrides: [
    {
      files: ["**/*.vue"],
      customSyntax: "postcss-html",
    },
  ],
};
