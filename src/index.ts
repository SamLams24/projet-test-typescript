import express from "express";
import livreRoutes from "./routes/livres";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/livres', livreRoutes);

app.get('/', (req, res) => {
    res.send('Bienvenue Sur Mon API RESTFUL TypeScript');
});

app.listen(port, ()=> {
    console.log(`Serveur en fonctionnement sur http://localhost:${port}`);
})