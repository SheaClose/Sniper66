require("dotenv").config();
const express = require("express"),
  bodyParser = require("body-parser"),
  port = process.env.PORT || 3003,
  app = express(),
  path = require("path"),
  sg = require("sendgrid")(process.env.SENDGRID_API_KEY);
console.log("NODE_ENV: ", process.env.NODE_ENV);

app.use(express.static(path.join(__dirname + "/../build")));
app.use(bodyParser.json());

app.post(
  "/api/contact",
  ({ body: { contentBody, contactName, contactEmail } }, res) => {
    let { NODE_ENV } = process.env;
    console.log(' NODE_ENV !== "production": ', NODE_ENV !== "production");

    const request = sg.emptyRequest({
      method: "POST",
      path: "/v3/mail/send",
      body: {
        personalizations: [
          {
            to: [
              {
                email:
                  NODE_ENV !== "production"
                    ? "sheaclose@gmail.com"
                    : "sniper66band@gmail.com"
              }
            ],
            subject: `New Contact message frm Sniper66.com`
          }
        ],
        from: {
          email: contactEmail
        },
        content: [
          {
            type: "text/plain",
            value: `From: ${contactName}.
            
            ${contentBody}`
          }
        ]
      }
    });
    sg.API(request, function(error, response) {
      res.status(200).json(response);
    });
  }
);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/../build"));
});

app.listen(port, () => {
  console.log("Server listening on port", port);
});
