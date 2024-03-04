// import app from "./app"
import dbConnect from "./db/index.js"
import app from "./app.js"

dbConnect()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is listening on port:- ${process.env.PORT}`)
    });
})
.catch((err)=>{
    console.log(`server not listening on port:- ${err}`);
});


