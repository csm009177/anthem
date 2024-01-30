
const express = require("express");
const next = require('next');
const mysql = require('mysql2');
const isDev = process.env.NODE_ENV !== 'development';
const app = next({ dev: isDev });
const handle = app.getRequestHandler();


// 로그인 토큰 발행을 위한 import
const jwt = require('jsonwebtoken');  //
const crypto = require('crypto');     // 보안 관련 작업을 수행하는 모듈
const secretKey = crypto.randomBytes(32).toString('hex');
 
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
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));

  // 로그인 API 엔드포인트
  server.post("/login", (req, res) => {
    const { lyrics } = req.body;

    // 해당 사용자가 존재하는지 확인하는 쿼리
    const query = "SELECT * FROM korean WHERE lyrics = ? AND verse = 1 ";
    connection.query(query, [lyrics], (err, results, fields) => {
      if (err) {
        console.error("Error logging in:", err);
        res.status(500).json({ message: "로그인에 실패했습니다." });
        return;
      }

      // 로그인 성공 여부 확인
      if (results.length > 0) {
        const user = results[0];
        const tokenPayload = {
          lyrics: user.lyrics,
        };
        const token = jwt.sign(tokenPayload, secretKey, { expiresIn: '1h' });
        res.status(200).json({ message: "당신은 애국자입니다", token });
      } else {
        res.status(401).json({ message: "당신은 매국노입니다" });
      }
    });
  });

  // passOne
  server.post("/passOne", (req, res) => {
    const { answer } = req.body;

    // 해당 사용자가 존재하는지 확인하는 쿼리
    const query = "SELECT * FROM pass WHERE answer= ? AND num = 1";
    connection.query(query, [answer], (err, results, fields) => {
      if (err) {
        console.error("Error logging in:", err);
        res.status(500).json({ message: "로그인에 실패했습니다." });
        return;
      }

      // 로그인 성공 여부 확인
      if (results.length > 0) {
        const user = results[0];
        const tokenPayload = {
          answer: user.answer,
        };
        const tokenOne = jwt.sign(tokenPayload, secretKey, { expiresIn: '1h' });
        res.status(200).json({ message: "당신은 html을 잘 압니다", tokenOne });
      } else {
        res.status(401).json({ message: "당신은 html을 모릅니다" });
      }
    });
  });

  // passTwo
  server.post("/passTwo", (req, res) => {
    const { answer } = req.body;

    // 해당 사용자가 존재하는지 확인하는 쿼리
    const query = "SELECT * FROM pass WHERE answer= ? AND num = 2";
    connection.query(query, [answer], (err, results, fields) => {
      if (err) {
        console.error("Error logging in:", err);
        res.status(500).json({ message: "로그인에 실패했습니다." });
        return;
      }

      // 로그인 성공 여부 확인
      if (results.length > 0) {
        const user = results[0];
        const tokenPayload = {
          answer: user.answer,
        };
        const tokenTwo = jwt.sign(tokenPayload, secretKey, { expiresIn: '1h' });
        res.status(200).json({ message: "당신은 html을 잘 압니다", tokenTwo });
      } else {
        res.status(401).json({ message: "당신은 html을 모릅니다" });
      }
    });
  });

  // passThree
  server.post("/passThree", (req, res) => {
    const { answer } = req.body;

    // 해당 사용자가 존재하는지 확인하는 쿼리
    const query = "SELECT * FROM pass WHERE answer= ? AND num = 3";
    connection.query(query, [answer], (err, results, fields) => {
      if (err) {
        console.error("Error logging in:", err);
        res.status(500).json({ message: "로그인에 실패했습니다." });
        return;
      }

      // 로그인 성공 여부 확인
      if (results.length > 0) {
        const user = results[0];
        const tokenPayload = {
          answer: user.answer,
        };
        const tokenThree = jwt.sign(tokenPayload, secretKey, { expiresIn: '1h' });
        res.status(200).json({ message: "당신은 html을 잘 압니다", tokenThree });
      } else {
        res.status(401).json({ message: "당신은 html을 모릅니다" });
      }
    });
  });
  // passFour
  server.post("/passFour", (req, res) => {
    const { answer } = req.body;

    // 해당 사용자가 존재하는지 확인하는 쿼리
    const query = "SELECT * FROM pass WHERE answer= ? AND num = 4";
    connection.query(query, [answer], (err, results, fields) => {
      if (err) {
        console.error("Error logging in:", err);
        res.status(500).json({ message: "로그인에 실패했습니다." });
        return;
      }

      // 로그인 성공 여부 확인
      if (results.length > 0) {
        const user = results[0];
        const tokenPayload = {
          answer: user.answer,
        };
        const tokenFour = jwt.sign(tokenPayload, secretKey, { expiresIn: '1h' });
        res.status(200).json({ message: "당신은 html을 잘 압니다", tokenFour });
      } else {
        res.status(401).json({ message: "당신은 html을 모릅니다" });
      }
    });
  });

  // Next.js 서버에 라우팅 위임
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  // 서버 시작
  const port = 3000;
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
