module.exports = {
  extends: ["react-app", "react-app/jest", "prettier"],
  rules: {
    "react/react-in-jsx-scope": "off", // React is always in scope with Next
  },
};
