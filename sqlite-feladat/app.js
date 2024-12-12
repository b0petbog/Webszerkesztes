import express from "express"
import sqlite3 from 'sqlite3'
import swaggerUi from 'swagger-ui-express'
import { readFile } from 'fs/promises'

const app = express()
const db = new sqlite3.Database("./database.sqlite")
const swaggerDocument = JSON.parse(await readFile(new URL('./swagger-output.json', import.meta.url)))

let users = [
    {
      firstName: "Imre",
      lastName: "Nagy",
      email: "imrebaba99@gmai.com",
      address: 'Nagykanizsa, Szegfű utca 44'
    },
    {
      firstName: "Rebeka",
      lastName: 'Mészáros',
      email: "apupicihercegnoje@gmail.com",
      address: 'Ináncs, Vízöntő utca 13.'
    }
]

db.serialize(() => {
    db.run("DROP TABLE IF EXISTS users")
    db.run("CREATE TABLE users (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, firstName TEXT, lastName TEXT, address TEXT)")

    for (const u of users) {
        db.run("INSERT INTO users (firstName, lastName, email, address) VALUES (?, ?, ?, ?)", [u.firstName, u.lastName, u.email, u.address])
    }
})

app.use(express.json())
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.get('/', (req, res) => {
    res.send('Szius! <3')
})

app.get('/api/users', (req, res) => {
    db.all("SELECT * FROM users", (error, data) => {
        if(error) {
            console.log(error)
        }

        res.json(data)
    })
})

app.get('/api/users/:id', (req, res) => {
    const id = req.params.id
    
    db.get("SELECT * FROM users WHERE id = ?", id, (error, data) => {
        if(error) {
            return res.status(500).json({error: error.message})
        }

        if(!data) {
            return res.status(404).json({error: "User not found!"})
        }
        res.status(200).json(data)
    })
})

app.post('/api/users', (req, res) => {
    db.run("INSERT INTO users (firstName, lastName, email, address) VALUES (?, ?, ?, ?)", [
        req.body.firstName,
        req.body.lastName,
        req.body.email,
        req.body.address
    ], function(error) {
        if(error) {
            return res.status(500).json({ error: error.message })
        }
        res.status(201).json({
            id: this.lastID,
            ...req.body
        })
    })
})

app.put('/api/users/:id', (req, res) => {
    const id = req.params.id
    db.get("SELECT * FROM users WHERE id = ?", id, (error, data) => {
        if(error) {
            return res.status(500).json({error: error.message})
        }
        if(!data) {
            return res.status(404).json({error: "User not found!"})
        }
        
        db.run("UPDATE users SET firstName = ?, lastName = ?, email = ?, address = ? WHERE id = ?",
            [
                req.body.firstName,
                req.body.lastName,
                req.body.email,
                req.body.address,
                id
            ],
            function(err) {
                if(err) {
                    return res.status(500).json({ error: err.message })
                }
                res.status(200).json({ id: id, ...req.body })
            }
        )
    })
})

app.delete('/api/users/:id', (req, res) => {
    const id = req.params.id

    db.get("SELECT * FROM users WHERE id = ?", id, (error, data) => {
        if(error) {
            return res.status(500).json({ error: error.message })
        }
        if(!data) {
            return res.status(404).json({ message: "User not found." })
        }

        db.run("DELETE FROM users WHERE id = ?", id, function(err) {
            if(err) {
                return res.status(500).json({ error: err })
            }
            res.sendStatus(204)
        })
    })
})

app.listen(3000)