import path from 'path';
import express from 'express';

const app = express();

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const buildPath = path.join(__dirname, "/dist");

app.use(express.static(buildPath));

app.get("/*", function (req, res) {
    res.sendFile(
        path.join(__dirname, "/dist/index.html"),
        function (err) {
            if (err) {
                res.status(500).send(err);
            }
        }
    );
});

// Start the server (make sure to specify your port)
const PORT = process.env.PORT || 5173;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
