# Restaurant Service

Microservice for managing restaurants in the Foodify platform.

## Features

- Get all approved restaurants
- Get restaurant by ID
- Create restaurant (restaurant owners)
- Update restaurant
- Delete restaurant
- Admin: Get all restaurants (including pending/rejected)
- Admin: Update restaurant status (approve/reject)

## API Endpoints

### Public Routes
- `GET /restaurants/all` - Get all approved restaurants
- `GET /restaurants/:id` - Get restaurant by ID

### Restaurant Owner Routes (requires auth)
- `POST /restaurants/create` - Create a new restaurant
- `PUT /restaurants/update/:id` - Update restaurant
- `DELETE /restaurants/:id` - Delete restaurant

### Admin Routes (requires admin auth)
- `GET /restaurants/admin/all` - Get all restaurants
- `PUT /restaurants/admin/status/:id` - Update restaurant status

## Environment Variables

- `PORT` - Server port (default: 4005)
- `MONGODB_URI` - MongoDB connection string

## Running the Service

```bash
npm install
npm start
```

For development:
```bash
npm run server
```

