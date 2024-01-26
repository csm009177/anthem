const express = require("express");
const next = require('next');
const mysql = require('mysql2');
const cors = require("cors"); // 추가
const isDev = process.env.NODE_ENV !== 'development';
const app = next({ dev: isDev });
const handle = app.getRequestHandler()


// MariaDB 연결 설정
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "0177",
  database: "anthem",
  port: 3306,
});

app.prepare().then(() => {
  const server = express();
  server.use(cors()); // 추가
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));

  // 로그인 API 엔드포인트
  server.post("/login", (req, res) => {
    const { lyrics } = req.body;

    // 해당 사용자가 존재하는지 확인하는 쿼리
    const query = "SELECT * FROM korean WHERE lyrics = ?";
    connection.query(query, [lyrics], (err, results, fields) => {
      if (err) {
        console.error("Error logging in:", err);
        res.status(500).json({ message: "로그인에 실패했습니다." });
        return;
      }
      // 로그인 성공 여부 확인
      if (results.length > 0) {
        res.status(200).json({ message: "당신은 애국자입니다" });
      } else {
        res.status(401).json({ message: "당신은 매국노입니다" });
      }
    });
  });

  // Next.js 서버에 라우팅 위임
  server.all('*', (req,res) =>{
    return handle(req,res)
  });

  // 서버 시작
  const port = 
  server.listen(3001, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3001');
  });
});