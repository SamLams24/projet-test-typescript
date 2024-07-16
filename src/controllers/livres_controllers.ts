import { Request, Response } from 'express';
import { Livre } from '../models/livre';

let livres: Livre[] = [];

export const getLivres = (req: Request, res: Response)=> {
    res.json(livres);
};

export const getLivre = (req: Request, res: Response)=> {
    const livre = livres.find(b => b.id === parseInt(req.params.id));
    if(livre) {
        res.json(livre);
    } else {
        res.status(404).send('Livre Introuvable');
    }

};

export const addLivre = (req:Request, res:Response)=> {
    const newLivre: Livre = {
        id: livres.length + 1,
        title: req.body.title,
        author: req.body.author,
        year: req.body.year
    };
    livres.push(newLivre);
    res.status(201).json(newLivre);
};

export const updateLivre = (req: Request, res: Response) => {
    const livre = livres.find(b => b.id === parseInt(req.params.id));
    if(livre){
        livre.title = req.body.title;
        livre.author = req.body.author;
        livre.year = req.body.year;
        res.json(livre);
    } else {
        res.status(404).send(' Livre Indisponible ');
    }

};

export const deleteLivre = (req:Request, res: Response)=> {
    livres = livres.filter(b => b.id !== parseInt(req.params.id));
    res.status(204).send();
};

