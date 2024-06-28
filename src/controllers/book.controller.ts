import { Request, Response } from "express"

export const createBook = (req: Request, res: Response) => {
  res.send('BOOK created')
}

export const updateBookById = (req: Request, res: Response) => {
  res.send('BOOK UPDATED')
}

export const deleteBookById = (req: Request, res: Response) => {
  res.send('Book deleted')
}

export const getAllBooks = (req: Request, res: Response) => {
  res.send('GET ALL BOOKS')
}