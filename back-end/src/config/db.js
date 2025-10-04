import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB conectado");
  } catch (err) {
    console.error(`❌ Error al conectar con la base de datos: ${err.message}`);
    process.exit(1); 
  }
};
