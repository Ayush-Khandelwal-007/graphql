const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors"); 
const ApolloServer = require("react-apollo")


const app = express();



const corsOptions = {
    origin(origin, callback) {
        callback(null, true);
    },
    credentials: true
};

app.use(cors(corsOptions));

mongoose.connect("mongodb+srv://Ayush:ayush121006@graphql.fouue.mongodb.net/GraphQL?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connection.once("open", () => {
    console.log("conected to database ");
})

app.use(
    '/graphql', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
        graphqlHTTP({
            schema,
            graphiql: true,
        })(req, res);
    },
);

app.listen(4010, () => {
    console.log("Listening at port 4010")
})
