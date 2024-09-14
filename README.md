# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


--project setup--

step 01 : npm i
step 02 : npm run dev

used styling framework : Bootstrap 5.3

third party components: loading screen / sweetalert 2 / jquery installed but never used

--additional informations--

You can log with,

username : admin@admin.com
password : password

or you can create one user through registeration 

when you logged in,
On top of nav bar left side you will see your user name, when click it there are two options called logout and hard logout
Difference is when your create user it will save in local storage. when you log with your credintials it will save your username in session storage
if you click logout it will clear session storage, but its remain your todos in local storage and if you click hard logout it will clear all the credintials saved on localstorage

data table,
In data table there is action colum for edit, change status and delete records,
if want to edit records it will open a model and you can edit your selected record title and description
there is a power icon button for change status and it will work as a button when you click it it will change your record status,

website fully responsive for all devices!!

for validations i have used basic bootstrap validations,

for make user friendly i have added tooltips

inner pages :
Login 
Register
Forget Password
Home (Todo create and display)


