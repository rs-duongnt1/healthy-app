# Healthy App

### 1. DEMO:
- App: https://healthy-app.rsdn.site/
- Api: https://api.healthy-app.rsdn.site/

### 2. Estimate Time:
- Develop FE: 6h
- Develop BE: 6h
- Deployment: 2h
Total: 14h
-------------------------------------------------
### 2. Summary and relational database (RDB)

![alt text](https://i.ibb.co/9bStSyC/image.png)

### 3. Technical Stacks
- Front-end: Vite + React + Redux/toolkit + styled/emotion
- Back-end: Go + Gin + Gorm
- Database: Posgresql

### 4. Feature
WEB:
- Healthy Homepage (https://healthy-app.rsdn.site/)
- Healthy Records (https://healthy-app.rsdn.site/records)
- Healthy Column (https://healthy-app.rsdn.site/columns)

API:
- `/api/meals` -> returns list meals of application
- `/api/meals/logs` -> returns list meals activity of user
- `/api/body-records` -> returns list body records of user
- `/api/exercises` -> returns list exersises of application
- `api/exercises/logs` -> returns list excersises of user
- `api/diaries` -> returns list diaries of user


### 5. Development
First of all, install all packages and tools below:
- Install docker
- Install go1.18.1
- Install go air (https://github.com/cosmtrek/air)
- Install nodeJS >= 14

Install yarn
```sh
npm install -g yarn
```
Install dependencies
```sh
yarn
```

Install database with docker
```sh
docker compose up -d
```

Serve API (root folder)
```
air
```

Serve Application:
```
yarn dev
```
Access FE: http://localhost:5173

Access API: http://localhost:8080


---------------------------------------
Thank you for watching my project!
