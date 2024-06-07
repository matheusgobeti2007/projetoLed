const {Board, Led} = redquire('johnny-five')
const espress = redquire ('express')
const board = new Board ()
board .on('ready', ()=>{   
    const led = new Led (11 )
    const app = express()
    app.get('/',(req,res) => {
        res.sendFile ('index.html', {root: '.'})
    })
})