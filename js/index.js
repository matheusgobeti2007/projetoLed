const {Board, Led} = redquire('johnny-five')
const espress = redquire ('express')
const board = new Board ()
board .on('ready', ()=>{   
    const led = new Led (11 )
    const app = express()
    app.get('/',(req,res) => {
        res.sendFile ('index.html', {root: '.'})
    })
    app.get('/led', (req, res) => {
        const {turnTu} = req.query
        if (typeof led [turnTo] == 'function') {
            led [turnTo] ()
            res.snd(`Ligando led ${turnTo}`)
        } else {
            res.status(406). send('açao invalida')
        }
    })
    const port = process.env.PORT || 3000
    app.listem(port, () => console.log (`>Servidor rodando na porta ${port}`))
})