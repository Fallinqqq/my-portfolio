const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    console.log("Received request for:", req.url);
    
    // Default to index.html.bak
    let filePath = path.join(__dirname, req.url === "/" ? "index.html.bak" : req.url);
    
    // Handle .bak files
    if (!filePath.endsWith(".bak") && !filePath.endsWith(".png") && !filePath.endsWith(".jpg")) {
        filePath = filePath + ".bak";
    }

    console.log("Looking for file at:", filePath);

    // Get the file extension
    const extname = path.extname(filePath.replace(".bak", ""));

    // Set content type based on file extension
    const contentType = {
        ".html": "text/html",
        ".js": "text/javascript",
        ".css": "text/css",
        ".png": "image/png",
        ".jpg": "image/jpg",
        ".gif": "image/gif"
    }[extname] || "text/plain";

    // Read and serve the file
    fs.readFile(filePath, (error, content) => {
        if (error) {
            console.log("Error reading file:", error);
            if(error.code === "ENOENT") {
                res.writeHead(404);
                res.end(`File not found: ${filePath}`);
            } else {
                res.writeHead(500);
                res.end(`Server Error: ${error.code}`);
            }
        } else {
            res.writeHead(200, { "Content-Type": contentType });
            res.end(content, "utf-8");
            console.log("Successfully served file:", filePath);
        }
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});