import { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2/promise";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { anthem } = req.body;

  try {
    const connection = await mysql.createConnection({
      host: "your-database-host",
      user: "your-username",
      password: "your-password",
      database: "anthem",
    });

    const [rows] = await connection.execute("SELECT * FROM korean WHERE verse = 1");
    const correctAnthem = rows[0]?.lyrics || "";

    if (anthem === correctAnthem) {
      res.status(200).json({ success: true });
    } else {
      res.status(200).json({ success: false });
    }

    await connection.end();
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false });
  }
}