import express from 'express';
import path from 'path';
import routes from "./src/routes/routes"
import apiRoutes from "./src/routes/routes"
const app = express();

app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);
app.use('/', apiRoutes);

const port= 3000;

app.listen(port, ()=>{
    console.log(`Listening on port: ${port}`)
});