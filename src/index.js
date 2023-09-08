const { app } = require("./app");
const port = process.eventNames.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost/:${port}`);
});
