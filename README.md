<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Deployment in Progress</title>
    <style>
        body {
            background-color: #1a1a1a;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-family: 'Arial', sans-serif;
        }

        .deployment-container {
            text-align: center;
            color: #f0f0f0;
        }

        .spinner {
            margin: 10px auto;
            width: 50px;
            height: 50px;
            position: relative;
        }

        .circle {
            width: 100%;
            height: 100%;
            position: absolute;
            animation: scale 1s infinite ease-in-out;
        }

        @keyframes scale {
            0% {
                transform: scale(0);
            }
            50% {
                transform: scale(1);
            }
            100% {
                transform: scale(0);
            }
        }

        .circle:nth-child(1) {
            animation-delay: 0.2s;
            background-color: #f0f0f0;
        }

        .circle:nth-child(2) {
            animation-delay: 0.4s;
            background-color: #ff5e5e;
        }

        .circle:nth-child(3) {
            animation-delay: 0.6s;
            background-color: #f0f0f0;
        }
    </style>
</head>
<body>
    <div class="deployment-container">
        <h1>Under Deployment</h1>
        <p>Please wait for 10 minutes, then visit this page again.</p>
        <div class="spinner">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
        </div>
    </div>
</body>
</html>