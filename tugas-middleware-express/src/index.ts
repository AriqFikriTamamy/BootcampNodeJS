import express, { Request, Response } from "express";
import apiRoutes from "./routes/api";

const PORT = 3000;

function init() {
  const app = express();
  app.use(express.json()); // Tambahkan middleware untuk mem-parsing JSON
  app.use(express.urlencoded({ extended: true })); // Middleware untuk form data
  app.use("/api", apiRoutes); // Gunakan rute API
  app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
      message: "OK",
      data: null,
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

init();
