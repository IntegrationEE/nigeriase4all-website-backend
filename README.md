# NigeriaSE4ALL Blog Backend

This repository represents the backend of the [Nigeria SE4ALL website](https://nigeriase4all.gov.ng/) . It is built on top of **Strapi**, a headless CMS, to manage the content and provide APIs for the frontend.

---

## About Nigeria SE4ALL

Nigeria SE4ALL offers the most accurate data and latest tools that empower better electrification planning in Nigeria. The project is developed by **INTEGRATION environment & energy**, **Reiner Lemoine Institut gGmbH**, and **Alsino Skowronnek**, and financed by **Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ)** and the **Federal Ministry of Power, Works and Housing** under the Nigerian Energy Support Programme (co-funded by the German Government and the European Union).

---

## Public Instances

- [Nigeria SE4ALL Website](https://nigeriase4all.gov.ng/)

---

## Financed By

- [Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ)](https://www.giz.de/)
- [Federal Ministry of Power, Works and Housing](http://www.power.gov.ng)
- Under the Nigerian Energy Support Programme
- Co-funded by the German Government and the European Union

---

## Authors and Developed By

- [INTEGRATION environment & energy](http://www.integration.org/)
- [Reiner Lemoine Institut gGmbH](http://www.reiner-lemoine-institut.de)
- [Alsino Skowronnek](http://www.alsino.io)

---

## How to Use

1. Clone the repository:

```bash
git clone https://github.com/IntegrationEE/nigeriase4all-website-backend
cd nigeriase4all-website-backend
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Navigate to the Strapi admin panel:

```bash
http://localhost:1337/admin
```

**Note:** Make sure to also clone the [Nigeria SE4ALL Website Frontend](https://github.com/IntegrationEE/nigeriase4all-website-frontend) repository.

---

## Admin Panel and Content Management

The Strapi admin panel provides a user-friendly interface for managing all aspects of the website content. 

- **Data Updates**: All data, including blog entries, images, and metadata, can be updated directly through the admin panel. 
- **New Blog Entries**: Admins can create new blog posts by filling out predefined fields for titles, content, images, and tags.
- **Adjustable Content**: Every single text and image displayed on the website is fully adjustable by modifying the related entries in Strapi.
- **Access Control**: Only users with admin privileges can access the admin panel to ensure secure content management.

This flexibility allows the website to remain dynamic and up-to-date without requiring changes to the codebase.

---

## API Documentation

The API documentation is available at:

```bash
http://localhost:1337/documentation/v1.0.0
```

---

## Custom Features

This backend is primarily a Strapi implementation with scaffolded entities via the Strapi UI. However, it includes one custom component:

- **se4all-database**: This component provides an interface to the database, enabling the backend to read and provide data series to the frontend.

---

## Setup and Configuration

1. Copy the example environment file and configure your database credentials:
   ```bash
   cp .env.example .env
   ```
   Edit `.env` to set your database connection details and other environment variables as needed.

---

## Strapi 3.x Component Structure

Strapi 3.x organizes backend logic into the following main components for each API:

- **models/**: Define data structures and validation (`*.settings.json`).
- **controllers/**: Handle HTTP requests and responses.
- **services/**: Encapsulate reusable business logic.
- **routes.json**: Configure API endpoints and permissions.
- **documentation/**: Optional OpenAPI documentation for each API.

Custom features (like `se4all-database`) follow this structure for maintainability and extensibility.

---

## Server Deployment

For production deployment, you can use [pm2](https://pm2.keymetrics.io/) to manage the Strapi process:

```bash
npm install -g pm2
pm2 start npm --name "strapi-backend" -- run start
pm2 save
```
This ensures automatic restarts and process management.

---

## Database Migration

When connecting to a new database, Strapi will automatically run migrations to create the required tables and schema based on your models. Simply start the server after configuring your `.env` file:

```bash
npm run build
npm run start
```
Strapi will detect the new database and initialize it according to your content types and models.

---


## Prerequisites

- Node.js (v12 or higher)
- npm

---

## License

This project is licensed under the GNU Affero General Public License v3.0 (AGPL-3.0). For more details, please refer to the LICENSE file in this repository.