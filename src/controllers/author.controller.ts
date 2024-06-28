import { Request, Response } from "express";

export const createAuthor = (req: Request, res: Response) => {
  // recuperar la informacion de la req
  console.log(req.body);
  console.log(req.body.name);
  console.log(req.body.nationality);

  res.json(
    {
      success: true,
      message: 'CREATE AUTHOR'
    }
  )
}

export const updateAuthorById = (req: Request, res: Response) => {
  console.log(req.params.id);
  
  res.send(`AUTHOR UPDATED with id: ${req.params.id}`)
}

export const deleteUserById = (req: Request, res: Response) => {
  res.send(`AUTHOR DELETED BY ID ${req.params.id}`)
}