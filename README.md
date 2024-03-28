# LMS Frontend
### setup instructions
1. clone the project
...
 git clone https://github.com/2002NishuMalik/learning_management_system.git
...
2. move into the the directory
...
  cd learning_management_system
...
3. instal dependencies
...
  npm i
... 

4. run the server
...

  npm run dev
...



### setup instructions for tailwind 
[tailwind official instruction doc](https://tailwindcss.com/docs/installation)

1. install tailwindcss
...
npm install -D tailwindcss
...
2. create tailwind confi file
...
 npx tailwindcss init
...

3. add file extensions to tailwind confi file in the contenrs property
...
  "./src/**/*.{html,js,jsx,ts,tsx}"
...  

4. add the tailwind directives at the top of the `index.css` file

...
 @tailwind base;
 @tailwind components;
 @tailwind utilities;
...

