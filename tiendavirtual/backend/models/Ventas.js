//Importacion de proceder  manejo de los esquemas y Mongo DB
import mongoose from 'mongoose';

//Funcion de usuarioSchema, con la respectiva descripciones:
const ventaSchema = new mongoose.Schema(
    {
        cliente:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario"
        },
        articulos:{
        type: Array,
        required: true,
        },
        total:{
            type: Number,
            required: true,
            trim: true 
        },
        confirmado:{
        type: Boolean,
        default: false,
        },
        estado:{
            type: String,
            default: "vigente",
        }
    },
    {
        timestamps: true,
    }
);

const Venta = mongoose.model('Venta', ventaSchema);
export default Venta;