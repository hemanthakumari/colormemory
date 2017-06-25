db = db.getSiblingDB("cmemory");
db.scores.drop();

db.scores.save({
    "name": "hema",
    "email": "hema@gmail.com",
    "highScore": 8
});
db.scores.save({
    "name": "hemantha",
    "email": "hema@gmail.com",
    "highScore": 5
});
db.scores.save({
    "name": "hemanthakumari",
    "email": "hemantha@gmail.com",
    "highScore": 4
});
db.scores.save({
    "name": "kumari",
    "email": "kumari@gmail.com",
    "highScore": 4
});
db.scores.save({
    "name": "hema",
    "email": "hema@gmail.com",
    "highScore": 3
});