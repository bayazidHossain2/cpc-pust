<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>

    <title>cpc Mail Varification</title>
</head>
<body>
    <h1 class=' text-xl font-bold'>{{$mailData['title']}}.</h1>
    <br>
    <p class=' text-lg '> Here is your varification code. Use this code to verify your mail.
    Without varifying your email<p><p class=' text-lg  text-red-600'> your account never be approved.</p>
    
    <div class=' my-8 flex justify-center'>
        <h2 class=' text-2xl font-bold'>{{$mailData['code']}}</h2>
    </div>

    <p class=' text-lg '>Please Don't Share your varification code with others.</p>
    <p>Stay with cpc, pust.</p>
    <p>Thank you.</p>
</body>
</html>