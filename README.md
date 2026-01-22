#  E-Commerce Web Application

This is a full-stack E-Commerce web application built with React for the frontend and Node.js + Express for the backend.  
It allows users to view products, while an admin can add and manage products, including image uploads.

The project is deployed using:
- Vercel for the frontend
- Render for the backend



##  Live Links

- Frontend (Vercel):
  https://ecommerce-frontend-rtza.vercel.app

- Backend API (Render): 
  https://ecommerce-backend-vs0f.onrender.com



##  Features

###  User Features
- View available products
- See product images, prices, and categories
- Responsive UI for different screen sizes

###  Admin Features
- Add new products
- Upload product images
- Set product category and pricing
- View list of all products

###  Backend Features
- RESTful API built with Express
- Image upload handling
- Static image hosting
- MongoDB database integration



##  Technologies Used

### Frontend
- React
- React Router
- CSS
- Normalize.css
- Fetch API

### Backend
- Node.js
- Express.js
- MongoDB
- Multer (for image uploads)

### Deployment
- Vercel (Frontend)
- Render (Backend)



##  Project Setup Instructions

###  Clone the repository
```bash
git clone https://github.com/your-username/your-repo-name.git

## frontend setup
cd frontend
npm install
npm run dev

create a config.js file
export const BASE_URL = "https://ecommerce-backend-vs0f.onrender.com";

## backend setup
cd backend
npm install
npm start

create .env file
PORT=4000
MONGO_URI=your_mongodb_connection_string


Api endpoints
| Method | Endpoint                 | Description            |
| ------ | ------------------------ | ---------------------- |
| GET    | /api/products/allproducts| Get all products       |
| POST   | /api/products/addproduct | Add a new product      |
| POST   | /api/products/upload     | Upload product image   |





