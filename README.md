<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Development Projects</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f0f2f5;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .container {
            text-align: center;
            background-color: #fff;
            border-radius: 12px;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
            padding: 40px;
            max-width: 600px;
            width: 100%;
        }

        h1 {
            color: #333;
            margin-bottom: 20px;
            font-size: 2.5rem;
        }

        .project-links a {
            display: block;
            background-color: #007bff;
            color: white;
            text-decoration: none;
            padding: 15px;
            margin: 10px 0;
            border-radius: 8px;
            transition: background-color 0.3s ease;
        }

        .project-links a:hover {
            background-color: #0056b3;
        }

        .project-links a:active {
            background-color: #004080;
        }

        .project-links a:visited {
            color: white;
        }

        .project-links a:focus {
            outline: 3px solid #0056b3;
        }

        .project-links a::before {
            content: "→ ";
            font-size: 1.2rem;
        }

        footer {
            margin-top: 30px;
            font-size: 0.9rem;
            color: #666;
        }

        @media (max-width: 600px) {
            .container {
                padding: 20px;
                max-width: 90%;
            }

            h1 {
                font-size: 2rem;
            }

            .project-links a {
                padding: 10px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1># Web Development Projects</h1>
        <div class="project-links">
            <a href="https://tecresearch.github.io/HTML-CSS-JS-PHP-projects/HTML-CSS-JS-PHP-projects/">HTML & CSS Project</a>
            <a href="https://tecresearch.github.io/HTML-CSS-JS-PHP-projects/TodoApp/">My Todo App</a>
            <a href="https://tecresearch.github.io/HTML-CSS-JS-PHP-projects/Javascript Project-website/">JavaScript Project Website</a>
        </div>
        <footer>
            &copy; 2024 Web Development Projects. All rights reserved.
        </footer>
    </div>
</body>
</html>
