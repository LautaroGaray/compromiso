import path from 'path';
import express from 'express';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';



const app = express();
const port = process.env.PORT || 3000; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.resolve('./');

app.use(express.json());
app.use(express.urlencoded());
app.set('view-engine', 'ejs');
app.use(express.static(__dirname+'/public'));
app.set('views', __dirname+'/public');
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req,res)=>{
    res.render('index.ejs');
});


app.post('/PostMail', (req, res) => {
    try{
        
        const {nombre} = req.body;
        const transporter = nodemailer.createTransport({
            service: "Gmail",
            port:587,
            auth: {
                user: "garaylautaroe10@gmail.com;naty_93_09@hotmail.com",
                pass: "enefofochocwjpgg",
            },
        });

        const mensaje = {
            from: "garaylautaroe10@gmail.com",
            to: "lautagaray_10@hotmail.com",
            subject: "Confirmación de Asistencia",
            text: `¡Hola soy ${nombre}!\n\nConfirmo mi asistencia para vuestro compromiso el día 7 de octubre a las 20:00 pm.\n\n¡Nos preparamos!`,
        };
       
        const info =  transporter.sendMail(mensaje);

       return ;
    } catch (error) {
        console.log(error);
        return error
    };     
    
});

app.get('/Confirmation', (req, res) => {
    
    try{        
        res.render('confirmation.ejs');    
        return;  
       
    } catch (error) {
        console.log(error);
        return error
    };   
   
});


app.listen(port, () => {
    console.log(`Servidor escuchando en puerto :${port}`);
});
