import cookie from "cookie";

const handler = (req, res) => {
    if (req.method === "POST") {
        res.setHeader('Set-Cookie', [
            cookie.serialize('token', '', {
              maxAge: -1,
              path: '/',
            })
          ]);
    }
    res.end();
};

export default handler;