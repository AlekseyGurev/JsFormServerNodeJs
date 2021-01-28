create TABLE person (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255),
    surname VARCHAR(255),
    name VARCHAR(255),
    data TIMESTAMP
);

create TABLE question (
    id SERIAL PRIMARY KEY,
    text VARCHAR(255),
    data TIMESTAMP,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES person (id)
);