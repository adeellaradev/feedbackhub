<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

# FeedbackHub – Laravel + Inertia.js

A Laravel 12 application using **Inertia.js** for modern SPA-like experience.  
Includes authentication, feedback submission, and comments system.

---

## 🚀 Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/adeellaradev/feedbackhub
cd feedbackhub
```

### 2️⃣ Install PHP dependencies

```bash
composer install
```

### 3️⃣ Install JavaScript dependencies

```bash
npm install
```

### 4️⃣ Configure environment

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Update `.env` with your local database credentials, e.g.:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=feedbackhub
DB_USERNAME=root
DB_PASSWORD=
```

### 5️⃣ Generate application key

```bash
php artisan key:generate
```

### 6️⃣ Run migrations & seeders

```bash
php artisan migrate:fresh --seed
```

### 7️⃣ Compile assets

```bash
npm run dev
# Or for production:
npm run build
```

---

## 🧪 Default Users

The database seeder will create 10 test users.
You can log in with the first user:

| Email | Password |
|-------|----------|
| user1@example.com | password |

---

## 📦 Tech Stack

- **Laravel 12**
- **Inertia.js**
- **Vue 3**
- **Tailwind CSS**
- **MySQL** (can also use SQLite/PostgreSQL)

---

## 🛠 Useful Commands

Run Laravel dev server:

```bash
php artisan serve
```

Watch for JS/CSS changes:

```bash
npm run dev
```