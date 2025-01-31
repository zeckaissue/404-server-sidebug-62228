This is a reproductible example for following issue: 
https://github.com/vercel/next.js/issues/62228

1. npm install
2. npm run dev
3. Go to http://localhost:3001/ko/test (without js enable or prefixed with view-source:)
4. As you can see the page is not server side rendered
5. Do the same test on http://localhost:3000/ok/test and you will that page is correctly rendered